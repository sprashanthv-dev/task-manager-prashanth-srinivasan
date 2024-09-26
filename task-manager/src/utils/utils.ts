import { v4 as uuidv4 } from "uuid";

export const getUUIDv4 = () => {
  return uuidv4();
};

export const isTaskFormValid = (title: string, description: string) => {
  const formattedTitle = title.trim();
  const formattedDescription = description.trim();

  const isDescriptionPresent = formattedDescription.length > 0;

  if (formattedTitle.length === 0 || formattedTitle.length > 30) return false;

  return isDescriptionPresent
    ? formattedDescription.length < 500
      ? true
      : false
    : true;
};
