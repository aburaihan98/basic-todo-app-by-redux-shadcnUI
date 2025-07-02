import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/interface.task";
import { createSlice } from "@reduxjs/toolkit";
import { Droplet } from "lucide-react";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: 1,
      title: "Implement user authentication",
      isCompleted: false,
      dueDate: "12-10-10",
      address: "Dhaka Office",
      priority: "High",
      description: "Implement login, registration and session management.",
    },
    {
      id: 2,
      title: "Design homepage layout",
      isCompleted: false,
      dueDate: "12-10-10",
      address: "Remote",
      priority: "Medium",
      description: "Create responsive homepage layout using Tailwind CSS.",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
