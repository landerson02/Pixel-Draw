const screen = document.getElementById("screen");


let screenSize = 16;

for(let i = 0; i < screenSize; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    for(let j = 0; j < screenSize; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        div.appendChild(pixel);
    }
    screen.appendChild(div);
}