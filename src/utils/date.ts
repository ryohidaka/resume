// 現在の日付を取得する。
export const CURRENT_DATE = new Date();

// 現在の年を取得する。
export const CURRENT_YEAR = CURRENT_DATE.getFullYear();

/**
 * 日付を日本時間の日付整数に変換する。
 * @param {Date} date - 変換する日付
 * @return {number} 日本時間の日付整数
 */
const toJapaneseDateInt = (date: Date): number => {
  const dateString = date
    .toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" })
    .replace(/[^0-9]/g, "");
  return parseInt(dateString, 10);
};

/**
 * 年齢を取得する。
 * @return {number} 年齢
 */
const getAge = (): number => {
  // 生年月日を設定する。
  const year = 1997;
  const month = 12;
  const day = 19;

  // 生年月日をDateオブジェクトに変換し、日本時間の日付整数に変換する。
  const birthday = toJapaneseDateInt(new Date(year, month - 1, day));

  // 現在の日付を日本時間の日付整数に変換する。
  const today = toJapaneseDateInt(CURRENT_DATE);

  // 年齢を計算する。
  const age = Math.floor((today - birthday) / 10000);

  return age;
};

export const AGE = getAge();

/**
 * 経験年数を取得する。
 * @return {number} 経験年数
 */
const getExperienceYears = (): number => {
  // 2020年からの経験年数を計算する。
  return CURRENT_YEAR - 2020;
};

export const EXPERIENCE_YEARS = getExperienceYears();
