

const Update = () => {

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const Type = form.Type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updateProduct = { name, image, brandName, Type, price, description, rating }
        console.log(updateProduct);

    

     

    }



    return (
        <div>


<div className="bg-[#F4F3F0] mt-14 px-24 py-10 ml-3 lg:ml-0 ">

<h2 className="text-3xl text-center justify-center mb-3 font-extrabold ">Update Product</h2>



<form onSubmit={handleUpdateProduct}>

    <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* row 1 */}
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Image</span>
            </label>
            <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
        </div>


        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Device Name" className="input input-bordered w-full max-w-xs" />
        </div>

        {/* row 2 */}
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Brand Name</span>
            </label>
            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
        </div>


        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Type</span>
            </label>
            <input type="text" name="Type" placeholder="Device Type" className="input input-bordered w-full max-w-xs" />
        </div>


        {/* row 3 */}

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
        </div>


        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Short Description</span>
            </label>
            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
        </div>

    </div>

    <input type="submit" value="Update Product"
        className="btn bg-indigo-600 pl-5 pr-5 text-white btn-block mt-4" />





</form>












</div>
           
        </div>
    );
};

export default Update;