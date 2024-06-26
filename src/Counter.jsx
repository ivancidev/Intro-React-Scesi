import React, { useState } from "react";
// contador javascript
// let count = 0;

// function increment() {
//   count++;
//   console.log(count)
// }

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [name, setName] = useState("Taylor");

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        {/* Ejemplo de cambiar un estado */}
        <h2>Informacion del Estudiante</h2>
        <p>Edad: {age}</p> <p>Nombre: {name}</p>
        <button onClick={() => setAge(age + 1)}>Age</button>
        <button onClick={() => setName("John")}>Name</button>
      </div>
    </>
  );
};
