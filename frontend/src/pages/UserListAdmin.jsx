import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "../services/apiConnexion";
import Nav from "@components/Nav";



function UserListAdmin() {
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    apiConnexion
      .get(`/users`)
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteUser = (user) => {
    const newUserList = [...usersList];
    newUserList.splice(newUserList.indexOf(user), 1);
    setUsersList(newUserList);
  };

  const deleteUser = (user) => {
    apiConnexion.delete(`/users/${user.id}`).then(() => handleDeleteUser(user));
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin - User List </title>
        <meta
          name="description"
          content="View a list of all registered users on this page. Manage user information and access levels."
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
      </Helmet>
      <Nav />
      <div>
        <div className="flex justify-center mt-6 mb-6">
          <Link
            to="/users/creation"
            className="flex justify-center items-center bg-green-900 hover:bg-green-700 w-48 h-10 rounded-lg text-white"
          >
            Add User
          </Link>
        </div>
        <div className="flex justify-center">
          <table className="userslist">
            <tr className="border bg-slate-200">
              <th className="w-48">User</th>
              <th className="w-48">E-mail</th>
              <th className="w-48">Role</th>
              <th className="w-32">Delete</th>
            </tr>
            {usersList &&
              usersList.map((users) => (
                <tr className="border">
                  <td className="p-1.5">
                    {users.firstname} {users.lastname}
                  </td>
                  <td>{users.email}</td>
                  <td>
                    <div className="flex justify-center w-52">
                      <select
                        className="w-40 text-gray-500 border rounded-md shadow-sm outline-none"
                        name="user_role"
                        value={users.user_type}
                      >
                        <option value="admin">Administrateur</option>
                        <option value="user">Utilisateur</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <button type="button" onClick={() => deleteUser(users)}>
                        ❌
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default UserListAdmin;
