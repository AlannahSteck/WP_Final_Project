const scratchOffArea = document.getElementById("scratchOff");
const winnersArea = document.getElementById("winners");
const diff = sessionStorage.getItem("difficulty")
const imgs = [`../../resources/cells/${diff}/${diff}_beefcakeModulo.png`, `../../resources/cells/${diff}/${diff}_ferretGuy.png`, `../../resources/cells/${diff}/${diff}_negativeGuy.png`]


function genPage(){
    sessionStorage.setItem("cardWinnings",0);
    const scratchOffBox = document.createElement("section");
    scratchOffBox.id = "scratchOffBox";
    scratchOffArea.appendChild(scratchOffBox);
    for (let i=0; i<4; i++){
        const cellContainer = document.createElement("div");
        cellContainer.className = "cellContainer";
        scratchOffBox.appendChild(cellContainer); 
        for (let i=0; i<4; i++){
            const cell = document.createElement("div");
            cell.className = "hidden";
            cell.setAttribute("onclick",`scratch(this)`)
            cellContainer.appendChild(cell); 
        }
    }
    let possibleWins = [...imgs]
    let pickedWinBoxes = []
    const winBox = document.createElement("section");
    winBox.id = "winBox";
    winnersArea.appendChild(winBox);
    const heading = document.createElement("h2");
    heading.className = "accentText"
    heading.textContent = "Winning Images";
    winBox.appendChild(heading); 
    for (let i=0; i<3; i++){
        const cell = document.createElement("div");
        let theIndex = Math.floor(Math.random() * possibleWins.length); 
        while (pickedWinBoxes.includes(theIndex)){
            theIndex = Math.floor(Math.random() * possibleWins.length); 
        }
        pickedWinBoxes.push(theIndex)
        cell.style.backgroundImage = `url(${possibleWins[theIndex]})`
        cell.className = "cell";
        winBox.appendChild(cell); 
    }

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv"
    buttonDiv.setAttribute("onclick","createPopUp()")
    const buttonText = document.createElement("h3");
    buttonText.textContent = "Select New Card"
    buttonDiv.appendChild(buttonText)
    winnersArea.appendChild(buttonDiv)
}


function scratch(cell){
    cell.className = "cell";
    cell.removeAttribute("onclick")
    const theIndex = Math.floor(Math.random() * imgs.length); 
    cell.style.backgroundImage = `url(${imgs[theIndex]})`
    const maxWin = Number(sessionStorage.getItem("maxWin"))
    let win = Math.ceil((Math.pow(Math.random(), 250) * maxWin)/5)*5; 
    if (win==0 || win==5){
        const ranNum = Math.floor(Math.random() * 3); 
        if (ranNum==2){
            win = 5
        }
        else{
            win = 1
        }
    }
    cell.textContent = "$" + win
    if (sessionStorage.getItem("cardWinnings") == 0){
    sessionStorage.setItem("cardWinnings",win);
    }
    else{
      sessionStorage.setItem("cardWinnings",win+Number(sessionStorage.getItem("cardWinnings")))  
    }

}

function createPopUp(){
    console.log("no new card for you >:D")
}