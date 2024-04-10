const container = document.querySelector(".container");

//Create a new divRow each time and add the 16 divs into it

function cloneRow(){
    const divRow = document.createElement("div");
    divRow.classList.add("divRow");
    container.appendChild(divRow)
}

function cloneDiv(){
    const div = document.createElement("div");
    div.classList.add("divBox");
    divRow.appendChild(div);
}

for(let i = 0; i<16; i++){
    cloneRow();
    for(let i = 0; i<16;i++){
        cloneDiv();
    }
}

