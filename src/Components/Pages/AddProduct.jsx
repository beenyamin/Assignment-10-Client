

const AddProduct = () => {

    const handleAddProduct = e => {

        e.preventDefault ();
        const form = e.target;
        const name = form.name.value ;
        const quantity = form.quantity.value ;
        const supplier = form.supplier.value ;
        const taste = form.taste.value ;
        const category = form.category.value ;
        const details = form.details.value ;
        const photo = form.photo.value;

        const newCoffee = {name , quantity,supplier,taste , category, details,photo}
        console.log(newCoffee);


    }


    return (
        <div className="bg-[#F4F3F0] mt-14 p-24">

        <h2 className="text-3xl text-center justify-center mb-3 font-extrabold ">Add Product</h2>

      
        <form onSubmit={handleAddProduct}>
             {/* form row  name &  quantity */}

            <div className=" flex gap-5" >
                <div className="form-control w-6/12 lg:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group  ">
                      
                        <input  type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* 2 */}

                <div className="form-control md:w-1/2  ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group  ">
                      
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>




             {/* form row supplier & test */}
            <div className="flex gap-5" >

                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group ">
                      
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* 2 */}

                <div className="form-control md:w-1/2  ">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group  ">
                      
                        <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>

           
            </div>
             {/* form row category Details */}
            <div className="flex gap-5" >
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group ">
                      
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* 2 */}
                

                <div className="form-control md:w-1/2  ">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group  ">
                      
                        <input type="text" name="description" placeholder="Short Description " className="input input-bordered w-full" />
                    </label>
                </div>

                {/* 3 */}

            </div>

             {/* form row  */}
            <div className="flex gap-5" >

                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group ">
                      
                        <input type="text" name="rating" placeholder="Add Rating" className="input input-bordered w-full" />
                    </label>
                </div>

            </div>

     
            <input type="submit" value="Add Product" className="btn bg-indigo-600 text-white btn-block mt-4" />




        </form>

    </div>
    );
};

export default AddProduct; 