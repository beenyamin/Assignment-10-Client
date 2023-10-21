
import { Link } from 'react-router-dom';

const MyCartStyle = ({product}) => {

    const {_id, name, image, brandName, price,  } = product;

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

                    <Link to={''} > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Delete</button></Link>
                    <Link to={'/product'} > <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">View</button> </Link>

                </div>
            </div>
            </div>




            </div>
            
        </div>
    );
};

export default MyCartStyle;