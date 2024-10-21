import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import OurProducts from '../OurProducts/OurProducts.tsx';
import AboutUs from '../AboutUs/AboutUs.tsx';
import Footer from '../../Components/Footer/Footer.tsx';
import Home from '../Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio.tsx';
import UserForm from '../../Components/UserForm/UserForm.tsx';
import { Item, IUser } from '../../types';
import { useState } from 'react';
import Users from '../../Components/Users/Users.tsx';
import Cells from '../../Components/Cells/Cells.tsx';
import Count from '../../Components/Count/Count.tsx';
import ResetButton from '../../Components/ResetButton/ResetButton.tsx';

const SweetHome = () => {

  const [users, setUsers] = useState<IUser[]>([
    {
      id: "01",
      name: "Molli",
      email: "molli@gmail.com",
      position: "Manager",
      active: true,
    },
    {
      id: "02",
      name: "Salli",
      email: "salli@gmail.com",
      position: "Administrator",
      active: true,
    },
    {
      id: "03",
      name: "Elli",
      email: "elli@gmail.com",
      position: "Customer service",
      active: false,
    },
    {
      id: "04",
      name: "Milla",
      email: "milla@gmail.com",
      position: "Tour guide",
      active: false,
    },
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  const usersInfo = (
    <div className="col-12">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <Users users={users}/>
      </div>
    </div>
  );

  const createItems = () => {
    const arrayItems: Item[] = [];

    for (let i:number = 0; i < 36; i++) {
      arrayItems.push({hasItem: false, clicked: false, id: i});
    }

    const randomItem:number = Math.floor(Math.random() * arrayItems.length);

    for (let i:number = 0; i < arrayItems.length; i++) {
      if (i === randomItem) {
        arrayItems[i].hasItem = true;
      }
    }

    return arrayItems;
  };

  const [items, setItems] = useState(createItems());
  const [counts, setCounts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setCounts(0);
    setItems(createItems());
    setGameOver(false);
  };

  const changeColor = (id: number) => {

    const copyItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          clicked: true,
        };
      }
      return item;
    });

    setItems(copyItems);

    const count: number = counts + 1;
    setCounts(count);

    copyItems.find(item => {
      if (item.clicked && item.hasItem) {
        setTimeout(() => {
          setGameOver(true);
          alert('Поздравляю! Вы успешно нашли предмет. Если хотите продолжить игру, то нажмите на кнопку "Reset".');
        }, 50);
      }
    });
  };

  const CellBlock = (
    <div style={{width: '700px', height: '570px', marginLeft: '20%'}}>
      <div className="game-board">
        <Cells items={items} changeColor={changeColor} gameOver={gameOver}/>
      </div>
      <div className="content">
        <Count counter={counts}/>
        <ResetButton resetGame={resetGame}/>
      </div>
    </div>
  );

  return (
    <>
      <ToolBar/>
      <div className="bg-black pb-5 pt-5">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/ourProducts" element={<OurProducts/>}/>
            <Route path="/portfolio" element={<Portfolio/>}>
              <Route path="addNewUser" element={<UserForm addNewUser={addNewUser}/>}/>
              <Route path="users" element={usersInfo}/>
              <Route path="findItem" element={CellBlock}/>
            </Route>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SweetHome;
