import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData();

    const { _id, name, image, brandName, Type, price, description, rating } = product || {};

    console.log(product)

    return (


        <div className="mt-14">


        <div className="hero rounded-lg  min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <img src={image} className=" w-96 lg:mr-24 rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl mb-5 font-bold">{name}</h1>
            <p className="py-"> <span className="text-indigo-600 text-xl font-semibold ">Brand: </span>    {brandName}</p>
            <p className="py-"> <span className="text-indigo-600 text-xl font-semibold ">Variant: </span>  {Type}</p>
            <p className="py-"> <span className="text-indigo-600 text-xl font-semibold ">Price: </span> {price}</p>

            <p className=""> <span className="text-indigo-600 text-xl font-semibold ">Rating: </span> {rating}</p>

            <p className=""> <span className="text-indigo-600 text-xl font-semibold ">Details :</span>{description}</p>


           <Link><button className= " text-white rounded-lg py-2 mt-4 font-medium  px-4 bg-pink-500 hover:bg-indigo-600 ...">Add To Cart</button></Link>
           <Link><button className= " text-white rounded-lg py-2 mt-4 ml-2 font-medium  px-4 bg-pink-500 hover:bg-indigo-600 ...">Buy Now</button></Link>

        </div>
    </div>
</div>






        </div>
    );
};

export default ProductDetails;