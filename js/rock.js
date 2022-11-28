let paperEl = document.getElementById('paper');
let siccorsEL = document.getElementById('siccors');
let rockEL = document.getElementById('rock');
let mainEl = document.getElementById('Home');
let resultEl = document.getElementById('result');
let scoreEL = document.getElementById('score');
let score = parseInt(scoreEL.textContent)

let playerPickvalue = '';
let housepickedvalue = '';
let picElId = '';
let houPicId = '';
let resultId = '';
let resultId_0 = '';

let valueObject = {
    paperrock: 'won',
    papersiccors: 'loss',
    paperpaper: 'draw',
    rockpaper: 'loss',
    rocksiccors: 'won',
    rockrock: 'draw',
    siccorspaper: 'won',
    siccorsrock: 'loss',
    siccorssiccors: 'draw'
};
let house = ['siccors', 'rock', 'paper', 'siccors', 'rock', 'paper'];

document.getElementById('playagain').addEventListener('click', function() {
    mainEl.classList.remove('d-none');
    resultEl.classList.add('d-none');
    document.getElementById(picElId).classList.add('d-none');
    document.getElementById(houPicId).classList.add('d-none');
    document.getElementById(resultId).classList.add('d-none');
    document.getElementById(resultId_0).classList.add('d-none');
    document.getElementById('playagain').classList.add('d-none');
    document.getElementById('playagain_0').classList.add('d-none');

})
document.getElementById('playagain_0').addEventListener('click', function() {
    mainEl.classList.remove('d-none');
    resultEl.classList.add('d-none');
    document.getElementById(picElId).classList.add('d-none');
    document.getElementById(houPicId).classList.add('d-none');
    document.getElementById(resultId).classList.add('d-none');
    document.getElementById(resultId_0).classList.add('d-none');
    document.getElementById('playagain').classList.add('d-none');
    document.getElementById('playagain_0').classList.add('d-none');

})

function gameResult(playerPickvalue, housepickedvalue) {
    let k = playerPickvalue + housepickedvalue;
    let result = valueObject[k];
    if (result === 'won') {
        document.getElementById('playerwon').classList.remove('d-none');
        document.getElementById('playerwon_0').classList.remove('d-none');
        resultId = 'playerwon';
        resultId_0 = 'playerwon_0';
        score += 1;
        scoreEL.textContent = score;

    } else if (result === 'loss') {
        document.getElementById('playerloss').classList.remove('d-none');
        document.getElementById('playerloss_0').classList.remove('d-none');
        resultId = 'playerloss';
        resultId_0 = 'playerloss_0';
    } else {
        document.getElementById('playerdraw').classList.remove('d-none');
        document.getElementById('playerdraw_0').classList.remove('d-none');
        resultId = 'playerdraw';
        resultId_0 = 'playerdraw_0';
    }
    
        document.getElementById('playagain').classList.remove('d-none');
        document.getElementById('playagain_0').classList.remove('d-none');
    
}

function playerPick(value) {

    playerPickvalue = value;
    mainEl.classList.add('d-none');
    resultEl.classList.remove('d-none');
    switch (playerPickvalue) {
        case 'paper':
            document.getElementById('paper_0').classList.remove('d-none');
            picElId = 'paper_0';
            break;
        case 'siccors':
            document.getElementById('siccors_0').classList.remove('d-none');
            picElId = 'siccors_0';
            break;
        case 'rock':
            document.getElementById('rock_0').classList.remove('d-none');
            picElId = 'rock_0';
            break;
    }

    setTimeout(() => {
        let randomnum = Math.ceil(Math.random() * 5);
        housepickedvalue = house[randomnum];
        document.getElementById('dummy').classList.add('d-none');
        switch (housepickedvalue) {
            case 'paper':
                document.getElementById('paper_1').classList.remove('d-none');
                houPicId = 'paper_1';
                break;
            case 'siccors':
                document.getElementById('siccors_1').classList.remove('d-none');
                houPicId = 'siccors_1';
                break;
            case 'rock':
                document.getElementById('rock_1').classList.remove('d-none');
                houPicId = 'rock_1';
                break;
        }
        setTimeout(()=>{gameResult(playerPickvalue, housepickedvalue);},500)
        
    }, 500);
    
    document.getElementById('dummy').classList.remove('d-none');
}


siccorsEL.addEventListener('click', function() {
    playerPick('siccors');

});
paperEl.addEventListener('click', function() {
    playerPick('paper');
});
rockEL.addEventListener('click', function() {
    playerPick('rock');
});