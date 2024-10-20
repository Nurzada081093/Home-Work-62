import * as React from 'react';
import { ISweet } from '../../../types';

interface Props {
  sweet: ISweet;
}

const Card: React.FC<Props> = ({sweet}) => {
  return (
    <div className="cake-card me-5">
      <img src={sweet.image} alt={sweet.name}/>
    </div>
  );
};

export default Card;