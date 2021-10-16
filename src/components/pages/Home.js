import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log("useEffect is call...");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
    console.log(result);
  };

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h3>User List</h3>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link to={`/users/${user.id}`} className="btn btn-primary mr-2">
                  view
                </Link>
                <Link
                  to={`/users/edit/${user.id}`}
                  className="btn btn-outline-primary mr-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteuser(user.id)}
                >
                  Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
