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
            <h3>{cart.name}</h3>
            <button onClick={handleDelete} className='btn btn-sm'>X</button>
        </div>
    );
};

export default ProductCard;