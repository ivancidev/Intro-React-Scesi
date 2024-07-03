import React from "react";

export default function InputText({ inputValue, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="New Tarea"
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
}
