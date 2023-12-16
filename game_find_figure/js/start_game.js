
//localStorage.clear();
console.log(localStorage);

const count_items = [10, 15, 20];
const count_tasks = 10;
const time_wait = 5;

let currentTask = 0;
let countAnsw = 0;

let userScore = 0;
let level = 1;
let task_tracking = document.querySelector('.task_tracking').children;

//for 1 level
const quest_color = {
    blue: 'синие',
    orange: 'оранжевые',
    green: 'зеленые',
    red: 'красные',
    pink: 'розовые',
    white: 'белые',
    yellow: 'желтые',
    purple: 'фиолетовые'
}

//figures (diamond, hexagon, square, circle, waves, star, triangle, cross)
const colors = ["blue", "orange", "green", "red", "pink", "yellow", "purple"]
const shapes = ["diamond", "hexagon", "square", "circle", "waves", "star", "triangle", "cross"];
const shapesBoard = {
    diamond: {
        quest: "ромбы",
        w: 299.7,
        svg: "M 149.5011,0.00979505 C 116.83792,0.22071505 98.767802,32.341072 76.006692,50.868356 51.577147,77.337822 21.969209,100.20953 2.937445,131.02 c -7.432528,21.71451 -0.513794,46.61381 17.961458,60.596 35.636872,35.71633 69.221149,74.32447 109.506577,104.85759 22.54565,8.93913 48.62378,0.19987 63.46525,-18.50135 33.72559,-32.80163 69.58597,-64.19893 98.70204,-101.21506 11.69284,-20.63706 9.63806,-48.83648 -9.61805,-64.35114 C 247.37579,75.214762 212.40709,36.594334 172.169,4.490192 165.11132,1.215191 157.25023,-0.12977095 149.5011,0.00979505 Z"
    },
    hexagon: {
        quest: "шестиугольники",
        w: 274,
        svg: "M 136.82286,0 C 101.79393,6.498591 72.947573,30.32623 42.024653,46.7871 23.212563,58.257107 -2.1573467,72.093192 1.4087633,98.180082 c -0.29848,40.128228 -4.13124,80.990338 2.27281,120.703318 8.8164097,26.03361 38.9710297,32.44349 59.0264297,47.34869 23.85786,11.14979 45.085087,32.44131 72.316587,33.76791 32.61086,-1.61135 58.3851,-25.35996 86.59058,-39.28063 21.09857,-14.38103 54.93065,-27.85861 51.66449,-58.86483 0.0671,-40.59136 2.88402,-81.95734 -3.03579,-122.076658 C 256.99284,54.765724 226.84355,46.206205 204.85627,30.731353 182.75736,20.241282 161.84163,1.832704 136.82286,0 Z"
    },
    square: {
        quest: "квадраты",
        w: 299.3,
        svg: "m 86.488857,0.0265813 c -27.76052,2.348816 -65.54609,-7.346325 -82.2268297,22.0855347 -6.31548,28.655457 -2.43368,59.263886 -3.94367001,88.644494 1.19065001,55.03306 -3.16004999,110.53272 3.46258001,165.25731 4.55156,16.85245 23.7104597,26.69292 40.3620197,23.33042 75.423463,-1.18751 151.071313,2.60869 226.350753,-2.50465 21.2774,-1.43763 31.80711,-25.65321 28.10651,-44.47361 -0.9692,-74.47119 2.1034,-149.12149 -1.9888,-223.479016 C 292.46882,7.6172143 268.96221,-1.0389687 249.44965,1.3111433 195.14298,0.1133153 140.80784,-0.0837807 86.488857,0.0265813 Z"
    },
    circle: {
        quest: "круги",
        w: 300.6,
        svg: "M 145.73641,0.23234376 C 64.229605,0.53829376 -7.9771946,77.914601 0.71140536,159.73096 3.0266054,238.31971 79.063005,307.20521 157.89121,299.39422 241.57791,300.15656 311.15404,216.12251 299.32674,134.19999 294.17274,58.16356 221.60181,-4.3028112 145.73641,0.23234376 Z"
    },
    waves: {
        quest: "волны",
        w: 404.7,
        svg: "m 124.35249,0.01082261 c -1.9452,-0.02715 -3.8955,-0.0031 -5.8532,0.07082 C 74.962792,0.69807861 32.190492,23.600328 5.9109924,57.843539 -10.329308,82.059161 11.453592,119.52457 41.340592,112.95924 c 25.0479,-6.58964 38.5048,-34.805099 65.263698,-38.984699 40.3232,-9.557597 65.8704,29.515729 94.10825,50.517799 34.2753,28.7637 83.1085,40.10472 125.5557,23.92202 29.9364,-10.46579 59.6496,-29.11473 75.7285,-57.024099 11.507,-26.512761 -15.6645,-57.144743 -43.3563,-47.912926 -22.3471,10.694939 -37.9629,34.906656 -64.3804,38.233156 -39.274,7.50717 -62.3842,-31.805362 -90.4291,-51.352006 C 181.21249,12.048452 153.53169,0.41809661 124.35249,0.01081461 Z M 118.34399,144.66051 c -45.422298,1.16166 -91.706698,25.67189 -115.5119976,64.64398 -13.2256004,28.12226 22.6960996,61.89103 49.3529996,44.16693 22.4573,-16.03935 44.6078,-41.27183 75.388198,-35.33709 41.9522,9.4401 63.2342,53.42947 102.01335,69.65308 45.2742,22.1703 100.9938,12.84792 140.3076,-17.4059 21.656,-13.31451 44.9038,-39.63029 29.5744,-66.09791 -13.9034,-23.92574 -49.1647,-20.37488 -64.575,0.0196 -21.731,24.53958 -61.5459,31.20171 -87.2361,8.77475 -32.7623,-27.23908 -64.04695,-61.98033 -109.02925,-67.00883 -6.7079,-1.01982 -13.4998,-1.48764 -20.2842,-1.40869 z"
    },
    star: {
        quest: "звезды",
        w: 314.2,
        svg: "m 154.98648,0.03060636 c -21.9352,1.28471804 -21.6742,30.50653664 -28.3309,46.01011664 -4.8695,17.660145 -9.6566,35.342879 -14.4903,53.012859 -32.968013,1.228698 -66.380713,-3.50797 -99.067913,0.23492 -15.9110996,7.263138 -18.2493996,30.799628 -1.8845,39.187318 22.9213,17.76822 48.0786,32.38095 72.1217,48.54431 -9.7158,32.01764 -27.8488,62.13326 -31.5348,95.57907 3.1518,17.13656 26.2807,23.22208 38.2577,10.37166 22.927913,-15.1548 42.874413,-35.89141 65.733713,-50.17378 29.4573,15.19591 50.534,43.9205 81.0388,56.93158 18.0462,2.92639 33.0142,-18.43781 22.1775,-34.23209 -8.5419,-26.53566 -19.294,-52.28093 -29.1453,-78.34149 27.1664,-19.52736 59.3715,-33.60037 82.2534,-58.23617 8.2054,-17.71997 -9.832,-36.045578 -28.0408,-31.192818 -27.2037,-0.58906 -54.9526,3.206898 -81.7937,1.84732 -11.5503,-31.195047 -13.7827,-66.562092 -31.7546,-94.9292986 -3.9737,-4.22550404 -10.0754,-4.80144004 -15.54,-4.61350704 z"
    },
    triangle: {
        quest: "треугольники",
        w: 335.7,
        svg: "M 165.5539,0.07520623 C 136.9287,1.8825483 130.3011,35.185973 115.63305,54.171153 77.300951,120.70436 36.326651,185.97483 2.5276512,254.95341 c -9.668,21.72869 9.8523998,48.46123 33.8705998,44.44439 93.689349,1.52053 187.407849,-0.31966 281.108049,-0.30482 15.6696,-12.03664 25.282,-34.96224 11.7683,-52.19494 C 285.1883,166.96289 240.8071,86.988602 192.0686,9.8096003 185.2423,2.8240453 175.2234,-0.55854877 165.5539,0.07520623 Z"
    },
    cross: {
        quest: "кресты",
        w: 300.8,
        svg: "M 201.08816,50.305873 C 184.41899,66.898609 167.74979,83.491351 151.08049,100.08408 117.23389,67.91512 86.644393,31.488597 49.264193,3.4810325 25.745093,-7.5636565 -3.9742074,15.074807 2.6777926,40.944913 c -1.344,18.475479 20.1708004,26.48446 29.7024004,39.980278 21.0516,23.243049 47.3328,42.856859 64.557,69.011939 -21.7917,26.96484 -50.0301,49.90612 -73.46,76.11905 -14.4789004,14.68954 -33.9281,37.68038 -16.7474004,57.85508 11.6179004,21.9561 44.3534004,18.101 57.4567004,-0.24225 28.9904,-27.95685 57.120797,-56.79219 85.726697,-85.14101 34.2736,32.8317 66.18387,68.61837 102.82897,98.70334 28.4108,13.46171 63.1463,-25.21509 41.0579,-50.39682 -28.1699,-35.37811 -62.5587,-65.22573 -93.7395,-97.8752 32.4401,-33.41243 69.713,-63.128199 97.4161,-100.609055 11.5917,-23.455321 -10.4621,-52.7541375 -36.3084,-47.79575156 -17.7698,-1.97498594 -25.8242,19.68606856 -39.0355,28.80127256 -7.0149,6.983362 -14.0297,13.966725 -21.0446,20.950087 z"
    }
}; 

