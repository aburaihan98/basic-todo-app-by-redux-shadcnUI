import "./App.css";

import { ModeToggle } from "./components/mode-toggle";
import { selectTask } from "./redux/features/task/taskSlice";
import { useAppSelector } from "./redux/hook";
import TaskCard from "./components/modules/task/TaskCard";
import { AddToTask } from "./components/modules/task/AddToTask";

function App() {
  const tasks = useAppSelector(selectTask);

  return (
    <div className=" p-10">
      <div className="flex justify-between mb-8">
        <h1>Basic todo app</h1>
        <ModeToggle />
      </div>

      <div className="mb-4">
        <AddToTask />
      </div>

      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}

export default App;
