import { DateTime } from "luxon";

export const calculateDaysAgo = (date) => {
  const postDate = DateTime.fromISO(date);
  const currentDate = DateTime.local();
  const diff = currentDate.diff(postDate);
  const diffInDays = diff.toFormat("d");
  const diffInHours = diff.toFormat("h");

  if (diffInDays === "0") {
    return `${diffInHours} hours ago`;
  } else if (diffInDays === "1") {
    return "Yesterday";
  } else {
    return `${diffInDays} days ago`;
  }
};

export const formatCleanDate = (date) => {
  return DateTime.fromISO(date).toLocaleString({
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
