import date from "date-and-time";

export const convertMongoDate = (mongoDate) => {
  const cdate = new window.Date(mongoDate);
  const now = new window.Date();
  const nowDay = date.format(now, "DD");
  const nowMonth = date.format(now, "MM");
  const nowYear = date.format(now, "YYYY");
  const cdateDay = date.format(cdate, "DD");
  const cdateMonth = date.format(cdate, "MM");
  const cdateYear = date.format(cdate, "YYYY");
  if (nowDay == cdateDay && nowMonth == cdateMonth && nowYear == cdateYear) {
    return "Today " + date.format(cdate, "hh:mm A");
  }
  if (
    Number(nowDay) - Number(cdateDay) == 1 &&
    nowMonth == cdateMonth &&
    nowYear == cdateYear
  ) {
    return "Yesterday " + date.format(cdate, "hh:mm A");
  }
  return date.format(cdate, "DD MMM hh:mm A");
};
