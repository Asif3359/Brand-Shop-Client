import React from 'react';
import swal from 'sweetalert';

const ProductCard = ({ cart, carts, setCarts }) => {
    console.log(cart._id)
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

                    fetch(`http://localhost:5000/carts/${cart._id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = carts.filter(crt => crt._id !== cart._id);
                                setCarts(remaining);
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });

                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 border ">
                <figure><img className='w-full h-[300px] transition  duration-300 ease-in-out hover:scale-110' src={cart.image} alt="Shoes" /></figure>
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
                        <button className="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;