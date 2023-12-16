
document.querySelector("body").insertAdjacentHTML(
    'afterbegin',
    `<header class="header">
        <a href="index_game.html"><img class="icon_home" src="styles/icons/home.svg" alt="svg"></a>
        <button class="header_button theme_switch" onclick="changeTheme()" type="button"><img src="styles/icons/moon.svg" alt="svg"></button>
    </header>`
)

// начальные настройки
document.querySelector('body').style.backgroundColor = 'var(--dark_theme_background-color)';
document.querySelector('body').style.color = 'var(--light_theme_background-color)';

function changeTheme(){
    let currentColor = document.querySelector('body').style;
    document.querySelector('.theme_switch').replaceChildren();
    if (currentColor.backgroundColor == 'var(--dark_theme_background-color)'){
        document.querySelector('body').style.backgroundColor = 'var(--light_theme_background-color)';
        document.querySelector('body').style.color = 'var(--dark_theme_background-color)';
        //замена иконки
        document.querySelector('.theme_switch').insertAdjacentHTML( 'afterbegin', `<img src="styles/icons/sun.svg" stroke="yellow" alt="svg">`);
        document.querySelector('.icon_home').style.stroke = 'var(--dark_theme_background-color)';
    }
    else{
        document.querySelector('body').style.backgroundColor = 'var(--dark_theme_background-color)';
        document.querySelector('body').style.color = 'var(--light_theme_background-color)';

        document.querySelector('.theme_switch').insertAdjacentHTML( 'afterbegin', `<img src="styles/icons/moon.svg" alt="svg">`);
        // document.querySelector('img').style.stroke = 'var(--light_theme_background-color)';
    }
    
}

function pause(){
    document.querySelector('.timer_slider').style.animationPlayState = 'paused';
    document.querySelector('body').insertAdjacentHTML('beforeend',
    `<div class="mask" >
    <button class="header_button play" onclick="play()" type="button" style="height: 150px"><img src="styles/icons/play.svg" alt="svg"></button>
    </div>`)
    document.querySelector('.pause').remove();
}

function play(){
    document.querySelector('.timer_slider').style.animationPlayState = 'running';
    document.querySelector('.header_button').insertAdjacentHTML('beforebegin',
        `<button class="header_button pause" onclick="pause()" type="button"><img src="styles/icons/pause.svg" alt="svg"></button>`
    )
    document.querySelector('.mask').remove();
}