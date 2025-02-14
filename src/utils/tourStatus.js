import moment from "jalali-moment";

export const getTourStatus = (startDate, endDate) => {
  const currentDate = moment();

  if (moment(endDate).isBefore(currentDate)) {
    return { status: "finished", label: "به اتمام رسیده", color: "green" };
  }

  if (moment(startDate).isSameOrBefore(currentDate) && moment(endDate).isAfter(currentDate)) {
    return { status: "ongoing", label: "در حال برگزاری", color: "yellow" };
  }

  return { status: "upcoming", label: "شروع نشده", color: "blue" };
};
