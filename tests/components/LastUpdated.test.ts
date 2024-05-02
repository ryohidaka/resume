import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import LastUpdated from "../../src/components/LastUpdated.vue";

test("renders current date correctly", () => {
  const wrapper = mount(LastUpdated);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // JavaScriptの月は0から始まるため、1を加える
  const day = currentDate.getDate();
  const expectedDate = `${year}年${month}月${day}日`;

  const timeElement = wrapper.find("time");
  expect(timeElement.text()).toBe(expectedDate);
});
