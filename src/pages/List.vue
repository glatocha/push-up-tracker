<template>
  <q-page>
    <Header text="DAILY LIST" />
    <days-list :progressData="progressData"> </days-list>
  </q-page>
  <div id="endOfPage"></div>
</template>

<script>
import { defineComponent } from "vue";
import DaysList from "../components/DaysList.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "List",
  components: {
    DaysList,
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
