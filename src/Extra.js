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

https://ibb.co/p2XHnCx