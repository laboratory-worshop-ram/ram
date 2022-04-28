const red = 'rgb(255, 99, 132)';
const orange = 'rgb(255, 159, 64)';
const yellow = 'rgb(255, 205, 86)';
const green = 'rgb(75, 192, 192)';
const blue = 'rgb(54, 162, 235)';
const purpul = 'rgb(153, 102, 255)';


const labels = [
  '', '', '', '', '', '', '', '', '', '', '', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  ];

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
      //stepped: true,
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
      //stepped: true,
      yAxisID: 'y2',
      pointRadius: 0,
    },
    {
      label: 'Command',
      data: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
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
    
  ]
};

let delayed;
const config = {
  type: 'line',
  data: data,
  options: {
    animation: {
      /*onComplete: () => {
        delayed = true;
      },*/
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 250;
        }
        return delay;
      },
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
        }
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        }
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        }
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        }
      },
    }
  },
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    animation: {
      /*onComplete: () => {
        delayed = true;
      },*/
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 250;
        }
        return delay;
      },
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
        }
      },
      y4: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: blue
        }
      },
      y3: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: green
        }
      },
      y2: {
        type: 'linear',
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        grid: {
          borderColor: red
        }
      },
    }
  },
};

const ramItems = document.querySelectorAll('.ram');
var ctx = document.getElementById('chart');
var chart;

(function(){

  document.querySelector('#button1').addEventListener('click',function(){
    if (chart) {chart.destroy();}
    for (const ram of ramItems) {
      if (ram.dataset.module === 'sdr' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config);
      } else if (ram.dataset.module === 'ddr' && !ram.classList.contains('hidden')) {
        chart = new Chart(ctx, config2);
      }
    }
  });

  document.querySelector('#warning').addEventListener('click',function(){
    if (chart) {chart.destroy();}
  });

})();