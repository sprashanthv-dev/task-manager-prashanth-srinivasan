import { TaskModel } from "../models/TaskModel";

type toggleTaskHandler = {
  completionHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

type operationsHandler = {
  viewHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
};

export type Tasks = {
  tasks: TaskModel[];
} & toggleTaskHandler &
  operationsHandler;

export type EachTask = {
  task: TaskModel;
} & toggleTaskHandler &
  operationsHandler;

export type ModalProps = {
  children: React.ReactNode;
  buttonText: string;
  onComplete: () => void;
  onCancel: () => void;
  onClose: () => void;
};
