<template>
  <q-page>
    <Header>GRAPHS</Header>
    <apex-line-chart />
    <apex-bar-chart />
    <apex-semi-circle />
  </q-page>
</template>

<script>
import ApexBarChart from "../components/ApexBarChart.vue";
import ApexLineChart from "../components/ApexLineChart.vue";
import ApexSemiCircle from "../components/ApexSemiCircle.vue";
import Header from "../components/Header.vue";

export default {
  name: "Main",
  components: {
    ApexLineChart,
    ApexBarChart,
    ApexSemiCircle,
    Header,
  },
};
</script>
