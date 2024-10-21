import * as React from 'react';
import { IUser } from '../../types';

interface UserProps {
  user: IUser;
}

const User: React.FC<UserProps> = ({ user }) => {
  const imageUrl =
    "https://i.pinimg.com/736x/51/0f/49/510f4957de3eb14c591fddb875ae9c94.jpg";

  const image: string = user.imageUrl || imageUrl;

  if (user.position === "Manager") {
    user.imageUrl =
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/01/24191810/travel-and-tourism-management.jpg";
  } else if (user.position === "Administrator") {
    user.imageUrl =
      "https://www.shutterstock.com/image-vector/hotel-administrator-meets-guests-reception-260nw-2047458986.jpg";
  } else if (user.position === "Tour operator") {
    user.imageUrl =
      "https://miro.medium.com/v2/resize:fit:960/1*SISMB4Ke2fuzElQPNiiuhQ.jpeg";
  } else if (user.position === "Tour guide") {
    user.imageUrl =
      "https://img.freepik.com/free-vector/tour-vacation-guide-illustration_1284-16528.jpg";
  } else if (user.position === "Guide-translator") {
    user.imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInfoHYUPwMoTyV4bNbnr2BF1Gm1ghguOwScjdMRlF1k7O2Xs5DEHKQV7U-iQvk81P4NU&usqp=CAU";
  } else if (user.position === "Animator") {
    user.imageUrl =
      "https://cdn4.vectorstock.com/i/1000x1000/39/63/tourist-girl-cartoon-with-bag-design-vector-25633963.jpg";
  } else if (user.position === "Customer service") {
    user.imageUrl =
      "https://www.itilite.com/in/wp-content/uploads/sites/3/2023/04/The-importance-of-customer-service-in-travel-management-companies-1-unsmushed.jpg";
  }

  const imageStyle = {
    background: `url(${image}) center center / cover no-repeat`,
    height: "180px",
    width: "100%",
  };

  const userActive = user.active ? <span>Yes</span> : <span>No</span>;

  return (
    <div className="col">
      <div className="card">
        <div className="card-img-top" style={imageStyle} />
        <div className="card-body">
          <h5 className="card-title text-center">{user.name}</h5>
          <p className="card-text">
            <b>Position:</b> {user.position}
          </p>
          <p className="card-text">
            <b>Email:</b> {user.email}
          </p>
          <p className="card-text">
            <b>Active:</b> {userActive}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
