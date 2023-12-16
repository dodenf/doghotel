
let figures = ['circle', 'square', 'triangle'];
let colors = ['yellow', 'green', 'blue'];
for (let i = 0; i < 15; i++){
    let figure = figures[Math.round(Math.random()*(figures.length-1))];
    let color = colors[Math.round(Math.random()*(colors.length-1))];
    let a = Math.random()*20 + 5;
    let top = Math.random()*90;
    let right = Math.random()*90;

    if (figure == 'triangle'){
        document.querySelector('body').insertAdjacentHTML('beforeend',
        `<div class="background_figure triangle ${color}" draggable="true"
        style="border-left-width: ${a/1.5}vmin; border-right-width: ${a/1.5}vmin; border-bottom-width: ${a}vmin; top: ${top}vh; right: ${right}vw; z-index: -1;"></div>`)
    }
    else{
        document.querySelector('body').insertAdjacentHTML('beforeend',
        `<div class="background_figure ${figure} ${color} symmetric" draggable="true"
        style="width: ${a}vmin; height: ${a}vmin; top: ${top}vh; right: ${right}vw; z-index: -1;"></div>`)
    }

}

// document.querySelectorAll('.background_figure').forEach(item => {
//     item.addEventListener("mousedown", () => {
//         item.addEventListener("mousemove", onMouseDrag);
//     });
// });

// document.querySelectorAll('.background_figure').forEach(item => {
//     item.addEventListener("mouseup", () => {
//         item.removeEventListener("mousemove", onMouseDrag);
//     });
// });

// function onMouseDrag() {
//     let getContainerStyle = window.getComputedStyle(background_figure);
//     let leftValue = parseInt(getContainerStyle.left);
//     let topValue = parseInt(getContainerStyle.top);
//     container.style.left = `${leftValue + movementX}px`;
//     container.style.top = `${topValue + movementY}px`;
// }