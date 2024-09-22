import { v4 as uuidv4 } from "uuid";

import { Task } from "../models/Task";

export const getUUIDv4 = () => {
  return uuidv4();
};

export const getMockTaskData = (): Task[] => {
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
