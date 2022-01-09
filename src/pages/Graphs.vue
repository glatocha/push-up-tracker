<template>
  <q-page>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> GRAPHS </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <apex-line-chart />
    <apex-bar-chart />
    <apex-semi-circle />
  </q-page>
</template>

<script>
import ApexBarChart from "../components/ApexBarChart.vue";
import ApexLineChart from "../components/ApexLineChart.vue";
import ApexSemiCircle from "../components/ApexSemiCircle.vue";

export default {
  name: "Main",
  components: {
    ApexLineChart,
    ApexBarChart,
    ApexSemiCircle,
  },
};
</script>
