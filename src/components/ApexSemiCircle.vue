<template>
  <q-card class="q-ma-sm q-pb-sm">
    <apexchart
      width="100%"
      type="radialBar"
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
          type: "radialBar",
          id: "daily bar chart",
          offsetY: 0,
          parentHeightOffset: 20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: ["Progress"],
        title: {
          text: "Percentage of target",
        },
      },
      series: [],
    };
  },
  created() {
    const totalCount = this.$store.getters.totalCount;
    const target = this.$store.getters.settings.targetValue;
    this.series[0] = ((totalCount / target) * 100).toFixed(0);
    // console.log(this.series);
  },
};
</script>
