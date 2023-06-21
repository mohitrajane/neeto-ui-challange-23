import dayjs from "dayjs";

export const calculateTimePassed = date => dayjs(date).fromNow();

export const formatDateAndTime = date => dayjs(date).format("dddd, hh:mm  A");
