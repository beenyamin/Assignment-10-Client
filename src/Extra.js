Add Product, My Cart,


<div className='bg-red-400 my-5 flex justify-between' >

<div>
    <h2 className=' font-medium text-lg'> Tech </h2>
</div>

<ul className='flex gap-5 justify-center font-medium text-lg'>
    <li>

        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-400" : ""
        }>
            Home </NavLink>

    </li>
    <li>

        <NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-400" : ""
        }>
            Add Product </NavLink>

    </li>
    <li>

        <NavLink to="/myCart" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-400" : ""
        }>
            My Cart </NavLink>

    </li>






</ul>

<div>
    <button className='btn btn-sm'>log in</button>
</div>

</div>


FEATURED CATEGORIES

Get your desired product from featured category


<div className="card bg-base-200 h-96 ">
                    <figure className="px-10 pt-5">
                        <LiaShippingFastSolid className='w-52 h-24'></LiaShippingFastSolid>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-2xl font-semibold">Free Shipping</h2>
                        <p className="font-normal text-sm">Our shipping services offer fast, reliable delivery worldwide. From parcels to products, we ensure safe and timely transport for your needs</p>
                        <div className="card-actions">
                            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium">Learn More</button>
                        </div>
                    </div>
                </div>
