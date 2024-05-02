/**
 * 開始年月と終了年月から期間の文字列を返却する
 * @param startAt
 * @param endAt
 * @returns
 */
export const getPeriodString = (startAt: string, endAt?: string): string => {
  const formatDate = (date?: string): string => {
    if (date) {
      const [year, month] = date.split("-");
      return `${year}年${month.replace("0", "")}月`;
    } else {
      return "現在";
    }
  };

  const formattedStartAt = formatDate(startAt);
  const formattedEndAt = formatDate(endAt);

  return `${formattedStartAt}〜${formattedEndAt}`;
};
