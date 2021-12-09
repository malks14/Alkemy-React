export const optionsCard = {
  xaxis: {
    categories: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ],
    labels: {
      show: true,
      style: {
        fontSize: "15px",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2.5,
  },
  plotOptions: {
    radar: {
      size: 90,
      offsetY: -15,
      offsetX: -27,
    },
  },
};

export const averageStats = (
  param1,
  param2,
  param3,
  param4,
  param5,
  param6
) => {
  let arrStats = [param1, param2, param3, param4, param5, param6].map(
    (x) => +x
  );

  return Math.floor(arrStats.reduce((a, b) => a + b) / arrStats.length);
};
