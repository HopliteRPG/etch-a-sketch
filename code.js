const container = document.querySelector(".container");

//Create a new divRow each time and add the 16 divs into it

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
}


for(let i = 0; i < 16; i++){
    cloneRow();
}
