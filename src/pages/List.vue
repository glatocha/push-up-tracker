<template>
  <q-page>
    <Header>
      LIST
      <template v-slot:right>
        <q-btn-toggle
          v-model="toggleSelection"
          flat
          toggle-color="info"
          :options="[
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
          ]"
        />
      </template>
    </Header>

    <days-list v-if="toggleSelection === 'day'" :progressData="progressData">
    </days-list>
    <weeks-list
      v-if="toggleSelection === 'week'"
      :progressData="progressData"
    ></weeks-list>
    <months-list
      v-if="toggleSelection === 'month'"
      :progressData="progressData"
    ></months-list>
  </q-page>
  <div id="endOfPage"></div>
</template>

<script>
import { defineComponent } from "vue";
import DaysList from "../components/lists/DaysList.vue";
import WeeksList from "../components/lists/WeeksList.vue";
import MonthsList from "../components/lists/MonthsList.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "List",
  data() {
    return {
      toggleSelection: "day",
    };
  },
  components: {
    DaysList,
    WeeksList,
    MonthsList,
    Header,
  },
  computed: {
    progressData() {
      // console.log("object :>> ", this.$store.getters.progressData);
      return this.$store.getters.progressData;
    },
  },
});
</script>
