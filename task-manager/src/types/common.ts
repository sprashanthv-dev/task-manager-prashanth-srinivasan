import { TaskModel } from "../models/TaskModel";

type toggleTaskHandler = {
  completionHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

export type Tasks = {
  tasks: TaskModel[];
} & toggleTaskHandler;

export type EachTask = {
  task: TaskModel;
} & toggleTaskHandler;
