if (sessionStorage.getItem("totalWinnings") == null){
    sessionStorage.setItem("totalWinnings",0);
}

function selectMode(difficulty, max){
    sessionStorage.setItem("difficulty", difficulty);
    sessionStorage.setItem("maxWin", max);
}