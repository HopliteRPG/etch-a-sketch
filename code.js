const container = document.querySelector(".container");
const createNewGridBtn = document.querySelector(".create-new-grid-btn");

function cloneRow(divBoxNum){
    const divRow = document.createElement("div");
    divRow.classList.add("divRow");
    const cloneDivRow = divRow.cloneNode(true);
        container.appendChild(cloneDivRow)
        for(let i = 0; i<divBoxNum;i++){
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
    container.innerHTML = ""
let rowNum = prompt("Enter the amount of rows you would like the grid to have");
if(rowNum > 0 && rowNum < 101){
    let divBoxNum = prompt("Enter a positive number that is less than 101");
    if(divBoxNum > 0 && divBoxNum < 101){
        for(let i = 0; i < rowNum; i++){
            cloneRow(divBoxNum);
        }
    }
}
else{
}


}


