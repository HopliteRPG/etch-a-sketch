const container = document.querySelector(".container");
const createNewGridBtn = document.querySelector(".create-new-grid-btn");

function cloneRow(){
    const divRow = document.createElement("div");
    divRow.classList.add("divRow");
    const cloneDivRow = divRow.cloneNode(true);
        container.appendChild(cloneDivRow)
        for(let i = 0; i<16;i++){
            cloneDiv(cloneDivRow);
        }
}

function cloneDiv(currentRow){
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    currentRow.appendChild(divBox);
    divBox.addEventListener('mouseover', (divBox) => {
        divBox.target.style.backgroundColor = "black";

    })

}

createNewGridBtn.addEventListener("click", () => {
    createGrid()
})

function createGrid(){
    console.log("button pressed")
}

for(let i = 0; i < 16; i++){
    cloneRow();
}


