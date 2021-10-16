import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const User = () => {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setuser(res.data);
  };

  return (
    <div className="container">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name :{user.name}</li>
        <li className="list-group-item">username :{user.username}</li>
        <li className="list-group-item">email :{user.email}</li>
        <li className="list-group-item">phone :{user.phone}</li>
        <li className="list-group-item">website :{user.website}</li>
      </ul>
    </div>
  );
};
export default User;
