import { v4 as uuidv4 } from "uuid";

import { TaskModel } from "../models/TaskModel";

export enum OPERATIONS {
  VIEW = "View",
  ADD = "Add",
  EDIT = "Edit",
}

export const getUUIDv4 = () => {
  return uuidv4();
};

export const getMockTaskData = (): TaskModel[] => {
  return [
    {
      id: getUUIDv4(),
      title: "Title 1",
      completed: false,
    },
    {
      id: getUUIDv4(),
      title: "Title 2",
      completed: false,
    },
    {
      id: getUUIDv4(),
      title: "Title 3",
      completed: false,
    },
  ];
};
