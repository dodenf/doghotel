
export let userInfo = {};

let input = document.getElementById("user_name");
input.addEventListener( 'input',
    ()=>{
        userInfo.name = input.value;
    }
);

let startButton = document.getElementById("start");
startButton.addEventListener('click', (event)=>{
    event.preventDefault();
    if (userInfo.name){
        level_selection();
    }
    else { shake_button(); }
});


function shake_button(){
    let startButtonClassList = startButton.classList;
    startButtonClassList.add('shaked');
    setTimeout(()=>
        startButtonClassList.remove('shaked')
    , 1000);
}

function level_selection(){
    let conteiner = document.querySelector('.conteiner');
    conteiner.replaceChildren();
    conteiner.insertAdjacentHTML('afterbegin',
        `<h class="title">Выберите уровень</h>
        <form class="level_selection" action="./game.html">
        <button class="level unlocked" value="1">1</button>
        <button class="level locked" value="2">2</button>
        <button class="level locked" value="3">3</button>
        <form>`
    );
    document.querySelectorAll('.level').forEach((item)=>{
        item.addEventListener('click', ()=>{
            userInfo.last_selected_level = item.value;
            localStorage.setItem(`${"userInfo"}`, JSON.stringify(userInfo));
        })
    });

    document.querySelectorAll('.locked').forEach( item =>{
        item.disabled = 'disabled';
    })
}





