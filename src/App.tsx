import "./App.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import { useSelector } from "react-redux";
import { selectTask } from "./redux/features/task/taskSlice";

function App() {
  const task = useSelector(selectTask);
  console.log(task);

  return (
    <>
      <h1>Basic todo app</h1>
      <ModeToggle />
      <Button>Click me</Button>
    </>
  );
}

export default App;
