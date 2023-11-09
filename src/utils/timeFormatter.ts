import moment from "moment";
// import { CHART_INTERVALS, HISTORY_INTERVALS } from "../constans/values";

export const getDateDayAgo = (): number => {
  const currentDate = new Date().getTime();
  const dayToMilliseconds = 24 * 60 * 60 * 1000;

  return new Date(currentDate - dayToMilliseconds).getTime();
};

export const calculateDate = (period: string): number => {
  let now = new Date();

  if (period === '1D') { // 1 день
    return new Date(now.getTime() - (24 * 60 * 60 * 1000)).getTime();
  }
  if (period === '1W') { // 1 неделя
    return new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000)).getTime()
  }
  if (period === '1M') { // 1 месяц
    now.setMonth(now.getMonth() - 1);
    return now.getTime();
  }
  if (period === '3M') { // 3 месяца
    now.setMonth(now.getMonth() - 3);
    return now.getTime();
  }
  if (period === '6M') { // 6 месяцев
    now.setMonth(now.getMonth() - 6);
    return now.getTime();
  }
  if (period === 'Y') { // 1 год
    now.setFullYear(now.getFullYear() - 1);
    return now.getTime();
  }
  return 0;
}

export const getFormatedCurrentDate = (): string =>
  moment().format("D MMMM YYYY");


// export const getPeriodRequestData = (from: HISTORY_INTERVALS) => {
//   return {
//     start: CHART_INTERVALS[from],
//     end: ,
//   }
// }