/* FIRST CHART */

Chart.defaults.color = '#fff';

const labels = [

    'Bitcoin',
    'Ethereum',
    'Binance',
    'Cardano',
    'Tether',
    'Orange'

]

const data = {
    labels,
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            label: "Moedas",
            fill: true,
            backgroundColor: [
                '#f89422',
                '#131330ea',
                '#febe42',
                '#0336ac',
                '#029293',
            ],
        },
    ],
}

const config = {
    type: 'bar',
    data,
    options: {
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: 'Valores Atuais',
                letterSpacing: 0.3
            }
        }
    }
};

const chart1 = new Chart (
    document.getElementById('chart-bar'),
    config
);


/* SECOND CHART */
const labels2 = [

    'Bitcoin',
    'Ethereum',
    'Binance',
    'Cardano',
    'Tether',
    'Orange'

]

const data2 = {
    labels,
    datasets: [{
        data: [12, 19, 3, 5, 2, 15],
        label: 'Moedas',
        fill: true,
        backgroundColor: [
            '#f89422',
            '#131330ea',
            '#febe42',
            '#0336ac',
            '#029293',
        ],
        
        borderColor: '#726A95'
    }]
}

const config2 = {
    type: 'pie',
    data: data2,
    options: {
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: 'Útimos 90 dias',
                letterSpacing: 0.3
            }
        }
    }
}

const chart2 = new Chart (
    document.getElementById('chart-pie'),
    config2
);

/* Hamburguer Menu 
class mobileNavBar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Heaaaaaaaaaaaa"));
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
    return this;
    }
}

const mobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobilenavbar.init();
*/
