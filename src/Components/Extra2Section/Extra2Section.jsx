
import {  BsSmartwatch } from 'react-icons/bs';

const Extra2Section = () => {
    return (
        <div className='text-center justify-center'>
            <h2 className='font-bold text-3xl'>FEATURED CATEGORIES</h2>
            <p className='font-normal text-lg'>Get your desired product from featured category</p>




      <div className="grid lg:grid-cols-4 grid-cols-2 mt-5">

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                <BsSmartwatch className=''></BsSmartwatch>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                </div>
            </div>
            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                </div>
            </div>


      </div>


        </div>



    );
};

export default Extra2Section;