import { ProjectType } from "../../../src/types";

export default {
  load() {
    return [
      {
        title: "映像配信サービス",
        startAt: "2023-03",
        info: {
          summary: "大手映像配信サービスのWEBサイトの開発",
          phase: ["設計", "開発", "テスト", "運用保守"],
          jobDescription: [
            "追加機能の設計・実装",
            "不具合修正",
            "最適化を含むリファクタリング対応",
          ],
        },
        environment: { language: ["TypeScript"], framework: ["Next.JS"] },
        scale: { count: 10, role: "エンジニア" },
      },
      {
        title: "映像配信サービス",
        startAt: "2023-06",
        endAt: "2024-03",
        info: {
          summary: "大手映像配信サービスのiOSアプリケーションの開発",
          phase: ["設計", "開発", "テスト", "運用保守"],
          jobDescription: [
            "追加機能の設計・実装",
            "不具合修正",
            "最適化を含むリファクタリング対応",
          ],
        },
        environment: { language: ["Swift"], framework: ["UIKit"] },
        scale: { count: 10, role: "エンジニア" },
      },
    ] as ProjectType[];
  },
};
