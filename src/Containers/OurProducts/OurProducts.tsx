import Cards from '../../Components/Cards/Cards.tsx';
import { cakes, cookies, cupcakes, pies } from '../../Constants.ts';

const OurProducts = () => {
  return (
    <>
      <h1 style={{fontSize: '80px', color: 'whitesmoke', textAlign: 'center', marginBottom: '20px'}}>Наши изделия</h1>
      <p className="text-white">Наша продукия (сласти, сладости, сладкие блюда) — высококалорийные и легкоусваиваемые пищевые продукты с большим содержанием сахара, отличающиеся приятным вкусом и ароматом.
        В качестве основного сырья для приготовления кондитерских изделий используются следующие виды продуктов: мука (пшеничная, реже кукурузная, рисовая, овсяная и др.), сахар, мёд, фрукты и ягоды, молоко и сливки, жиры, яйца, дрожжи, крахмал, какао, орехи, пищевые кислоты.
      </p>
      <div className="d-flex pt-5 mb-4">
        <Cards sweets={cakes}/>
        <div className="mt-5 ms-3 text-start text-white" style={{width: '450px'}}>
          <h2 className="text-uppercase" style={{fontSize: '60px', }}>Торты</h2>
          <p className="w-75" style={{fontSize: '14px', padding: '10px 0'}}>Примерное, краткое описание -
            ингредиенты, метод и время
            приготовления. Текст сайта редактируемый</p>
          <a>
            <button type="button" className="custom-btn btn-12">
              <span>Сделать заказ</span><span>Выбрать изделие</span>
            </button>
          </a>
        </div>
      </div>
      <div className="d-flex pt-5 mb-4">
        <div className="mt-5 text-start text-white" style={{width: '450px'}}>
          <h2 className="text-uppercase" style={{fontSize: '60px'}}>Пироги</h2>
          <p className="w-75" style={{fontSize: '14px', padding: '10px 0'}}>Примерное, краткое описание -
            ингредиенты, метод и время
            приготовления. Текст сайта редактируемый</p>
          <a>
            <button type="button" className="custom-btn btn-12">
              <span>Сделать заказ</span><span>Выбрать изделие</span>
            </button>
          </a>
        </div>
        <Cards sweets={pies}/>
      </div>
      <div className="d-flex pt-5 mb-4">
        <Cards sweets={cupcakes}/>
        <div className="mt-5 ms-3 text-start text-white" style={{width: '450px'}}>
          <h2 className="text-uppercase" style={{fontSize: '60px'}}>Капкейки</h2>
          <p className="w-75" style={{fontSize: '14px', padding: '10px 0'}}>Примерное, краткое описание -
            ингредиенты, метод и время
            приготовления. Текст сайта редактируемый</p>
          <a>
            <button type="button" className="custom-btn btn-12">
              <span>Сделать заказ</span><span>Выбрать изделие</span>
            </button>
          </a>
        </div>
      </div>
      <div className="d-flex pt-5">
        <div className="mt-5 text-start text-white" style={{width: '450px'}}>
          <h2 className="text-uppercase" style={{fontSize: '60px'}}>Печенье</h2>
          <p className="w-75" style={{fontSize: '14px', padding: '10px 0'}}>Примерное, краткое описание -
            ингредиенты, метод и время
            приготовления. Текст сайта редактируемый</p>
          <a>
            <button type="button" className="custom-btn btn-12">
              <span>Сделать заказ</span><span>Выбрать изделие</span>
            </button>
          </a>
        </div>
        <Cards sweets={cookies}/>
      </div>
    </>
  );
};

export default OurProducts;