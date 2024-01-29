const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const inputEl = document.getElementById('input');
const submitEl = document.getElementById('submit');
const questionEl = document.getElementById('question');

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    if (correctAns === userAns) {
        score++;
        updateLocalstorage();
    } else {
        score--;
        updateLocalstorage();
    }
})

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score));
}




