import { ProjectType } from "../../../src/types";

export default {
  load() {
    return [
      {
        title: "",
        startAt: "",
        info: {
          summary: "",
          phase: [],
          jobDescription: [],
        },
        environment: { language: [], framework: [] },
        scale: { count: 0, role: "エンジニア" },
      },
    ] as ProjectType[];
  },
};
