<script setup>
  import { AGE, EXPERIENCE_YEARS }from "../src/utils"

  import DownloadButton from "../src/components/DownloadButton.vue"
  import LastUpdated from "../src/components/LastUpdated.vue"
  import Project from "../src/components/Project.vue"
  import Skills from "../src/components/Skills.vue"
  
  // データ
  import { data as projects } from './.vitepress/data/project.data.ts'
  import { data as skillStacks } from './.vitepress/data/skill.data.ts'
</script>

# 職務経歴書

<!-- 最終更新日 -->
<LastUpdated />

## 基本情報

- 氏名: 日高 凌 (ヒダカ リョウ)
- 生年月日: 1997/12/19 ({{ AGE }}歳)
- 居住地: 兵庫県神戸市
- 最終学歴: 関西大学 総合情報学部 (情報学士)

## 職務要約

新卒入社以来、{{ EXPERIENCE_YEARS }}年間にわたり WEB アプリケーションエンジニアとして業務を行ってまいりました。その間、WEB のフロントエンドとバックエンドの両方を経験し、幅広い知識と技術を身につけることができました。 <br />
さらに、クラウドサービスを用いたインフラ設計も担当し、システム全体の設計と運用に関する深い理解を得ることができました。 <br />
昨年からは新たな挑戦として、iOS 向けのモバイルアプリの開発にも従事しており、多様なプラットフォームに対応する能力を磨いています。

## 職務経歴

[**フェンリル株式会社**](https://www.fenrir-inc.com/)

- 事業内容: アプリケーション・ソフトウェアシステム開発
- 従業員数: 712 名
- 資本金: 1 億円
- 上場: 未上場

<!-- プロジェクト経歴 -->
<Project v-for="(project, index) in projects" :key="index" :project="project" />

## 技術スタック

### WEB フロントエンド

<Skills :skills="skillStacks.web.frontend" />

### WEB バックエンド

<Skills :skills="skillStacks.web.backend" />

### iOS モバイルアプリケーション

<Skills :skills="skillStacks.iOS" />

## 資格

- 普通自動車第一種運転免許

## 業務外活動

### 個人開発活動

### OSS への貢献

| OSS 名                                 | 概要                                 | 貢献内容                                         |
| -------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| [Chakra UI](https://v2.chakra-ui.com/) | UI コンポーネントライブラリ          | ドキュメント改修                                 |
| [Misskey](https://misskey-hub.net/ja/) | 分散型 SNS プラットフォーム          | デザイン修正<br/>Issue 対応<br/>ドキュメント改修 |
| [WXT](https://wxt.dev/)                | ブラウザ拡張機能開発用フレームワーク | ドキュメント改修                                 |
| [Plasmo](https://www.plasmo.com/)      | ブラウザ拡張機能開発用フレームワーク | ドキュメント改修                                 |

<!-- PDFダウンロードボタン -->
<DownloadButton />
