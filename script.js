const drawingContainer = document.querySelector(".draw-container");

const sizeRange = document.querySelector(".size-range");
const sizeLabel = document.querySelector(".size-label");

sizeRange.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;

    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {drawingContainer.removeChild(row)})
    
    for (let x = 0; x < sizeRange.value; x++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let y = 1; y <= sizeRange.value; y++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }

        drawingContainer.appendChild(row); 
    }

    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
        column.addEventListener('mouseover', () => {
            column.style = "background-color: black";
        })
    })

})


