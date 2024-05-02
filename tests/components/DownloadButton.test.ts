import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import DownloadButton from "../../src/components/DownloadButton.vue";

test("renders download button correctly", () => {
  const wrapper = mount(DownloadButton);

  const linkElement = wrapper.find("#download");
  expect(linkElement.exists()).toBe(true);
  expect(linkElement.attributes("href")).toBe("/resume.pdf");
  expect(linkElement.attributes("download")).toBe("職務経歴書_日高凌.pdf");
  expect(linkElement.text()).toBe("PDF でダウンロードする");
});
