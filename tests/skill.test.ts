import { describe, expect, test } from "vitest";
import { getExperienceYearsAndMonths } from "../src/utils";

describe("getExperienceYearsAndMonths function", () => {
  test("should return correct years and months for a given start year and month", () => {
    const startYear = 2020;
    const startMonth = 1;
    const result = getExperienceYearsAndMonths(startYear, startMonth);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    let expectedYears = currentYear - startYear;
    let expectedMonths = currentMonth - startMonth;
    if (expectedMonths < 0) {
      expectedYears--;
      expectedMonths += 12;
    }
    expect(result).toBe(`${expectedYears}年${expectedMonths}ヶ月`);
  });

  test("should correctly calculate years and months when start month is after current month", () => {
    const currentDate = new Date();
    const startYear = currentDate.getFullYear() - 1; // 1年前
    const startMonth = currentDate.getMonth() + 2; // 現在の月より1つ後の月
    const result = getExperienceYearsAndMonths(startYear, startMonth);
    expect(result).toBe("0年11ヶ月");
  });
});
