<template>
  <table>
    <thead>
      <tr>
        <th>{{ period }} / {{ title }}</th>
        <th>開発環境</th>
        <th>規模 / 担当</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <section>
            <h6>プロジェクト概要</h6>
            <p>{{ info.summary }}</p>
          </section>
          <section>
            <h6>担当フェーズ</h6>
            <ul>
              <li v-for="item in info.phase">
                {{ item }}
              </li>
            </ul>
          </section>
          <section>
            <h6>業務内容</h6>
            <ul>
              <li v-for="item in info.jobDescription">
                {{ item }}
              </li>
            </ul>
          </section>
        </td>
        <td>
          <section>
            <h6>言語</h6>
            <ul>
              <li v-for="item in environment.language">
                {{ item }}
              </li>
            </ul>
          </section>
          <section v-if="environment.framework">
            <h6>フレームワーク</h6>
            <ul>
              <li v-for="item in environment.framework">
                {{ item }}
              </li>
            </ul>
          </section>
        </td>
        <td>
          <ul>
            <li>約 {{ scale.count }} 名</li>
            <li>{{ scale.role }}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, toRefs } from "vue";
import { getPeriodString } from "../utils";

export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { endAt, environment, startAt, scale, info, title } = toRefs(
      props.project,
    );

    const period = computed(() =>
      getPeriodString(startAt.value, endAt ? endAt.value : undefined),
    );

    return {
      title,
      info,
      environment,
      scale,
      period,
    };
  },
};
</script>

<style scoped>
h6 {
  font-size: inherit;
}

h6::before {
  content: "【";
}

h6::after {
  content: "】";
}

p {
  margin-top: 0;
}

ul {
  margin-top: 0;
}

table {
  display: table;
  width: 100%;
}

td {
  vertical-align: baseline;
}
</style>
