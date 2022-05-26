const red = 'rgb(255, 99, 132)';
const orange = 'rgb(255, 159, 64)';
const yellow = 'rgb(255, 205, 86)';
const green = 'rgb(75, 192, 192)';
const blue = 'rgb(54, 162, 235)';
const purpul = 'rgb(153, 102, 255)';
const transparent = 'rgba(255, 255, 255, 0)';


const labels = [
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
];

const labels1 = [
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

//animation
const totalDuration = 5000;
const delayBetweenPoints = totalDuration / labels1.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Clock',
      data: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      borderColor: red,
      backgroundColor: red,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: green,
      backgroundColor: green,
      pointRadius: 0,
      yAxisID: 'y3',
    },
    {
      label: 'Address',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: blue,
      backgroundColor: blue,
      pointRadius: 0,
      yAxisID: 'y4',
    },
    {
      label: 'Data',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: purpul,
      pointRadius: 0,
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1,
        0, 0, -1, -1, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: transparent,
      pointRadius: 0,
    },

  ]
};

const data1 = {
  labels: labels,
  datasets: [
    {
      label: 'Clock',
      data: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      borderColor: red,
      backgroundColor: red,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: green,
      backgroundColor: green,
      pointRadius: 0,
      yAxisID: 'y3',
    },
    {
      label: 'Address',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: blue,
      backgroundColor: blue,
      pointRadius: 0,
      yAxisID: 'y4',
    },
    {
      label: 'Line 1 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: 'Line 2 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: 'Data (2n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: purpul,
      pointRadius: 0,
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: transparent,
      pointRadius: 0,
    },
  ]
};

const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'Clock',
      data: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      borderColor: red,
      backgroundColor: red,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: green,
      backgroundColor: green,
      pointRadius: 0,
      yAxisID: 'y3',
    },
    {
      label: 'Address',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: blue,
      backgroundColor: blue,
      pointRadius: 0,
      yAxisID: 'y4',
    },
    {
      label: 'Line 1 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: 'Line 2 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: 'Line 3 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y7',
    },
    {
      label: 'Line 4 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y8',
    },
    {
      label: 'Data (4n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: purpul,
      pointRadius: 0,
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y7',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y8',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: transparent,
      pointRadius: 0,
    },
  ]
};

const data4 = {
  labels: labels,
  datasets: [
    {
      label: 'Clock',
      data: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      borderColor: red,
      backgroundColor: red,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: green,
      backgroundColor: green,
      pointRadius: 0,
      yAxisID: 'y3',
    },
    {
      label: 'Address',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: blue,
      backgroundColor: blue,
      pointRadius: 0,
      yAxisID: 'y4',
    },
    {
      label: 'Line 1 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: 'Line 2 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: 'Line 3 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y7',
    },
    {
      label: 'Line 8 (n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: orange,
      pointRadius: 0,
      yAxisID: 'y8',
    },
    {
      label: 'Data (8n bit)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: purpul,
      pointRadius: 0,
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y5',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y6',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y7',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: orange,
      backgroundColor: transparent,
      pointRadius: 0,
      yAxisID: 'y8',
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, 0, 0,
        -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: purpul,
      backgroundColor: transparent,
      pointRadius: 0,
    },
  ]
};
const common = {}
const dataCount = 40
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
const up = (ctx, value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
const data3 = {
  labels: [...Array(dataCount)].map((v, i) => ""),
  datasets: [
    {
      label: 'Clock',
      data: [...Array(dataCount)].map((v, i) => Math.max(0, Math.min(1, i % 8 - 3))),

      borderColor:purpul,
      backgroundColor: purpul,
      yAxisID: 'y5',
      // segment: {
      //   borderColor: ctx => up(ctx, green),
      // },
      pointRadius: 0,
      stepped: true,
      pointStyle: 'circle',
      // pointRadius: (value)=>value.parsed.y*5,
      pointHoverRadius: 8
    },
    {
      label: 'SDR',
      data: [...Array(dataCount)].map((v, i) => Math.max(0, Math.min(1, i % 8 - 3))),

      borderColor: red,
      backgroundColor: red,
      yAxisID: 'y2',
      // segment: {
      //   borderColor: ctx => up(ctx, green),
      // },
      //stepped:true,
      pointStyle: 'circle',
       pointRadius: [...Array(dataCount)].map((v, i) =>i%8==4?5:0) ,
      pointHoverRadius: 8
    },
    {
      label: 'DoubleDR',
      data: [...Array(dataCount)].map((v, i) => Math.max(0, Math.min(1, i % 8 - 3))),

      borderColor: green,
      backgroundColor: green,
      //pointRadius: (value)=>value.parsed.y*5,
      pointRadius: [...Array(dataCount)].map((v, i) =>(i%8==4||i%8==7)?5:0),
      // segment: {
      //   borderColor: ctx => down(ctx, purpul) || up(ctx, yellow),
      // },
      yAxisID: 'y3',
     // stepped: true,

    },
    {
      label: 'QuadDR',
      data: [...Array(dataCount)].map((v, i) => Math.max(0, Math.min(1, i % 4 - 1))),
      //data: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
      //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: blue,
      backgroundColor: blue,
      pointRadius: [...Array(dataCount)].map((v, i) =>(i%4==2||i%4==3)?5:0),
      // segment: {
      //   borderColor: ctx => down(ctx, purpul) || up(ctx, yellow),
      // },
      yAxisID: 'y',
      //stepped: true,
    },

  ]
};

let delayed;

const customLegend = {
  id: 'customLegend',
  afterDraw: (chart, args, pluginOptions) => {
    chart.legend.legendItems.forEach(element => {
      if (element.text === '') {
        element.hidden = true;
        element.strokeStyle = transparent;
      }
    })
    const { ctx, data, chartArea: { left, right, top, bottom, width, height }, scales: { x, y } } = chart;
    ctx.save();
    data.datasets.forEach((dataset, index) => {
      let color = 'transparent';
      if (chart.isDatasetVisible(index) === true) {
        color = dataset.backgroundColor;
      };
      ctx.font = 'bolder 12px sans-serif';
      ctx.fillStyle = color;
      ctx.textAlign = 'right';
      ctx.fillText(dataset.label, left - 25, chart.getDatasetMeta(index).data[0].y);
    });
    ctx.restore();
  }
}

const config = {
  type: 'line',
  data: data,
  options: {
    animation,
    interaction: {
      intersect: false
    },
    layout: {
      padding: {
        left: (context) => {
          return context.chart.ctx.measureText('Address').width + 15;
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: purpul
        },
        ticks: {
          color: transparent,
        },
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        },
        ticks: {
          color: transparent,
        },
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        },
        ticks: {
          color: transparent,
        },
      },
    }
  },
  plugins: [customLegend]
};

