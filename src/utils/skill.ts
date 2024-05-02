import { CURRENT_DATE, CURRENT_YEAR } from "./date";

/**
 * 経験年数と月数を取得する。
 * @param {number} year - 開始年
 * @param {number} month - 開始月
 * @return {string} 経験年数と月数
 */
export const getExperienceYearsAndMonths = (
  year: number,
  month: number,
): string => {
  // 現在の月を取得する。JavaScriptの月は0から始まるため、1を加える。
  const currentMonth = CURRENT_DATE.getMonth() + 1;

  // 経験年数と月数を計算する。
  let experienceYears = CURRENT_YEAR - year;
  let experienceMonths = currentMonth - month;

  // 経験月数が負の場合、経験年数を1減らし、経験月数に12を加える。
  if (experienceMonths < 0) {
    experienceYears--;
    experienceMonths += 12;
  }

  return `${experienceYears}年${experienceMonths}ヶ月`;
};
