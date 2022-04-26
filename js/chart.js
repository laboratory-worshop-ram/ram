const labels = [
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Command',
      data: [0, 0, 1, 1, 0, 0, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
      pointRadius: 0,
    },
    {
      label: 'Clock',
      data: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgb(255, 159, 64)',
      //stepped: true,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command2',
      data: [0, 0, 0, 0, 1, 1, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
      pointRadius: 0,
      yAxisID: 'y3',
    },
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        min: 0,
        max: 200,
        ticks: {
          stepSize: 50
        },
        type: 'linear',
        position: 'left',
        stack: 'demo',
        stackWeight: 3,
        grid: {
          borderColor: 'rgb(255, 99, 132)'
        }
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: 'rgb(255, 159, 64)'
        }
      },

      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: 'rgb(255, 159, 64)'
        }
      },
    }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);