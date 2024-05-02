<script setup>
  import { AGE, EXPERIENCE_YEARS }from "../src/utils"
  
  import LastUpdated from "../src/components/LastUpdated.vue"
  import Project from "../src/components/Project.vue"

  // データ
  import { data as projects } from './.vitepress/data/project.data.ts'
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
