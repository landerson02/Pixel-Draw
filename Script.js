const screen = document.getElementById("screen");
const colorSign = document.getElementById('color-sign');
const randomColorsBtn = document.getElementById('random-color-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');
const toggleBtn = document.getElementById('toggle-grid-btn');
const picker = document.getElementById('picker');
const bgPicker = document.getElementById('bgpicker');
const bgColorBtn = document.getElementById('bg-color-btn');
const body = document.querySelector('body');
const adjustSizeBtn = document.getElementById('adjust-size-btn');

let screenSize = 16;
let curColor = '#000000';
let curBGColor = '#FFFFFF';
let isGridToggled = true;
let isMouseDown = false;
let isRandomColors = false;
let isErasing = false;

colorSign.style.backgroundColor = curColor;

// Create pixel matrix and add listeners
function makeScreen() {
    for(let i = 0; i < screenSize; i++) {
        const div = document.createElement('div');
        div.classList.add('row');
        for(let j = 0; j < screenSize; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mousedown', () => {
                if(isRandomColors) {
                    pixel.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                } else if(isErasing) {
                    pixel.style.backgroundColor = curBGColor;
                } else {
                    pixel.style.backgroundColor = curColor;
                }
                isMouseDown = true;
            });
            body.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
            pixel.addEventListener('mouseenter', () => {
                if(isMouseDown) {
                    if(isRandomColors) {
                        pixel.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    } else if(isErasing) {
                        pixel.style.backgroundColor = curBGColor;
                    } else {
                        pixel.style.backgroundColor = curColor;
                    }
                }
            });
            div.appendChild(pixel);
        }
        screen.appendChild(div);
    }
}
clearBtn.addEventListener('click', clear);
colorSign.addEventListener('click', () => {
    picker.click();
});
picker.addEventListener('change', (e) => {
    curColor = e.target.value;
    colorSign.style.backgroundColor = curColor;
    isErasing = false;
    isRandomColors = false;
});
toggleBtn.addEventListener('click', () => {
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
    isErasing = false;
    isRandomColors = true;
});
eraserBtn.addEventListener('click', () => {
    isRandomColors = false;
    isErasing = true;
});
bgColorBtn.addEventListener('click', () => {
   bgPicker.click()
});
bgPicker.addEventListener('change', (e) => {
    curBGColor = e.target.value;
    clear();
});
adjustSizeBtn.addEventListener('click', () => {
   screenSize = prompt("Warning! inputs above 64x64 may slow down computer\nInput size: ");
   while(screen.firstChild) {
       screen.removeChild(screen.firstChild);
   }
   makeScreen();
   clear();
});
function clear() {
    let grid = document.querySelectorAll(".pixel");
    for(let i = 0; i < grid.length; i++) {
        grid[i].style.width = 40 / screenSize + "vw";
        grid[i].style.height = 40 / screenSize + "vw";
        grid[i].style.backgroundColor = curBGColor;
    }
}
makeScreen();
clear();