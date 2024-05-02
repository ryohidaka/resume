export type SkillStackType = {
  web: {
    frontend: SkillType[];
    backend: SkillType[];
  };
  iOS: SkillType[];
};

/**
 * 技術別情報
 */
type SkillType = {
  name: string; // 言語名 or フレームワーク名
  year: number; // 開始年
  month: number; // 開始月
  evaluation: string; // 自己評価
};
