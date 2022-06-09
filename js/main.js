// MODEL

let ColorList = [{
        'color' : 'red',
        'music' : 'red.mp3'
    },{
        'color' : 'blue',
        'music' : 'blue.mp3'
    },{
        'color' : 'yellow',
        'music' : 'yellow.mp3'
    },{
        'color' : 'black',
        'music' : 'black.mp3'
    },{
        'color' : 'purple',
        'music' : 'purple.mp3'
    }];
let currentColor;

function addMouseOver(color) {
    color.forEach(element => {
        element.addEventListener('mouseenter', getColor);
    });
}

function getColor(e) {
    currentColor = e.target.id;
    render();
}

function removeAudio() {
    audio.pause();
    audio.currentTime = 0;
}















// CONTROLLER
let color = document.querySelectorAll('.color div');
let roundColor = document.querySelector('.round-color');
let audio;

addMouseOver(color);
render();


















// VIEW
function render() {
    if(audio != undefined) { removeAudio() };
    ColorList.forEach( index => {
        if (index.color == currentColor) {
            roundColor.style.backgroundColor = currentColor;
            audio = new Audio(`mp3/${currentColor}.mp3`)
            audio.play();
        }
    })
}