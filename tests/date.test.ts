import { describe, expect, test } from "vitest";
import {
  CURRENT_DATE,
  CURRENT_YEAR,
  AGE,
  EXPERIENCE_YEARS,
} from "../src/utils";

describe("Date and Age calculations", () => {
  test("CURRENT_DATE should be a Date object", () => {
    expect(CURRENT_DATE instanceof Date).toBe(true);
  });

  test("CURRENT_YEAR should be a number", () => {
    expect(typeof CURRENT_YEAR).toBe("number");
  });

  test("AGE should be a number", () => {
    expect(typeof AGE).toBe("number");
  });

  test("EXPERIENCE_YEARS should be a number", () => {
    expect(typeof EXPERIENCE_YEARS).toBe("number");
  });
});
