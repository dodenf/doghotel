import { count_items, count_tasks, time_wait, quest_color, colors, shapes, shapesBoard } from "./consts.js";
// localStorage.clear();
console.log(localStorage);

let currentTask = 0;
let countAnsw = 0;

let userScore = 0;
let level = localStorage.getItem("last_level");
let task_tracking = document.querySelector('.task_tracking').children;

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

    if (level ==  2){
        document.querySelectorAll('svg').forEach( elem => {
            if (random(2)){ elem.style = 'animation: spinning 0.8s linear infinite' }
            else { elem.style = 'animation: wobble 0.8s linear infinite' }
        })
    }
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
    document.querySelector('.pause').remove();
    document.querySelector('.timer_slider').remove();
    document.querySelector('body').insertAdjacentHTML('beforeend',
    `<div class="wrap_res">
        <h class="title">Ваш результат: ${userScore}</h>
        <form><button class="button" type="submit">ещё раз</button></form>
    </div>
    <div class="mask"></div>`);
    
    // сохранение результата
    let name = localStorage.getItem("last_player");
    let userScores = localStorage.getItem(name).split(',');
    userScores[level-1] = userScore > userScores[level-1]? userScore: userScores[level-1];
    userScores[level-1] = +userScores[level-1];
    localStorage.setItem(name, userScores);
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