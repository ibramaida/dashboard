const brandColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--brand"
);

console.log(brandColor);

const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Summary",
      backgroundColor: brandColor,
      borderColor: brandColor,
      data: [10, 20, 15, 22, 25, 33, 30],
      tension: 0.3,
      fill: {
        target: "origin",
        above: "hsl(242 100% 68% / .07)", // Area will be red above the origin
        // And blue below the origin
      },
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
