
// line chart for weekly sales 

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        type: 'line',
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
            "#3ef",

        ],
        borderColor: [
            "#3ef",
        ],
        borderWidth: 1
    }]
};

// config 
const config = {

    data,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('LineChart'),
    config
);


// bar chart prodct views 
const ctxBar = document.getElementById('BarChart');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: '# of Votes',
            data: ["28", "27", "10", "22", "27", "30", "28", "25", "23", "28"],
            backgroundColor: [
                "#3bd6f3",
                "#766efa",
            ],


            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    DrawOnChartArea: false,
                    borderWith: 3,
                    drawBorder: false,
                    display: false
                }
            },
            x: {
                grid: {
                    DrawOnChartArea: false,
                    borderWith: 3,
                    drawBorder: false,
                    display: false
                }
            }
        }
    }
});