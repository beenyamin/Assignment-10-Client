
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCartStyle = ({ product,products, setProducts }) => {

    const { _id, name, image, brandName, price, } = product;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment10-server-side-three.vercel.app/addCard/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item deleted SuccessFully',
                                'success'
                            )
                            const remaining = products.filter(product => product._id !== _id);
                            setProducts(remaining);
                            console.log(remaining)
                        }

                    })
            }
        })
    }

    return (
        <div>

            <div  >

                <div className="card w-10/12 ml-6 lg:ml-0 mt-10 lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={image} className="w-64 h-48" alt="Album" /></figure>

                    <div className="card-body mr-10 pr-5">

                        <h2 className="card-title">{name}</h2>
                        <p> <span className="text-lg font-medium">Model : {brandName} </span> </p>
                        <p><span className="text-lg font-medium">Price: {price} </span></p>

                        <div className="card-actions justify-end">

                            <button onClick={() => handleDelete(_id)} className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Delete</button>
                            <Link to={'/product'} > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">View</button> </Link>

                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default MyCartStyle;