const config1 = {
  type: 'line',
  data: data1,
  options: {
    animation,
    interaction: {
      intersect: false
    },
    layout: {
      padding: {
        left: (context) => {
          return context.chart.ctx.measureText('Line 1 (n bit)').width + 15;
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: purpul
        },
        ticks: {
          color: transparent,
        },
      },
      y6: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y5: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        },
        ticks: {
          color: transparent,
        },
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        },
        ticks: {
          color: transparent,
        },
      },
    }
  },
  plugins: [customLegend]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    animation,
    interaction: {
      intersect: false
    },
    layout: {
      padding: {
        left: (context) => {
          return context.chart.ctx.measureText('Line 1 (n bit)').width + 15;
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: purpul
        },
        ticks: {
          color: transparent,
        },
      },
      y8: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y7: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y6: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y5: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        },
        ticks: {
          color: transparent,
        },
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        },
        ticks: {
          color: transparent,
        },
      },
    }
  },
  plugins: [customLegend]
};

const config4 = {
  type: 'line',
  data: data4,
  options: {
    animation,
    interaction: {
      intersect: false
    },
    layout: {
      padding: {
        left: (context) => {
          return context.chart.ctx.measureText('Line 1 (n bit)').width + 15;
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: purpul
        },
        ticks: {
          color: transparent,
        },
      },
      y8: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y7: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y6: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y5: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 2,
        grid: {
          borderColor: orange
        },
        ticks: {
          color: transparent,
        },
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        },
        ticks: {
          color: transparent,
        },
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        },
        ticks: {
          color: transparent,
        },
      },
    }
  },
  plugins: [customLegend]
};

const config3 = {
  type: 'line',
  data: data3,
  options: {
    animation,
    interaction: {
      intersect: false
    },
    layout: {
      padding: {
        left: (context) => {
          return context.chart.ctx.measureText('Address').width + 15;
        }
      }
    },
    scales: {
      x: {
        ticks: {
          // stepSize:50,
        }
      },

      y: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        },
        ticks: {
          color: transparent,
        },
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        },
        ticks: {
          color: transparent,
        },
      },
      y5: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        },
        ticks: {
          color: transparent,
        },
      },
    }
  },
  
  plugins: [customLegend]
};

const ramItems = document.querySelectorAll('.ram');
var ctx = document.getElementById('chart');
var chart;

(function () {

  document.querySelector('#button1').addEventListener('click', function () {
    if (chart) { chart.destroy(); }
    for (const ram of ramItems) {
      if (ram.dataset.module === 'sdr' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config);
      } else if (ram.dataset.module === 'ddr' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config1);
      } else if (ram.dataset.module === 'ddr2' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config2);
      } else if (ram.dataset.module === 'ddr3' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config4);
      } else if (ram.dataset.module === 'ddr4' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config4);
      } else if (ram.dataset.module === 'ddr42' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config2);
      } else if (ram.dataset.module === 'ddr5' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config2);
      } else if (ram.dataset.op === 's' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config3);
      }
    }
  });

  document.querySelector('#warning').addEventListener('click', function () {
    if (chart) { chart.destroy(); }
  });

})();