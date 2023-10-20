import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData();

    const {_id, name, image, brandName, Type, price, description, rating } = product || {};

console.log(product)

    return (


        <div>
            <h2 className="text-3xl">Product Details Page</h2>
            <p>{description}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default ProductDetails;