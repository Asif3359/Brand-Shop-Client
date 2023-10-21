import React from 'react';
import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCard = ({ cart, userCarts, setUserCarts }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://brand-server-asif-ahammeds-projects.vercel.app/carts/${cart._id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {

                                const addedUserCarts = userCarts.filter(crt => crt.email == user.email);
                                const remaining = addedUserCarts.filter(crt => crt._id !== cart._id);
                                setUserCarts(remaining);
                                swal("Poof! Your imaginary card has been deleted!", {
                                    icon: "success",
                                });
                                if (remaining.length == 0) {
                                    window.location.reload();
                                    // navigate("/myCart");
                                }

                            }
                        })

                } else {
                    swal("Your imaginary card is safe!");
                }
            });
    }
    const handleByNow = () => {
        toast.warn('No functionality added yet!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 border ">
                <figure><img className='w-full h-[250px] transition  duration-300 ease-in-out hover:scale-110' src={cart.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cart.name}</h2>
                    <p>{cart.description.slice(0, 50)}</p>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-end'><span className='font-bold'>Rating:</span>{cart.rating}</p>
                        </div>
                        <div>
                            <p><span className='font-bold'>Price : </span>{cart.price}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-between">
                        <span><button onClick={handleDelete} className='btn btn-sm btn-primary'>X</button> Remove </span>
                        <button onClick={handleByNow} className="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;