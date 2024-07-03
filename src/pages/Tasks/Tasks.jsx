import React from "react";
import { initialTasks } from "../../utils/tasks";
import { Item } from "../../components/Items/Item";
import AddTasks from "./components/AddTasks";

export default function Tasks() {
  const [tasks, setTasks] = React.useState([]);
  console.log(tasks);

  
  return (
    <>
      <h1>List Taks</h1>
      <AddTasks setTasks={setTasks} tasks={tasks} />
      <ol>
        {tasks.map((task) => (
          <Item key={task.id} title={task.title} completed={task.completed} />
        ))}
      </ol>
    </>
  );
}
