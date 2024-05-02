import { SkillStackType } from "../../../src/types";

export default {
  load() {
    return {
      web: {
        frontend: [
          {
            name: "JavaScript",
            year: 2020,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "TypeScript",
            year: 2020,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "Vue.js",
            year: 2020,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "React",
            year: 2020,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "Next.JS",
            year: 2023,
            month: 3,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
        ],
        backend: [
          {
            name: "Go",
            year: 2021,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "PHP",
            year: 2021,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
          {
            name: "Laravel",
            year: 2021,
            month: 4,
            evaluation: "最適なコード記述と、指示、改修が可能",
          },
        ],
      },
      iOS: [
        {
          name: "Swift",
          year: 2023,
          month: 3,
          evaluation: "基本的なプログラミングが可能",
        },
        {
          name: "UIKit",
          year: 2023,
          month: 3,
          evaluation: "基本的なプログラミングが可能",
        },
        {
          name: "Swift UI",
          year: 2023,
          month: 3,
          evaluation: "基本的なプログラミングが可能",
        },
      ],
    } as SkillStackType;
  },
};
