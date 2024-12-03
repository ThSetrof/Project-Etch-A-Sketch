function createElement(tag){
    let element = document.createElement(tag);
    return element;
}


let pixelPerRow = 16



function createPixelGrid(x, y){
    let pixelGrid = createElement('div');
    pixelGrid.classList.add('pixelGrid');
    
    for(let i = 0; i < x; i++){
        let row = createElement('div');
        row.classList.add('row');

        for(let j = 0; j < y; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }

        pixelGrid.appendChild(row);
    }

    return pixelGrid;
}



let pixelGrid = createPixelGrid(pixelPerRow, pixelPerRow);
let pixelColor = 'pink';

document.body.appendChild(pixelGrid);

console.log(pixelGrid);

