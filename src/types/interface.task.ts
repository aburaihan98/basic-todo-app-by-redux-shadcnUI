export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  address: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}
