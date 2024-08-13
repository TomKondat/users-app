import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleUser = ({ usersArr }) => {
  const { userId } = useParams();
  const user = usersArr.find((user) => user.id == userId);
  console.log(user);

  return (
    <div>
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
      <div>
        <img src={user.image} alt={user.name} />
        <h1>{user.name}</h1>
        <h3>{user.age} years old</h3>
      </div>
    </div>
  );
};

export default SingleUser;
