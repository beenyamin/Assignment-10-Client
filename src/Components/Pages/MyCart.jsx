
import {  useLoaderData } from 'react-router-dom';
import MyCartStyle from './MyCartStyle';

const MyCart = () => {

    const products = useLoaderData () ;


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-4  mt-10" >

            {
                products.map (product => <MyCartStyle key={product._id} product={product}></MyCartStyle>)
            }
          
           
         
        </div>
    );
};

export default MyCart;