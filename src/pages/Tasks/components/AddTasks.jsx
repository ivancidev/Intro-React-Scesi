import React from "react";
import Button from "../../../components/Buttons/Button";
import InputText from "../../../components/Inputs/InputText";

export default function AddTasks({setTasks, tasks}) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <InputText inputValue={inputValue} onChange={onChange} />
      <Button onSubmit={handleSubmit} />
    </form>
  );
}
