import { TaskModel } from "../models/TaskModel";

type toggleTaskHandler = {
  completionHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

type operationsHandler = {
  viewHandler: (id: string) => void;
  editHandler: (id: string) => void;
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
  titleText: string;
  buttonText: string;
  showSave: boolean;
  onComplete?: () => void;
  onClose: () => void;
};

export type AddTaskProps = {
  close: () => void;
  onSubmit: (task: TaskModel) => void;
};

export type TaskFormProps = {
  onSubmit: (task: TaskModel) => void;
};
