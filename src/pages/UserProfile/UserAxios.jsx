import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_URL_USERS;
export default function UserAxios() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
    </>
  );
}
