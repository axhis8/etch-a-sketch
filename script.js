function createGrids(size) {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {drawingContainer.removeChild(row)}) // Removes old Grid
    
    for (let x = 0; x < size; x++) { // Draws new Grid, creates the Rows first then the Columns in each Rows
        const row = document.createElement("div");
        row.classList.add("row");

        for (let y = 1; y <= size; y++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }

        drawingContainer.appendChild(row); 
    }
}

const drawingContainer = document.querySelector(".draw-container");

const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");
const triggerInput = new Event("triggerInput");

const colorBtn = document.querySelector(".color-btn");
const eraserBtn = document.querySelector(".erase-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const resetBtn = document.querySelector(".reset-btn");

const buttonBaseColor = "rgb(23, 105, 207)";
const buttonClickedColor = "rgb(14, 65, 126)";

let erasingMode = false;
let rainbowMode = false;


sizeRange.addEventListener('input', () => {
    sizeRange.dispatchEvent(triggerInput)
})

sizeRange.addEventListener('triggerInput', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;

    createGrids(sizeRange.value);

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => { // Draws for each Column
        column.addEventListener('mouseover', () => {

            if (erasingMode) { // Checks if Eraser is on 
                column.style.backgroundColor = "white";

            } else if (rainbowMode) {
                const letters = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                column.style.backgroundColor = color;

            }
            
            else {
                column.style.backgroundColor = "black";
 
            }
        })
    })

    eraserBtn.addEventListener('click', () => {
        if (!erasingMode) { // Toggle Erase Button
            erasingMode = true;
            eraserBtn.style.backgroundColor = buttonClickedColor;
            if (rainbowMode) { // Turns the Rainbow Pen off, if it's on
                rainbowMode = false;
                rainbowBtn.style.backgroundColor = buttonBaseColor;
            }
        }
        else if (erasingMode) {
            erasingMode = false;
            eraserBtn.style.backgroundColor = buttonBaseColor;
        }
    })

    rainbowBtn.addEventListener('click', () => {
        if (!rainbowMode) { // Toggle Rainbow Button
            rainbowMode = true;
            rainbowBtn.style.backgroundColor = buttonClickedColor;
            if (erasingMode) { // Turns the Eraser off, if it's on
                erasingMode = false;
                eraserBtn.style.backgroundColor = buttonBaseColor;
            }
        }
        else if (rainbowMode) {
            rainbowMode = false;
            rainbowBtn.style.backgroundColor = buttonBaseColor;
        }
    })

    resetBtn.addEventListener('click', () => {
        columns.forEach(column => {column.style = "background-color: white"})
        if (erasingMode) { // Turns the Eraser off, if it's on
                erasingMode = false;
                eraserBtn.style.backgroundColor = buttonBaseColor;
        }
        if (rainbowMode) { // Turns the Rainbow Pen off, if it's on
                rainbowMode = false;
                rainbowBtn.style.backgroundColor = buttonBaseColor;
            }
    })
    
})

sizeRange.dispatchEvent(triggerInput); // Boot the Site with the Grid