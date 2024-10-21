export interface ISweet {
  image: string;
  name: string;
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  position: string;
  active: boolean;
  imageUrl?: string | null;
}

export interface UserProps {
  name: string;
  email: string;
  position: string;
  active: boolean;
}

export interface Item {
  hasItem: boolean;
  clicked: boolean;
  id: number;
}