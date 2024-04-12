const container = document.querySelector(".container");

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
    const div = document.createElement("div");
    div.classList.add("divBox");
    currentRow.appendChild(div);
    div.addEventListener('mouseover', changeColor)

}





function changeColor(divBox){
    divBox.target.style.backgroundColor = "black";
}



for(let i = 0; i < 16; i++){
    cloneRow();
}


