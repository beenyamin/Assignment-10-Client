import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import { GrTechnology } from 'react-icons/gr';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Menus = () => {
    const links = ['home', 'addProduct', 'myCart',];
    return (
        <>
            {
                links.map(link => <li key={link}>
                    <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
                </li>)
            }
        </>
    )
}
const NavBar = () => {

    // const { user, logOut } = useAuth();

    const { user, logOut } = useContext(AuthContext);


    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Menus />
                        </ul>
                    </div>
                    <Link to='/home' className="font-bold normal-case text-3xl">

                        <div className="flex">
                            <GrTechnology className='w-10'></GrTechnology>
                            <h2 className='ml-2 font-bold text-2xl'> Tech <span className='text-indigo-600'>Snap</span> </h2>

                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menus />
                    </ul>
                </div>


                {/* avatar part  */}

    <div className="navbar-end">
        {
            user?.email ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
           
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} alt={user.displayName} />
                    
                    </div>
                         <span>{user.email}</span>
                    
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

              

                    </li>
                    <li>
                        <button className="btn btn-sm border-spacing-1  btn-ghost"
                            onClick={logOut}
                        >Logout</button>

                    </li>
                </ul>
            </div>
                :
                <Link to='/login'>
                   <button className="px-5 btn py-2 text-white font-medium rounded-full bg-indigo-600">Log in</button>
                </Link>
        }
    </div>






            </div>
        </>
    );
};

export default NavBar;