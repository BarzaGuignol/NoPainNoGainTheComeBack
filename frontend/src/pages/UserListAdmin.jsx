import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "@components/Nav";
import apiConnexion from "../services/apiConnexion";

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
        <link rel="icon" type="image/png" href="../src/assets/iconeMario.png" />
      </Helmet>
      <Nav />
      <div className="h-[100vh]">
        <div className="flex justify-center mt-6 mb-6">
          <Link
            to="/users/creation"
            className="flex justify-center items-center bg-indigo-900 hover:bg-indigo-700 w-48 h-10 rounded-lg text-white"
          >
            Add User
          </Link>
        </div>
        <div className="flex justify-center">
          <table className="userslist mb-12">
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
                        <option value="admin">Administrator</option>
                        <option value="user">User</option>
                        <option value="company">Company</option>
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
