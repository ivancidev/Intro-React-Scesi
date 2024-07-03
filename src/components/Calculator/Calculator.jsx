import React, { useMemo, useState } from "react";

export default function Calculator() {
  const [listnumbers, setListNumbers] = useState([1, 2, 3, 4, 5]);
  const [show, setShow] = useState(false);

  const calculator = (numbers) =>
    useMemo(() => {
      console.log("Calculating...");
      return numbers.reduce((a, b) => a * b);
    }, [numbers]);

  const addNumber = () => {
    setListNumbers([...listnumbers, listnumbers.length + 1]);
  };

  return (
    <>
      <p>Total: {calculator(listnumbers)}</p>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="btn btn-outline-success"
      >
        {show ? "Hide" : "Show"}
      </button>
      <button
        type="button"
        onClick={addNumber}
        className="btn btn-outline-success"
      >
        Add numbers
      </button>
    </>
  );
}
