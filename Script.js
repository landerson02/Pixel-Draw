const screen = document.getElementById("screen");
const colorSign = document.getElementById('color-sign');

let screenSize = 16;
let curColor = 'pink';

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
