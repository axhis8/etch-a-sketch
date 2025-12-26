const drawingContainer = document.querySelector(".draw-container");

const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");

sizeRange.addEventListener('change', () => {
    for (let x = 0; x < sizeRange.value; x++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let y = 1; y <= sizeRange.value; y++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.border = "1px solid black"
            row.appendChild(column);
        }

        drawingContainer.appendChild(row); 
    }
})

sizeRange.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;
})


