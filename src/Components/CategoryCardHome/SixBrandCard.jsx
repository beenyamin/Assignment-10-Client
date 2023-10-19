

import { Link } from "react-router-dom";


const SixBrandCard = () => {
    
    
    return (

    
    
       <div className='text-center px-0 lg:px-20 ml-10 lg:ml-0 justify-center mt-28 lg:mt-0'>

        <h2 className='font-bold text-3xl'> Our Brand</h2>
        <p className='font-normal text-lg'>Get your desired product from Our Brand</p>


  <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 space-y-5 ">

        <div className="card w-60 h-56 mt-5  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src="/apple.png" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <Link to={"/apple"}> <h2 className="card-title">Apple</h2></Link>
            </div>

        </div>



        <div className="card w-60  h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/oppo.png" alt="" />

              
            </figure>
            <div className="card-body items-center text-center">
                <Link to={"/oppo"}> <h2 className="card-title">Oppo</h2></Link>
            </div>
        </div>


        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 ">
            <img src="/samsung.png" alt="" />
             
            </figure>
            <div className="card-body items-center text-center">
               <Link to={"/samsung"}><h2 className="card-title">Samsung</h2></Link>
  
            </div>
        </div>



        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/symphony.png" alt="" />     
            </figure>
            <div className="card-body items-center text-center">
                <Link to={"/symphony"}> <h2 className="card-title">Symphony</h2></Link>
               
            </div>

        </div>


        <div className="card w-60  h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/sony.png" alt="" />
             
            </figure>
            <div className="card-body items-center text-center">
             <Link to={"/sony"}> <h2 className="card-title">Sony</h2></Link>
               
               
            </div>
        </div>

        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/Vivo-Logo.jpg" alt="" />
           
            </figure>
            <div className="card-body items-center text-center">
              <Link to={"/vivo"}> <h2 className="card-title">Vivo</h2></Link>
               
                
            </div>
        </div>

      



  </div>
    </div>

 
      

                            
       
    );
};

export default SixBrandCard;