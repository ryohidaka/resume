<template>
  <p>
    <time>{{ currentDate }}</time>
    <span>現在</span>
  </p>
</template>

<script>
import { computed } from "vue";

export default {
  name: "LastUpdated",
  setup() {
    // 現在の日付を計算する
    const currentDate = computed(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // JavaScriptの月は0から始まるため、1を加える
      const day = date.getDate();

      // 年月日を文字列として結合して返す
      return `${year}年${month}月${day}日`;
    });

    return { currentDate };
  },
};
</script>

<style scoped>
p {
  text-align: right;
}
</style>
