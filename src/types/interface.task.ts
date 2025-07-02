export interface ITask {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  address: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}
