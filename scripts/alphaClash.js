function getARandomAlphabet() {
    const alphaString = "qwertyuiopasdfghjklzxcvbnm"
    const alphas = alphaString.split('');
    const index = Math.round(Math.random() * 25);
    const alpha = alphas[index];
    return alpha;
}

function changeColor(elementId) {
    const alphabate = document.getElementById(elementId);
    alphabate.classList.add("bg-orange-400");
}
function removeColorId(elementId) {
    const alphabate = document.getElementById(elementId);
    alphabate.classList.remove("bg-orange-400");
}


function gameLoop() {
    const alphabet = getARandomAlphabet();
    const OldAlpha = document.getElementById("current-alphabet");
    const currentAlpha = OldAlpha.innerText = alphabet;
    console.log(currentAlpha);
    changeColor(currentAlpha);
}


document.getElementById("play-btn").addEventListener('click', function () {
    hideElementById("home-screen");
    showElementById("play-ground");
    gameLoop();
})
function scoreChange() {
    let currentScoreElement = document.getElementById("score-change");
    let currentScoreValueinText = currentScoreElement.innerText;
    let currentScore = parseInt(currentScoreValueinText);
    console.log(currentScore);
    currentScore = currentScore + 1;
    currentScoreElement.innerText = currentScore;
}

function remLife(){
    let currentLifeElement = document.getElementById("rem-life").innerText;
    let currentLife = parseInt(currentLifeElement);
    currentLife = currentLife - 1 ;
     document.getElementById("rem-life").innerText = currentLife ;
     if(currentLife === 0){
        hideElementById("play-ground");
        showElementById("result-section");
        document.getElementById("result-score").innerText = document.getElementById("score-change").innerText;
    }
}
document.getElementById("play-again-btn").addEventListener("click",function(){
    hideElementById("result-section");
    document.getElementById("rem-life").innerText = 5 ;
    document.getElementById("score-change").innerText = 0 ;

    showElementById("play-ground");
})


document.addEventListener('keyup', function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    const currentAlphaElement = document.getElementById("current-alphabet");
    const currentAlphabate = currentAlphaElement.innerText;
    const expectedAlphabate = currentAlphabate.toLowerCase();
    if (playerPressed === expectedAlphabate) {
        scoreChange();
        removeColorId(playerPressed);
        gameLoop();
    }
    else if(playerPressed == 'Escape'){
        hideElementById("play-ground");
        showElementById("result-section");
        document.getElementById("result-score").innerText = document.getElementById("score-change").innerText;
    }
    else {
        remLife();
    }
})