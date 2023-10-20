import { Link } from "react-router-dom";


const Sony = () => {

    // {product}
    // const { name, image, brandName, Type, price, description, rating } = product;

    return (
        
        <div>

            <h2 className="text-3xl mt-6 font-bold text-center
             justify-center"> <span className="text-indigo-600">Brand</span> Sony</h2>

            <div className="card w-10/12 ml-6 lg:ml-0 mt-10 lg:card-side bg-base-100 shadow-xl">
                <figure><img src="" className="w-64 h-48" alt="Album" /></figure>

                <div className="card-body mr-10 pr-5">

                    <h2 className="card-title">{name}</h2>
                    <p> <span className="text-lg font-medium">Model : </span> </p>
                    {/* {Type} */}
                    <p><span className="text-lg font-medium">Price: </span></p>
                    {/* {price} */}

                    <div className="card-actions justify-end">

                        <Link to={'/product'}><button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link>
                        <Link to={'/update'}> <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sony;