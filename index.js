if (sessionStorage.getItem("totalWinnings") == null){
    sessionStorage.setItem("totalWinnings",0);
}

function selectMode(difficulty, max, cost){
    sessionStorage.setItem("difficulty", difficulty);
    sessionStorage.setItem("maxWin", max);
    sessionStorage.setItem("totalWinnings",Number(sessionStorage.getItem("totalWinnings"))-cost);
}