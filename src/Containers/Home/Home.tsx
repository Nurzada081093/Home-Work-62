
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="text-white text-uppercase" style={{fontSize: '70px'}}>Кондитерские</h1>
          <span style={{color: 'orange', fontSize: '50px', textTransform: 'uppercase'}}>изделия</span>
          <p className="text-white fs-5 mt-3 mb-5">Скидки 15% на все виды нашей продукции</p>
          <button className="custom-btn-order btn-7" type="button"><span>Заказать</span></button>
        </div>
      </div>
      <div>
        <h3 className="text-center text-white mt-5 mb-5">Наши преимущества</h3>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="ms-5">
              <img width="64" height="64" src="https://img.icons8.com/laces/64/FFFFFF/wedding-cake.png"
                   alt="wedding-cake"/>
            </div>
            <p className="w-75 mt-3 text-center text-secondary">Большой выбор десертов</p>
          </div>
          <div>
            <div className="ms-5 ps-3">
              <img width="64" height="64" src="https://img.icons8.com/carbon-copy/50/FFFFFF/cake.png" alt="cake"/>
            </div>
            <p className="w-75 mt-3 text-center text-secondary">Экологическая, полезная продукция</p>
          </div>
          <div>
            <div className="ms-5">
              <img width="64" height="64"
                   src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-jelly-food-flatart-icons-outline-flatarticons.png"
                   alt="external-jelly-food-flatart-icons-outline-flatarticons"/>
            </div>
            <p className="w-75 mt-3 text-center text-secondary">Быстрая, бесплатная доставка</p>
          </div>
          <div>
            <div className="ms-5">
              <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/birthday.png"
                   alt="birthday"/>
            </div>
            <p className="w-75 mt-3 text-center text-secondary">Гарантия свежести продукта</p>
          </div>
        </div>
      </div>
      <div className="request-block">
        <h3 className="request-title">Оставить заявку</h3>
        <p className="request-text">Оставьте заявку прямо сейчас и получите скидку на первый заказ 10%</p>
        <form className="form-request">
          <div className="input-block container">
            <label>
              Ваше имя:*
              <br/>
              <input type="text" required/>
            </label>
            <label>
              Эл.почта:*
              <br/>
              <input type="email" required/>
            </label>
            <label>
              Телефон:*
              <br/>
              <input type="text" required/>
            </label>
          </div>
          <div className="comment container">
            <label>
              Комментарии:
              <br/>
              <textarea className="user-comment"></textarea>
            </label>
          </div>
          <button type="submit" className="form-btn">Отправть</button>
        </form>
      </div>
    </>
  );
};

export default Home;