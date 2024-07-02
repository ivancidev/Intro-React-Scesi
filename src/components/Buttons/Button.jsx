import React from "react";

export default function Button({onSubmit}) {
  return (
    <>
      <button type="submit" onClick={onSubmit}>Add</button>
    </>
  );
}
