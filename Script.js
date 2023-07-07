const screen = document.getElementById("screen");
const colorSign = document.getElementById('color-sign');
const randomColorsBtn = document.getElementById('random-color-btn');
const eraserbtn = document.getElementById('eraser-btn');
const clearbtn = document.getElementById('clear-btn');
const togglebtn = document.getElementById('toggle-grid-btn');
const picker = document.getElementById('picker');


let screenSize = 16;
let curColor = '#000000';
let isGridToggled = true;
let isMouseDown = false;
let isRandomColors = false;

colorSign.style.backgroundColor = curColor;

// Create pixel matrix and add listeners
for(let i = 0; i < screenSize; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    for(let j = 0; j < screenSize; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mousedown', () => {
            if(isRandomColors) {
                pixel.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            } else {
                pixel.style.backgroundColor = curColor;
            }
            isMouseDown = true;
        });
        pixel.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        pixel.addEventListener('mouseenter', () => {
            if(isMouseDown) {
                if(isRandomColors) {
                    pixel.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                } else {
                    pixel.style.backgroundColor = curColor;
                }
            }
        });

        div.appendChild(pixel);
    }
    screen.appendChild(div);
}

clearbtn.addEventListener('click', clear);
colorSign.addEventListener('click', () => {
    picker.click();
});
picker.addEventListener('change', (e) => {
    curColor = e.target.value;
    colorSign.style.backgroundColor = curColor;
});
togglebtn.addEventListener('click', () => {
    if(isGridToggled) {
        let grid = document.querySelectorAll(".pixel");
        for(let i = 0; i < grid.length; i++) {
            grid[i].style.border = 'none';
            grid[i].style.margin = '0';
        }
    } else {
        let grid = document.querySelectorAll(".pixel");
        for(let i = 0; i < grid.length; i++) {
            grid[i].style.border = '1px solid black';
            grid[i].style.margin = '-1px';
        }
    }
    isGridToggled = !isGridToggled;
});
randomColorsBtn.addEventListener('click', () => {
    isRandomColors = true;
});

function clear() {
    let grid = document.querySelectorAll(".pixel");
    for(let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = 'white';
    }
}
clear();