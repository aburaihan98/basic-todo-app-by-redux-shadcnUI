export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  address: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}
