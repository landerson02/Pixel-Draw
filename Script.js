const screen = document.getElementById("screen");
const colorSign = document.getElementById('color-sign');
const pickColorBtn = document.getElementById('pick-color-btn');
const randomColorsBtn = document.getElementById('random-color-btn');
const eraserbtn = document.getElementById('eraser-btn');
const clearbtn = document.getElementById('clear-btn');
const picker = document.getElementById('picker');

let screenSize = 16;
let curColor = '#000000';

colorSign.style.backgroundColor = curColor;

// Create pixel matrix and add listeners
for(let i = 0; i < screenSize; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    for(let j = 0; j < screenSize; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = curColor;
        });
        div.appendChild(pixel);
    }
    screen.appendChild(div);
}

clearbtn.addEventListener('click', clear);
pickColorBtn.addEventListener('click', () => {
    picker.click();
});
picker.addEventListener('change', (e) => {
    curColor = e.target.value;
    colorSign.style.backgroundColor = curColor;
});

function clear() {
    let grid = document.querySelectorAll(".pixel");
    for(let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = 'white';
    }
}