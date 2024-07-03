import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/json-placer/useFetch";


export default function Users() {
  // "", null, undefined, false, 0, NaN
  const { data, isLoading } = useFetch();

  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
    </>
  );
}
