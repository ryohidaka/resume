import { SkillStackType } from "../../../src/types";

export default {
  load() {
    return {
      web: {
        frontend: [],
        backend: [],
      },
      iOS: [],
    } as SkillStackType;
  },
};
