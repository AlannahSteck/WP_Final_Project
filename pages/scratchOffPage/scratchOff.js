const scratchOffArea = document.getElementById("scratchOff");
const winnersArea = document.getElementById("winners");

function randNum(num){
    const theIndex = Math.floor(Math.random() * r); 
    return customersStorage[theIndex]
}

function genPage(){
    const diff = sessionStorage.getItem("difficulty")
    const imgs = [`../../resources/cells/${diff}/${diff}_beefcakeModulo.png`, `../../resources/cells/${diff}/${diff}_ferretGuy.png`, `../../resources/cells/${diff}/${diff}_negativeGuy.png`]
    const scratchOffBox = document.createElement("section");
    scratchOffBox.id = "scratchOffBox";
    scratchOffArea.appendChild(scratchOffBox);
    for (let i=0; i<4; i++){
        const cellContainer = document.createElement("div");
        cellContainer.className = "cellContainer";
        scratchOffBox.appendChild(cellContainer); 
        for (let i=0; i<4; i++){
            const cell = document.createElement("div");
            const theIndex = Math.floor(Math.random() * imgs.length); 
            cell.style.backgroundImage = `url(${imgs[theIndex]})`
            cell.classList.add("hidden", "cell");
            cell.setAttribute("onclick",`scratch(this)`)
            cellContainer.appendChild(cell); 
        }
    }

    const winBox = document.createElement("section");
    winBox.id = "winBox";
    winnersArea.appendChild(winBox);
    const heading = document.createElement("h2");
    heading.className = "accentText"
    heading.textContent = "Winning Images";
    winBox.appendChild(heading); 
    for (let i=0; i<3; i++){
        const cell = document.createElement("div");
        cell.className = "cell";
        winBox.appendChild(cell); 
    }
}


function scratch(cell){
    console.log("ONCLICK WORKS");
    unhide(cell)
}

function unhide(cell){
    console.log("REACHED");
    item.classList.remove("hidden")
    item.removeAttribute("onclick")
}