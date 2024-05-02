import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Project from "../../src/components/Project.vue";

test("renders project correctly", () => {
  const project = {
    title: "プロジェクト名",
    info: {
      summary: "プロジェクトの概要",
      phase: ["フェーズ1", "フェーズ2"],
      jobDescription: ["業務内容1", "業務内容2"],
    },
    environment: {
      language: ["言語1", "言語2"],
      framework: ["フレームワーク1", "フレームワーク2"],
    },
    scale: {
      count: 10,
      role: "役割",
    },
    startAt: "2020-01",
    endAt: "2022-11",
  };
  const wrapper = mount(Project, {
    props: {
      project,
    },
  });

  const rows = wrapper.findAll("tbody > tr");
  expect(rows.length).toBe(1);

  const row = rows.at(0);
  if (row) {
    const cells = row.findAll("td");
    const infoCell = cells.at(0);
    const environmentCell = cells.at(1);
    const scaleCell = cells.at(2);
    if (infoCell && environmentCell && scaleCell) {
      expect(infoCell.text()).toContain(project.info.summary);
      expect(infoCell.text()).toContain(project.info.phase.join(""));
      expect(infoCell.text()).toContain(project.info.jobDescription.join(""));
      expect(environmentCell.text()).toContain(
        project.environment.language.join(""),
      );
      expect(environmentCell.text()).toContain(
        project.environment.framework.join(""),
      );
      expect(scaleCell.text()).toContain(`約 ${project.scale.count} 名`);
      expect(scaleCell.text()).toContain(project.scale.role);
    }
  }
});
