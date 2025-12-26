function drawGrids(size) {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {drawingContainer.removeChild(row)}) // Removes old Grid (The Columns Color & Event Listeners)
    
    for (let x = 0; x < size; x++) { // Draws new Grid, creates the Rows first then the Columns in each Rows
        const row = document.createElement("div");
        row.classList.add("row");

        for (let y = 1; y <= size; y++) {
            const column = document.createElement("div");
            column.classList.add("column");
            if (toggleGrid) {
                column.classList.add("grid");
            }
            row.appendChild(column);
        }

        drawingContainer.appendChild(row); 
    }
}

function columnsAddEventListeners() {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => { // Draws for each Column
        column.addEventListener('mousemove', () => {

            if (!mouseDown) {
                return;
            }

            if (pencilMode) {
                column.style.backgroundColor = color;
                column.style.opacity = String(Number(column.style.opacity) + 0.1);

            }

            else if (erasingMode) {
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
        });
    });
};

function toggleMode(button) {
    colorMode = false;
    pencilMode = false;
    erasingMode = false;
    rainbowMode = false;

    colorBtn.classList.remove("active");
    pencilBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");

    button.classList.add("active");
    return true;
}

const drawingContainer = document.querySelector(".draw-container");
 
const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");

sizeRange.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;

    drawGrids(sizeRange.value);
    columnsAddEventListeners();
})

const colorInput = document.querySelector(".color-picker");
let color = colorInput.value;

const colorBtn = document.querySelector(".color-btn");
const pencilBtn = document.querySelector(".pencil-btn");
const eraserBtn = document.querySelector(".erase-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const toggleGridBtn = document.querySelector(".toggle-grid-btn");
const fillBtn = document.querySelector(".fill-btn");
const resetBtn = document.querySelector(".reset-btn");

let colorMode = true;
let pencilMode = false;
let erasingMode = false;
let rainbowMode = false;
let toggleGrid = true;

let mouseDown = false;
drawingContainer.addEventListener('mousedown', () => mouseDown = true);
drawingContainer.addEventListener('mouseup', () => mouseDown = false); 
// Both Event Listeners Check if the mouse is down or not, so that it only draws when its down (Check Line 27)


drawGrids(sizeRange.value);
columnsAddEventListeners();

colorInput.addEventListener('input', () => color = colorInput.value);

pencilBtn.addEventListener('click', () => pencilMode = toggleMode(pencilBtn));

colorBtn.addEventListener('click', () => colorMode = toggleMode(colorBtn));

eraserBtn.addEventListener('click', () => erasingMode = toggleMode(eraserBtn));

rainbowBtn.addEventListener('click', () => rainbowMode = toggleMode(rainbowBtn));

toggleGridBtn.addEventListener('click', () => {
    const columns = document.querySelectorAll(".column");        
        if (toggleGrid) {
            toggleGrid = false;
            columns.forEach(column => column.classList.remove("grid"));
            toggleGridBtn.classList.remove("active");
        } 
        else if (!toggleGrid) {
            toggleGrid = true;
            columns.forEach(column => column.classList.add("grid"));
            toggleGridBtn.classList.add("active");

        }
    
});

fillBtn.addEventListener('click', () => {

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
    column.style.removeProperty("opacity");
    column.style.backgroundColor = color;
});

});

resetBtn.addEventListener('click', () => { 
    colorMode = toggleMode(colorBtn);

    colorInput.value = "#000000";
    color = colorInput.value;

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.style.removeProperty("background-color");
        column.style.removeProperty("opacity");
    });
});