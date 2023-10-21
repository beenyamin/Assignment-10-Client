
import { Link } from 'react-router-dom';

const MyCart = () => {


    

    return (
        <div>
            <h2 className="text-3xl">My Cart Page</h2>
            <div  className="grid grid-cols-1 lg:grid-cols-2  mt-10" >

            <div className="card w-10/12 ml-6 lg:ml-0 mt-10 lg:card-side bg-base-100 shadow-xl">
                <figure><img src="" className="w-64 h-48" alt="Album" /></figure>

                <div className="card-body mr-10 pr-5">

                    <h2 className="card-title">{name}</h2>
                    <p> <span className="text-lg font-medium">Model : </span> </p>
                    <p><span className="text-lg font-medium">Price: </span></p>

                    <div className="card-actions justify-end">

                        <Link > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Delete</button></Link>
                        <Link > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link>

                    </div>
                </div>
            </div>




            </div>
         
        </div>
    );
};

export default MyCart;