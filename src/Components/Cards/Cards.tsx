import { ISweet } from '../../types';
import * as React from 'react';
import Card from './Card/Card.tsx';

interface ICard {
  sweets: ISweet[]
}

const Cards: React.FC<ICard> = ({sweets}) => {
  return (
    sweets.map((sweet) => (
      <Card key={sweet.id} sweet={sweet}/>
    ))
  );
};

export default Cards;