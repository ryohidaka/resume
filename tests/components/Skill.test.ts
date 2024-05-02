import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Skills from "../../src/components/Skills.vue";
import { getExperienceYearsAndMonths } from "../../src/utils";

test("renders skills correctly", () => {
  const skills = [
    { name: "Vue.js", year: 2, month: 6, evaluation: "上級" },
    { name: "JavaScript", year: 3, month: 0, evaluation: "上級" },
  ];
  const wrapper = mount(Skills, {
    props: {
      skills,
    },
  });

  const rows = wrapper.findAll("tbody > tr");
  expect(rows.length).toBe(skills.length);

  for (let i = 0; i < rows.length; i++) {
    const skill = skills[i];
    const row = rows.at(i);
    if (row) {
      const cells = row.findAll("td");
      const nameCell = cells.at(0);
      const experienceCell = cells.at(1);
      const evaluationCell = cells.at(2);
      if (nameCell && experienceCell && evaluationCell) {
        expect(nameCell.text()).toBe(skill.name);
        expect(experienceCell.text()).toBe(
          getExperienceYearsAndMonths(skill.year, skill.month),
        );
        expect(evaluationCell.text()).toBe(skill.evaluation);
      }
    }
  }
});
