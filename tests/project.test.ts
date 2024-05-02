import { describe, expect, test } from "vitest";
import { getPeriodString } from "../src/utils";

describe("getPeriodString function", () => {
  test("should return formatted period string with start and end dates", () => {
    const startAt = "2020-01";
    const endAt = "2024-05";
    const result = getPeriodString(startAt, endAt);
    expect(result).toBe("2020年1月〜2024年5月");
  });

  test('should return formatted period string with start date and "現在" when end date is not provided', () => {
    const startAt = "2020-01";
    const result = getPeriodString(startAt);
    expect(result).toBe("2020年1月〜現在");
  });
});
