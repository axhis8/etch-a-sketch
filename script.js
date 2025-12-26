function drawGrids(size) {
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

function draw() {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => { // Draws for each Column
        column.addEventListener('mouseover', () => {

            if (erasingMode) {
                column.style.backgroundColor = "white";

            } 
            
            else if (rainbowMode) {
                const letters = "0123456789ABCDEF";
                let randomColor = "#";
                for (let i = 0; i < 6; i++) { 
                    randomColor += letters[Math.floor(Math.random() * 16)];
                }

                column.style.backgroundColor = randomColor;
                // Picks one letter from Variable "letters" & adds it to the "#", thus getting a random HEX Code
            }
            
            else if (colorMode) {
                column.style.backgroundColor = color;
                
            }
        })
    })
}

function toggleMode(button) {
    colorMode = false;
    erasingMode = false;
    rainbowMode = false;

    colorBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");

    button.classList.add("active");
    return true;
}

const drawingContainer = document.querySelector(".draw-container");
 
const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");

drawGrids(sizeRange.value);
draw();

drawingContainer.addEventListener('mouseenter', draw)

sizeRange.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;

    drawGrids(sizeRange.value);
})

const colorInput = document.querySelector(".color-picker");
let color = colorInput.value;

const colorBtn = document.querySelector(".color-btn");
const eraserBtn = document.querySelector(".erase-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const resetBtn = document.querySelector(".reset-btn");

let colorMode = true;
let erasingMode = false;
let rainbowMode = false;

colorInput.addEventListener('input', () => color = colorInput.value)

colorBtn.addEventListener('click', () => colorMode = toggleMode(colorBtn))

eraserBtn.addEventListener('click', () => erasingMode = toggleMode(eraserBtn))

rainbowBtn.addEventListener('click', () => rainbowMode = toggleMode(rainbowBtn))

resetBtn.addEventListener('click', () => { 
    colorMode = toggleMode(colorBtn);

    colorInput.value = "#000000";
    color = colorInput.value

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => column.style.backgroundColor = "white");
})