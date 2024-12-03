
let pixelPerRow = 16;
let pixelHoverColor = 'darkslategray';
let pixelGrid = createPixelGrid(pixelPerRow, pixelPerRow);



function createElement(tag){
    let element = document.createElement(tag);
    return element;
}





function createPixelGrid(x, y){
    let pixelGrid = createElement('div');
    pixelGrid.classList.add('pixelGrid');
    
    for(let i = 0; i < x; i++){
        let row = createElement('div');
        row.classList.add('row');

        for(let j = 0; j < y; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', changePixelColor);
            row.appendChild(pixel);
        }

        pixelGrid.appendChild(row);
    }

    return pixelGrid;
}


function changePixelColor(e){
    let pixel = e.target;
    pixel.style.backgroundColor = pixelHoverColor;
}



document.body.appendChild(pixelGrid);

console.log(pixelGrid);

