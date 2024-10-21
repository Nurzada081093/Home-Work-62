const Footer = () => {
  return (
    <div>
      <div className="footer-info">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/marker.png" alt="marker"/>
              <p className="mt-3 ms-2">г. Бишкек, ул. Юнусалиева 154</p>
            </div>
            <div className="d-flex align-items-center">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/ringer-volume.png"
                   alt="ringer-volume"/>
              <p className="mt-3 ms-3 me-3">+996 (999) 081093</p>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/whatsapp--v1.png"
                   alt="whatsapp--v1"/>
              <img className="ms-2 me-2" width="30" height="30"
                   src="https://img.icons8.com/ios/50/FFFFFF/telegram-app.png"
                   alt="telegram-app"/>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
                   alt="instagram-new--v1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;