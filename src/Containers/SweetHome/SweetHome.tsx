import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import OurProducts from '../OurProducts/OurProducts.tsx';
import AboutUs from '../AboutUs/AboutUs.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const SweetHome = () => {

  return (
    <>
      <ToolBar/>
      <div className="bg-black pb-5 pt-5">
        <div className="container">
          <div className="about-block">
            <AboutUs/>
          </div>

          <OurProducts/>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default SweetHome;