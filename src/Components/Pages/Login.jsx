import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const {SignInUser,googleLogin} = useContext (AuthContext);

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');

    const location = useLocation ();
    const navigate = useNavigate ();
    console.log('location in the log in page ',location);



    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('');
        setLoginSuccess('');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters!')
            return;

        }
        else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error(" Your password should have  at Least one Capital letter! ")
            return
        }


        SignInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success(' Log in SuccessFully !')
                navigate (location?.state ? location.state : '/home' );

            })
            .catch(error => {
                console.error(error)
                toast.error('Login failed. Please Check your Email And Password');
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()

            .then(result => {
                console.log(result.user)
                toast.success(' Google login Successful !');
                navigate (location?.state ? location.state : '/home' );
            })
            .catch(error => {
                console.error(error)
                toast.error('Google login failed. Please try again.');
            })
    }


    return (
        <div>
           <div>


           <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold"> Login Here !</h1>
            </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Your Email" required className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" required className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="w-full bg-indigo-600  text-white rounded font-semibold py-2 text-xl">Log in</button>
                </div>


                {
                    loginError && <p className="bg-indigo-600  my-5 font-semibold">{loginError}</p>
                }

                {
                    loginSuccess && <p className="text-indigo-600  my-5 font-semibold">{loginSuccess}</p>
                }

            </form>

            <p className="text-center mt-4">Do not have an account? Please <Link className=" underline text-indigo-600   font-bold" to={'/register'}>Register</Link></p>


         <div className=" w-full ml-10 lg:ml-24 ">  

         <button onClick={handleGoogleLogin} 
          className=" bg-indigo-600 py-2 rounded text-white 
          font-semibold mb-4 px-3 "> Google Login </button>



         </div>
        </div>

        
    

    </div>

    
        </div>
    </div>




           </div>

           <Toaster></Toaster>
        </div>
    );
};

export default Login;