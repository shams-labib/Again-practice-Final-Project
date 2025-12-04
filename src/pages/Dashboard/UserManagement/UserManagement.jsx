import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { FaShield, FaUserShield } from "react-icons/fa6";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch: updateRefetch } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/user/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        updateRefetch();
        Swal.fire({
          position: "top-center",
          showConfirmButton: false,
          timer: 2000,
          text: `${user?.displayName} Marked As An  Admin`,
          icon: "success",
        });
      }
    });
  };

  const handleMakeUser = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/user/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        updateRefetch();
        Swal.fire({
          position: "top-center",
          showConfirmButton: false,
          timer: 2000,
          text: `${user?.displayName} removed As An  Admin`,
          icon: "success",
        });
      }
    });
  };

  console.log(searchText);

  return (
    <div>
      <h1 className="text-2xl">UserManagement : {users.length}</h1>

      <div className="text-center my-5">
        <label className="input outline-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="grow outline-none"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Users</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <th>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleMakeUser(user)}
                      className="btn bg-red-400 "
                    >
                      <FiShieldOff></FiShieldOff>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-300"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
