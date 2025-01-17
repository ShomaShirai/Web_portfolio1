const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.textContent = p1Score + " WIN!!";
        } 
    }   
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.textContent = p2Score + " WIN!!";
        } 
    } 
})

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})