// добавление паузы
document.querySelector('.header_button').insertAdjacentHTML('beforebegin',
    `<button class="header_button pause" onclick="pause()" type="button"><img src="styles/icons/pause.svg" alt="svg"></button>`
)

// добавление индикаторов
document.querySelector('.task_tracking').innerHTML = '<div class="task_indicator"></div>'.repeat(count_tasks);

generate_task();

//генерация задания
function generate_task(){
    let items = document.querySelector('.items');
    let title = document.querySelector('.title_quest');
    countAnsw = 0;
    let task_figures = [];

    //выбор случайных фигур
    for (let i = 0; i < count_items[level-1]; i++){
        task_figures.push({shape: shapes[random(shapes.length)] , color: colors[random(colors.length)] });
    }

    // выбор цвета или фигуры для задания
    let property;
    let is_shape_property = random(2); //0 - color, 1 - shape
    if (is_shape_property){
        property = shapes[random(shapes.length)]
        title.innerHTML = `Выберите все <span style="font-weight: bold">${shapesBoard[property].quest}</span>`;
        task_figures[random(task_figures.length)].shape = property; //для гарантии правильных ответов
    } else{
        property = colors[random(colors.length)]
        title.innerHTML = `Выберите все <span style="color: ${property}">${quest_color[property]}</span> фигуры`;
        task_figures[random(task_figures.length)].color = property;
    }

    items.replaceChildren(); // очищение от фигур

    // вставка фигур
    items.insertAdjacentHTML('beforeend', 
        `${setFigures(task_figures)}`
    );

    isStartTimer(true); // запуск таймера

    let arrAnswers = Array.from(document.querySelectorAll(`.${property}`));
    //обработка нажатия на ответы
    document.querySelectorAll('.figure').forEach( item =>{
        item.addEventListener('click', ()=>{ processing(item, arrAnswers) })
    });
}

