<template>
  <div>
    <GChart
      type="Timeline"
      :data="chartData"
      :settings="{ packages: ['timeline'] }"
      :events="chartEvents"      
      :options="chartOptions"
      ref="gChart"
    />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
// import { ref } from "vue";
const columns = [
  { type: "string", label: "Room" },
  { type: "string", label: "Name" },
  { type: "string", id: "style", role: "style" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
];
const rows = [
  ["1", "test1", "#181818",  new Date("7 26,2019 6:00:11"), new Date("7 26,2019 6:30:56")],
  ["2", "test2", "#e3d3b2", new Date("7 26,2019 7:00:11"), new Date("7 26,2019 7:30:56")],
  ["3", 'test3', "#d3e932", new Date("7 26,2019 8:00:11"), new Date("7 26,2019 8:30:56")],
];
export default {
  name: "timeline",
  components: {
    GChart,
  },

  
  setup() {
    const chartData = [columns, ...rows];
    const chartOptions ={
        timeline: { showRowLabels: false },
        rowLabelStyle: { fontName: 'Arial Black'} ,
        tooltip: {
        isHtml: true
        },
        legend: 'none',
        forceIFrame: true,
        width: 1000,
        height: 180
      };
    return {
      chartData,
      chartOptions
      // chartEvents: {
      //   select: () => {
      //     const gChart = ref();
      //     const chart = gChart.chartObject;
      //     const selection = chart.getSelection();
      //     // console.log(selection[0]);
      //   },
      // },
    };
  },
};
//
</script>