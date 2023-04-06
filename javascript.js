/* First chart */
const ctx = document.getElementById('chart1');

const labels = [

    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange'

]

const data = {
    labels,
    datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        label: "Moedas",
        fill: true,
        backgroundColor:'cyan'
    }]
}

const config = {
    type: 'line',
    data,
    options: {
        responsive: true
    }
};

const chart1 = new Chart(ctx, config)

/* Second chart 
const ctx2 = document.getElementById('chart2');

const labels2 = [

    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange'

]

const data2 = {
    labels,
    datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        label: "Moedas",
        fill: true,
        backgroundColor:'cyan'
    }]
}

const config2 = {
    type: 'bar',
    data,
    options: {
        responsive: true
    }
};

const chart2 = new Chart(ctx2, config2)

*/



