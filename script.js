const drawingContainer = document.querySelector(".draw-container");

const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");



sizeRange.addEventListener('change', () => {
    let drawingSize = sizeRange.value;

    for (let i = 0; i <= drawingSize; i++) {
        const grid = document.createElement("div");
        grid.style = `width: ${drawingSize}px; height: ${drawingSize}px;`
        drawingContainer.appendChild(grid);
    }
})

