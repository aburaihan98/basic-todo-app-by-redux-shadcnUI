import "./App.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <h1>Basic todo app</h1>
      <ModeToggle />
      <Button>Click me</Button>
    </>
  );
}

export default App;
