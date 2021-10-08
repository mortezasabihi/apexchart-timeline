import ApexCharts, { ApexOptions } from "apexcharts";

const chartElement: HTMLDivElement | null = document.querySelector("#chart");
const options: ApexOptions = {
  chart: {
    type: "rangeBar",
    height: 100,
    width: window.innerWidth,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  series: [
    {
      data: [
        {
          x: "Code",
          y: [
            new Date(2019, 3, 2, 10, 0).getTime(),
            new Date(2019, 3, 2, 11, 0).getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date(2019, 3, 2, 12, 30).getTime(),
            new Date(2019, 3, 2, 13, 0).getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date(2019, 3, 2, 11, 30).getTime(),
            new Date(2019, 3, 2, 12, 0).getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date(2019, 3, 2, 20, 0).getTime(),
            new Date(2019, 3, 2, 21, 0).getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date(2019, 3, 2, 22, 0).getTime(),
            new Date(2019, 3, 2, 24, 0).getTime(),
          ],
        },
      ],
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    min: new Date(new Date(2019, 3, 2).setHours(0, 0, 0, 0)).getTime(),
    max: new Date(new Date(2019, 3, 2).setHours(24, 0, 0, 0)).getTime(),
    range: undefined,
    labels: {
      datetimeUTC: false,
      show: true,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: () => "",
    },
    x: {
      formatter: function (value) {
        return new Date(value)
          .toLocaleTimeString("en", {
            hour12: false,
          })
          .substring(5, -1);
      },
    },
  },
  annotations: {
    xaxis: [
      {
        x: new Date(2019, 3, 2, 0, 0).getTime(),
        x2: new Date(2019, 3, 2, 9, 0).getTime(),
        fillColor: "#ccc",
      },
      {
        x: new Date(2019, 3, 2, 13, 0).getTime(),
        x2: new Date(2019, 3, 2, 20, 0).getTime(),
        fillColor: "#ccc",
      },
    ],
  },
};

const chart = new ApexCharts(chartElement, options);

chart.render();
