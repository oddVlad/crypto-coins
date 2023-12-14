import moment from "moment";
import {
  HISTORY_INTERVALS,
  WEEK_DAYS,
  DAY_MILLISECONDS
} from "../constans/values";

export const getDateDayAgo = (): number => {
  const currentDate = new Date().getTime();

  return new Date(currentDate - DAY_MILLISECONDS).getTime();
};

export const calculateDate = (period: string): number => {
  let now = new Date();
  const { DAY, MONTH, THREE_MONTH, SIX_MONTH, WEEK, YEAR } = HISTORY_INTERVALS;

  switch (period) {
    case DAY: return getTimeDayAgo(now);
    case WEEK: return getTimeWeekAgo(now);
    case MONTH: return getTimeMonthAgo(now);
    case THREE_MONTH: return getTimeThreeMonthAgo(now);
    case SIX_MONTH: return getTimeSixMonthAgo(now);
    case YEAR: return getTimeYearAgo(now);
    default: return 0;
  };
};

const getTimeDayAgo = (nowTime: Date): number => new Date(nowTime.getTime() - (DAY_MILLISECONDS)).getTime();

const getTimeWeekAgo = (nowTime: Date): number => new Date(nowTime.getTime() - (WEEK_DAYS * DAY_MILLISECONDS)).getTime();

const getTimeMonthAgo = (nowTime: Date): number => {
  nowTime.setMonth(nowTime.getMonth() - 1);
  return nowTime.getTime();
};

const getTimeThreeMonthAgo = (nowTime: Date): number => {
  nowTime.setMonth(nowTime.getMonth() - 3);
  return nowTime.getTime();
};

const getTimeSixMonthAgo = (nowTime: Date): number => {
  nowTime.setMonth(nowTime.getMonth() - 6);
  return nowTime.getTime();
};

const getTimeYearAgo = (nowTime: Date): number => {
  nowTime.setFullYear(nowTime.getFullYear() - 1);
  return nowTime.getTime();
};

export const getFormatedCurrentDate = (): string =>
  moment().format("D MMMM YYYY");