function isStartTimer(a){
    if (a){ // добавление таймера
        document.querySelector('.timer').insertAdjacentHTML('afterbegin', `<div class="timer_slider"></div>`);
        let timer_slider = document.querySelector('.timer_slider');
        timer_slider.style = `animation: ${time_wait}s timer forwards linear`;
        timer_slider.addEventListener('animationend', ()=>{
            task_tracking[currentTask++].style = 'background: brown';
            if (currentTask == count_tasks){
                showRes();
            }
            else{
                isStartTimer(false);
                generate_task();
            }
        });
    }
    else{ // удаление таймера
        document.querySelector('.timer').replaceChildren();
    }
}

function showRes(){
    document.querySelector('.timer_slider').remove();
    document.querySelector('body').insertAdjacentHTML('beforeend',
    `<div class="wrap_res">
        <h class="title">Ваш результат: ${userScore}</h>
        <form><button class="button" type="submit">ещё раз</button></form>
    </div>
    <div class="mask" ></div>`)
}

function processing(item, arrAnswers){
    if (arrAnswers.includes(item)){
        countAnsw += 1; // количество выбранных правильных ответов
        // item.removeEventListener('click', ()=>{ processing(item, arrAnswers) });
        item.style = 'background: rgb(90 169 90)';
        
        if (countAnsw == arrAnswers.length){
            userScore += 1;
            task_tracking[currentTask++].style = 'background: green';
            if (currentTask == count_tasks){
                showRes();
            }
            else{
                isStartTimer(false);
                generate_task();
            }
        }
    }
    else{
        task_tracking[currentTask++].style = 'background: brown';
        if (currentTask == count_tasks){
            showRes();
        }
        else{
            isStartTimer(false);
            generate_task();
        }
    }
}

function setFigures(figures){
    return figures.map(
        (item) => `<div class="figure ${item.shape} ${item.color}"> ${wrapFigure(item.shape)} </div>`
    ).join('');
}

function wrapFigure(shape){
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${shapesBoard[shape].w} 300" >
        <path d="${shapesBoard[shape].svg}"></path></svg>`;
}

function random(n){
    return Math.floor(Math.random()*n);
}