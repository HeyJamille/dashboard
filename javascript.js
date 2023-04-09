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
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            label: "Moedas",
            fill: true,
            backgroundColor: 'rgba(83,47,165)',
            borderColor: 'rgba(83,47,165)',
            pointBackgroundColor: 'rgba(0,255,255,1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5
        },
    ],
}

const config = {
    type: 'line',
    data,
    options: {
        responsive: true
    }
};

const chart1 = new Chart(ctx, config);


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
