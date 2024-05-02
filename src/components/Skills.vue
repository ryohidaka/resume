<template>
  <table>
    <thead>
      <tr>
        <th>言語・フレームワーク</th>
        <th>経験年数</th>
        <th>自己評価</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="skill in skills" :key="skill.name">
        <td>{{ skill.name }}</td>
        <td>{{ skill.experience }}</td>
        <td>{{ skill.evaluation }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, toRefs } from "vue";
import { getExperienceYearsAndMonths } from "../utils";

export default {
  name: "Skills",
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { skills } = toRefs(props);
    const computedSkills = computed(() =>
      skills.value.map((skill) => ({
        ...skill,
        experience: getExperienceYearsAndMonths(skill.year, skill.month),
      })),
    );

    return {
      skills: computedSkills,
    };
  },
};
</script>
