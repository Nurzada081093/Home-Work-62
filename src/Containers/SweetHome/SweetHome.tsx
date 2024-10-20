import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import OurProducts from '../OurProducts/OurProducts.tsx';
import AboutUs from '../AboutUs/AboutUs.tsx';
import Footer from '../../Components/Footer/Footer.tsx';
import Home from '../Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';

const SweetHome = () => {

  return (
    <>
      <ToolBar/>
      <div className="bg-black pb-5 pt-5">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/ourProducts" element={<OurProducts/>}/>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SweetHome;
