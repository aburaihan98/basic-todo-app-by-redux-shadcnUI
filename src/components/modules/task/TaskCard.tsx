import { cn } from "@/lib/utils";
import type { ITask } from "@/types/interface.task";
import React from "react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div className="border px-5 py-3 rounded-md mb-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority.toLowerCase() === "low",
              "bg-yellow-500": task.priority.toLowerCase() === "medium",
              "bg-red-500": task.priority.toLowerCase() === "high",
            })}
          ></div>
          <h1
            className={cn("text-xl", {
              "line-through": task.completed,
            })}
          >
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center"></div>
      </div>
      <p className="mt-5">{task?.description}</p>
    </div>
  );
}
