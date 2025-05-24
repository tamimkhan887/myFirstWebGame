function getARandomAlphabet(){
    const alphaString = "qwertyuiopasdfghjklzxcvbnm"
    const alphas = alphaString.split('');
    const index = Math.round(Math.random()*25);
    const alpha = alphas[index];
    return alpha;
}

function changeColor(elementId){
    const alphabate = document.getElementById(elementId);
    alphabate.classList.add("bg-orange-400");
}

function gameLoop(){
    const alphabet = getARandomAlphabet();
    const OldAlpha = document.getElementById("current-alphabet");
    const currentAlpha = OldAlpha.innerText = alphabet ;
    console.log(currentAlpha);
    changeColor(currentAlpha);
}


document.getElementById("play-btn").addEventListener('click' , function(){
    hideElementById("home-screen");
    showElementById("play-ground");
    gameLoop();
})