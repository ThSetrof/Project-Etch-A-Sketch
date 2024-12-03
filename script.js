
let pixelPerRow = 10;

let pixelHoverColor = 'darkslategray';

let grid = document.querySelector('.pixelGrid');
let rootStyle = getComputedStyle(document.querySelector(':root'));
const gridPadding = parseInt(rootStyle.getPropertyValue('--grid-padding'));
const gridWidth = parseInt(rootStyle.getPropertyValue('--grid-width'));
const gridGap = parseInt(rootStyle.getPropertyValue('--grid-gap'));


const pixelSizeInput = document.getElementById('pixelSize');
console.log(pixelSizeInput.value);




function createElement(tag){
    return document.createElement(tag);
}

function createPixelGrid(pixelPerRow){

    let pixelSize = getPixelSize(gridWidth, gridPadding, gridGap, pixelPerRow);
    
    for(let i = 0; i < pixelPerRow; i++){
        let row = createElement('div');
        row.classList.add('row');

        for(let j = 0; j < pixelPerRow; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.height = pixel.style.width = `${pixelSize}px`;

            pixel.addEventListener('mouseover', changePixelColor);
            row.appendChild(pixel);
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


createPixelGrid(pixelPerRow);

console.log(pixelPerRow);


