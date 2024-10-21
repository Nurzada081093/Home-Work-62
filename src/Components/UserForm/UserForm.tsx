import React, { useState } from 'react';
import { IUser, UserProps } from '../../types';

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<UserProps>({
    name: "",
    email: "",
    position: "",
    active: false,
  });

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeUserActiveStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        active: e.target.checked,
      };
    });
  };

  const submitNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      newUser.name.trim().length === 0 ||
      newUser.email.trim().length === 0 ||
      newUser.position.trim().length === 0
    ) {
      alert("All fields must be filled in!");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        position: "",
        active: false,
      });
    }
  };

  return (
    <form
      className="p-4 mb-2 bg-primary-subtle text-primary-emphasis rounded-4"
      onSubmit={submitNewUser}
    >
      <h3 className="mt-3 mb-4 text-center">Add new user</h3>
      <div className="form-group mb-3">
        <label htmlFor="name" className="ms-2">
          Name:
        </label>
        <input
          type="text"
          value={newUser.name}
          id="name"
          name="name"
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className="ms-2">
          Email:
        </label>
        <input
          type="email"
          value={newUser.email}
          id="email"
          name="email"
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="position" className="ms-2">
          Position:
        </label>
        <select
          className="form-select mt-2"
          id="position"
          name="position"
          value={newUser.position}
          onChange={changeUser}
          required
        >
          <option value="">Select your position!</option>
          <option value="Manager">Manager</option>
          <option value="Administrator">Administrator</option>
          <option value="Tour operator">Tour operator</option>
          <option value="Tour guide">Tour guide</option>
          <option value="Guide-translator">Guide-translator</option>
          <option value="Animator">Animator</option>
          <option value="Customer service">Customer service</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="active" className="ms-2">
          Active:
        </label>
        <div className="ms-2 mt-1">
          <input
            type="checkbox"
            id="active"
            name="active"
            checked={newUser.active}
            onChange={changeUserActiveStatus}
          />
          <label htmlFor="active" className="ms-2">
            Yes
          </label>
        </div>
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Add
      </button>
    </form>
  );
};

export default UserForm;
