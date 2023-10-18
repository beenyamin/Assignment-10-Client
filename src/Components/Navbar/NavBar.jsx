
import { NavLink } from 'react-router-dom';
import { GrTechnology } from 'react-icons/gr';

const NavBar = () => {
    return (
        <div>
             <div className=" navbar my-5 ">

                <div className="flex-1">
                    <GrTechnology></GrTechnology>
                    <h2 className=' font-bold text-lg'> Tech <span className='text-indigo-600'>Snap</span> </h2>  
                </div>

               <div className='mr-8'>
               <ul className='flex gap-5 justify-center font-medium text-lg'>
                    <li>

                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-600" : ""
                        }>
                            Home </NavLink>

                    </li>
                    <li>

                        <NavLink to="/addProduct" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-600" : ""
                        }>
                            Add Product </NavLink>

                    </li>
                    <li>

                        <NavLink to="/myCart" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-600" : ""
                        }>
                            My Cart </NavLink>

                    </li>


                </ul>
               </div>


                <div className="flex">
                <button className='btn btn-sm'>log in</button>
                 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/public/pexels-photo-91224.webp" alt='myImage' />
                            </div>

                        </label>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>



                </div>








        </div>

    );
};

export default NavBar;