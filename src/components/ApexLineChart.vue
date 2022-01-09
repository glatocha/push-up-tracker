<template>
  <q-card class="q-ma-sm">
    <apexchart
      width="100%"
      type="line"
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
          id: "progress line chart",
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "Progress",
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
        stroke: {
          width: 1,
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
    var total = 0;
    data.forEach((day, index) => {
      if (day !== null && day !== undefined) {
        total += day.total;
        this.series[0].data.push([index + 1, total]);
      } else {
        this.series[0].data.push([index + 1, total]);
      }
    });
    // console.log(this.series);
  },
};
</script>
