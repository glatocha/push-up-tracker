<template>
  <q-card class="q-ma-sm">
    <apexchart
      width="100%"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </q-card>
</template>

<script>
export default {
  name: "ApexChart",
  data() {
    return {
      options: {
        chart: {
          id: "daily bar chart",
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "Daily values",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: "numeric",
          decimalsInFloat: 0,
        },
        yaxis: {
          show: true,
        },
      },
      series: [
        {
          data: [],
        },
      ],
    };
  },
  created() {
    const data = this.$store.getters.progressData;
    data.forEach((day, index) => {
      if (day !== null && day !== undefined) {
        this.series[0].data.push([index + 1, day.total]);
      } else {
        this.series[0].data.push([index + 1, 0]);
      }
    });
    // console.log(this.series);
  },
};
</script>
