const gameForm = document.querySelector("#game-form");
const gameMaxInput = document.querySelector("h2 input");
const gameGuessInput = document.querySelector("h3 input");
const gameResult = document.querySelector("#game-result");
const gameStatus = document.querySelector("#game-status");

// play 버튼을 클릭하여 게임 결과 알려주기
function onPlaySubmit(event){
    //기본동작 정지.
    event.preventDefault();
    
    const maxNum = parseInt(gameMaxInput.value, 10);
    // machine number가 선택한 숫자의 범위에 0도 포함시켜야 함.
    const randomNum = Math.floor(Math.random() * (parseInt(gameMaxInput.value, 10)+1));
    const guessNum = parseInt(gameGuessInput.value, 10);
    
    // 숫자가 아닌 문자를 입력했을때,
    if(isNaN(randomNum) || isNaN(guessNum)){
        alert("Please write only number.");
    
    // 음수를 입력했을때, 
    } else if(guessNum < 0 || maxNum < 0){
        alert("Don't insert negative number.");
    
    //  guess number가 게임 범위를 벗어났을때,
    } else if(guessNum > maxNum){
        alert("You never win this game. Your guess number is out of range.");
    
    // 결과 출력 (Print result)
    } else {
        gameStatus.innerText = `😉You chose: ${guessNum}, 📟the machine chose: ${randomNum}.`;
        // 값을 비교하여 승패 결정하기(조건문)
        if(guessNum !== randomNum){
            gameResult.innerText = `You lost!`;
        } else {
            gameResult.innerText = `You won!🎉`;
        }
    }
}

gameForm.addEventListener("submit", onPlaySubmit);