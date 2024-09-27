import { StorageModel } from "../models/StorageModel";

export const save = (key: string, item: StorageModel) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const get = (key: string): StorageModel | null => {
  const item = localStorage.getItem(key);

  if (item !== null) {
    return JSON.parse(item);
  }

  return null;
};

export const remove = (key: string) => {
  localStorage.removeItem(key);
};

export const removeAll = () => {
  localStorage.clear();
};
