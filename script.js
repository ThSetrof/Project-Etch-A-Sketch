let pixelHoverColor = 'darkslategray';
let pixelPerRow = 16

let grid = document.querySelector('.pixelGrid');
const pixels = [];
let rootStyle = getComputedStyle(document.querySelector(':root'));
const gridPadding = parseInt(rootStyle.getPropertyValue('--grid-padding'));
const gridWidth = parseInt(rootStyle.getPropertyValue('--grid-width'));
const gridGap = parseInt(rootStyle.getPropertyValue('--grid-gap'));

const pixelSizeInput = document.getElementById('pixelSize');

pixelSizeInput.addEventListener("input", event => {

    let output = pixelSizeInput.previousElementSibling;
    output.textContent = pixelSizeInput.value;
});

pixelSizeInput.addEventListener("change", event => {
    pixelPerRow = Number.parseFloat(pixelSizeInput.value);
    grid.textContent = '';
    createPixelGrid(pixelPerRow);

});

function createElement(tag){
    return document.createElement(tag);
}

function createPixelGrid(pixelPerRow){

    let pixelSize = getPixelSize(gridWidth, gridPadding, gridGap, pixelPerRow);
    grid.textContent = '';

    for(let i = 0; i < pixelPerRow; i++){
        let row = createElement('div');
        row.classList.add('row');

        for(let j = 0; j < pixelPerRow; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.height = pixel.style.width = `${pixelSize}px`;

            pixel.addEventListener('mouseover', changePixelColor);
            row.appendChild(pixel);
            pixels.push(pixel);
        }


        grid.appendChild(row);

    }
}

function changePixelColor(e){
    let pixel = e.target;
    pixel.style.backgroundColor = pixelHoverColor;
}

function getPixelSize(width, padding, gap, pixelPerRow){
    return  (width - padding * 2) / pixelPerRow;
}

function clearGrid(){
    pixels.forEach(pixel => pixel.remove());
}

createPixelGrid(pixelPerRow);




