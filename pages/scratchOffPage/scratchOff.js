const scratchOffArea = document.getElementById("scratchOff");
const winnersArea = document.getElementById("winners");

function genPage(){
    const scratchOffBox = document.createElement("section");
    scratchOffBox.id = "scratchOffBox";
    scratchOffArea.appendChild(scratchOffBox);
    for (let i=0; i<4; i++){
        const cellContainer = document.createElement("div");
        cellContainer.className = "cellContainer";
        scratchOffBox.appendChild(cellContainer); 
        for (let i=0; i<4; i++){
            const cell = document.createElement("div");
            cell.className = "cell";
            cellContainer.appendChild(cell); 
        }
    }

    const winBox = document.createElement("section");
    winBox.id = "winBox";
    winnersArea.appendChild(winBox);
}