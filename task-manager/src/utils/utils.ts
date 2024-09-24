import { v4 as uuidv4 } from "uuid";

import { TaskModel } from "../models/TaskModel";

export enum OPERATIONS {
  VIEW = "View",
  ADD = "Add",
  EDIT = "Edit",
}

export enum TASK_STATUS {
  COMPLETED = "Completed",
  INCOMPLETE = "Incomplete",
}

export const getUUIDv4 = () => {
  return uuidv4();
};

export const getMockTaskData = (): TaskModel[] => {
  return [
    {
      id: getUUIDv4(),
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dui at quam venenatis fermentum. Duis consectetur viverra orci vitae facilisis. Vestibulum fermentum quis nisl in laoreet. Maecenas condimentum mi in leo varius varius. Vestibulum ultricies mi vel mauris tempus maximus. Donec consectetur pretium augue, nec vulputate justo imperdiet hendrerit. Sed nec gravida diam. Quisque volutpat augue vel bibendum elementum. Donec eget ante aliquam, feugiat justo ut, euismod libero.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dui at quam venenatis fermentum. Duis consectetur viverra orci vitae facilisis. Vestibulum fermentum quis nisl in laoreet. Maecenas condimentum mi in leo varius varius. Vestibulum ultricies mi vel mauris tempus maximus. Donec consectetur pretium augue, nec vulputate justo imperdiet hendrerit. Sed nec gravida diam. Quisque volutpat augue vel bibendum elementum. Donec eget ante aliquam, feugiat justo ut, euismod libero.",
      completed: false,
    },
  ];
};
