const container = document.querySelector(".container")
const divRow = document.createElement("div");


function cloneDiv(){
    const div = document.createElement("div");
    div.classList.add("divBox");
    container.appendChild(div);
}

for(let i = 0; i<16; i++){
    for(let i = 0; i<16;i++){
        counter++;
        cloneDiv();
    }
}

