import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <div className="header-block">
      <nav className="navbar pt-0" style={{backgroundColor: 'rgba(218,211,211,0.45)'}}>
        <div className="header-info">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/marker.png" alt="marker"/>
                <p className="mt-3 ms-2">г. Бишкек, ул. Юнусалиева 154</p>
              </div>
              <div className="d-flex align-items-center">
                <img  width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/ringer-volume.png"
                     alt="ringer-volume"/>
                <p className="mt-3 ms-3 me-3">+996 (999) 081093</p>
                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/whatsapp--v1.png"
                     alt="whatsapp--v1"/>
                <img className="ms-2 me-2" width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/telegram-app.png"
                     alt="telegram-app"/>
                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
                     alt="instagram-new--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='navigation'>
            <div className="mt-3 mb-3">
              <a className="navbar-brand" href="#">
                <img
                  src="https://msk.tortomaster.ru/bitrix/templates/tort_adapt_new/images/logo.svg?2024"
                  alt="Sweet cake" width="200" height="100"/>
              </a>
            </div>
            <nav className="nav-content">
              <li>
                <NavLink className="text-white fs-4 text-decoration-none" to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink className="text-white fs-4 text-decoration-none" to="/aboutUs">О нас</NavLink>
              </li>
              <li>
                <NavLink className="text-white fs-4 text-decoration-none" to="/ourProducts">Наши изделия</NavLink>
              </li>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ToolBar;