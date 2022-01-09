import { boot } from 'quasar/wrappers'
import VueApexCharts from 'vue3-apexcharts'
// import Vue from 'vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot( ({ app } ) => {
  // app.component('apexchart', VueApexCharts)
  app.use(VueApexCharts);

})
