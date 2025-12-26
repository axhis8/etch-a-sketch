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

const colorBtn = document.querySelector(".color-btn");
const eraserBtn = document.querySelector(".erase-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const resetBtn = document.querySelector(".reset-btn");

let erasingMode = false;
let rainbowMode = false;

sizeRange.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;

    createGrids(sizeRange.value);

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => { // Draws for each Column
        column.addEventListener('mouseover', () => {

            if (!erasingMode) { // Checks if Eraser is on 
            column.style = "background-color: black";
            } else {
                column.style = "background-color: white";
 
            }
        })
    })

    eraserBtn.addEventListener('click', () => {
        if (!erasingMode) { // Toggle Erase Button
            erasingMode = true;
            eraserBtn.style = "background-color: rgb(14, 65, 126);";
        }
        else if (erasingMode) {
            erasingMode = false;
            eraserBtn.style = "background-color: rgb(23, 105, 207);";
        }
    })

    resetBtn.addEventListener('click', () => {
        columns.forEach(column => {column.style = "background-color: white"})
    })
    
})