// chart.js
var ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['HTML', 'Bootstrap/CSS', 'Python', 'JavaScript', 'Java', 'C'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 75, 65, 60, 50, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(144, 238, 144, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(144, 238, 144, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
          fontColor: 'white',
          display: false,
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        barPercentage: 0.5,
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: 'white',
          fontSize: 15,
        }
      }]
    }
  }
});