import { NavLink, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-white text-center mb-4">Портфолио</h1>
      <nav className="d-flex mb-5">
        <aside className="sidebar">
          <ul className="list-aside">
            <li>
              <NavLink className={({isActive}) => `text-decoration-none ${isActive ? 'active' : 'inactive'}`} to="addNewUser" >Новый пользователь</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => `text-decoration-none ${isActive ? 'active' : 'inactive'}`} to="users">Пользователи</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => `text-decoration-none ${isActive ? 'active' : 'inactive'}`} to="findItem">Поиск предмета</NavLink>
            </li>
          </ul>
        </aside>
        <div className="text-info">
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum delectus earum
            excepturi explicabo facilis ipsum itaque, non praesentium quia quos recusandae sint sunt vel. Amet mollitia
            quos rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto asperiores
            autem dolor dolorum, eligendi error explicabo ipsa neque nulla officiis repudiandae sapiente sed ut vero
            voluptatibus? A aperiam at, aut debitis delectus hic, illum nam neque non optio, porro quidem similique unde
            voluptas voluptatibus! Sed ullam vero voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa enim esse in incidunt magni optio. A cumque expedita, ipsum nisi non omnis pariatur. Accusantium libero nisi officiis repellendus. A adipisci blanditiis consectetur, consequatur consequuntur delectus dolore earum eos est ex facilis, nam nostrum quam quia repellat, repellendus voluptatum. Ipsam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, amet atque consequatur corporis culpa delectus deleniti dolore doloribus dolorum ea earum eum explicabo harum hic impedit incidunt ipsum laudantium molestiae nihil nisi nostrum nulla perspiciatis porro praesentium quos recusandae repellendus, rerum sequi suscipit unde vitae voluptatem voluptatum? A, ab ad aliquam aspernatur blanditiis consequatur culpa cum, debitis dolore doloremque dolorum eaque earum est facere fugit id illo iusto necessitatibus, nemo nesciunt nisi nulla officia officiis quae quaerat quam quasi quisquam quod repellat reprehenderit rerum soluta sunt tempore temporibus ut vero voluptates? Commodi doloribus iste minima necessitatibus nisi tempore vitae? </p>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Portfolio;
