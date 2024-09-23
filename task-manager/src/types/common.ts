import { TaskModel } from "../models/TaskModel";

type toggleTaskHandler = {
  completionHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

type deleteTaskHandler = {
  deleteHandler: (id: string) => void;
};

export type Tasks = {
  tasks: TaskModel[];
} & toggleTaskHandler &
  deleteTaskHandler;

export type EachTask = {
  task: TaskModel;
} & toggleTaskHandler &
  deleteTaskHandler;
