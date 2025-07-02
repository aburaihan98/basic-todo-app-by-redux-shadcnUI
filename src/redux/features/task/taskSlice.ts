import type { ITask } from "@/types/interface.task";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: 1,
      title: "Implement user authentication",
      completed: false,
      address: "Dhaka Office",
      priority: "High",
      dueDate: "2025-07-05",
    },
    {
      id: 2,
      title: "Design homepage layout",
      completed: false,
      address: "Remote",
      priority: "Medium",
      dueDate: "2025-07-03",
    },
    {
      id: 3,
      title: "Set up database schema",
      completed: false,
      address: "Chittagong Office",
      priority: "High",
      dueDate: "2025-07-06",
    },
    {
      id: 4,
      title: "Create API endpoints",
      completed: false,
      address: "Remote",
      priority: "Medium",
      dueDate: "2025-07-08",
    },
    {
      id: 5,
      title: "Write unit tests for services",
      completed: false,
      address: "Sylhet Branch",
      priority: "Low",
      dueDate: "2025-07-10",
    },
    {
      id: 6,
      title: "Deploy project to Vercel",
      completed: false,
      address: "Remote",
      priority: "High",
      dueDate: "2025-07-07",
    },
    {
      id: 7,
      title: "Prepare project documentation",
      completed: false,
      address: "Dhaka Office",
      priority: "Medium",
      dueDate: "2025-07-09",
    },
    {
      id: 8,
      title: "Client feedback review meeting",
      completed: false,
      address: "Google Meet",
      priority: "High",
      dueDate: "2025-07-04",
    },
    {
      id: 9,
      title: "Optimize performance issues",
      completed: false,
      address: "Chittagong Office",
      priority: "High",
      dueDate: "2025-07-11",
    },
    {
      id: 10,
      title: "Fix cross-browser UI bugs",
      completed: false,
      address: "Remote",
      priority: "Low",
      dueDate: "2025-07-12",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
