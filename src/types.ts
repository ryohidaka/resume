/**
 * プロジェクト
 */
export type ProjectType = {
  title: string;
  startAt: string; // 開始年月
  endAt?: string; // 終了年月
  info: ProjectInfo;
  environment: Environment;
  scale: Scale;
};

/**
 * プロジェクト詳細
 */
type ProjectInfo = {
  summary: string; // プロジェクト概要
  phase: string[]; // 担当フェーズ
  jobDescription: string[]; // 業務内容
};

/**
 * 開発環境
 */
type Environment = {
  language: string[]; // 言語
  framework: string[]; // フレームワーク
};

/**
 * 規模
 */
type Scale = {
  count: number; // 人数
  role: "エンジニア";
};
