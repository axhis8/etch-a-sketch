const drawingContainer = document.querySelector(".draw-container");

const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");

sizeRange.addEventListener('change', () => {

    for (let x = 0; x < 16; x++) {
        const row = document.createElement("div");
        for (let y = 1; y <= 16; y++) {
            const column = document.createElement("div");
            column.style.border = "1px solid black"
            row.appendChild(column);
        }
        drawingContainer.appendChild(row); 
    }
})




