
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

const MainLayout = () => {
    return (
        <div>
         <div className=' max-w-5xl mx-auto font-Poppins'> 
          <NavBar></NavBar>
          <Outlet></Outlet>
        
           </div>
          
            
        </div>
    );
};

export default MainLayout;