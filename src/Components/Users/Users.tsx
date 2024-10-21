import User from './User.tsx';
import { IUser } from '../../types';
import * as React from 'react';

interface IProps {
  users: IUser[];
}

const Users: React.FC<IProps> = ({ users }) => {
  return (
    users &&
    users.map((user) => {
      return <User key={user.id} user={user} />;
    })
  );
};

export default Users;
