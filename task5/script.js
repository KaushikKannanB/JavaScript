let quiz = [];
let score = 0;
let selectedAnswer = {};
let wrongansweredqns = [];
let currentquestionindex = 0;
async function quizData(){
    const response = await fetch("quiz.json");
    quiz = await response.json();
    questionPop();
}
function questionPop(){
    const question = document.getElementById("question");
    const options = document.getElementById("options");

    question.textContent = quiz[currentquestionindex].question;

    options.innerHTML = "";

    quiz[currentquestionindex].option.forEach(opt => {
        const button = document.createElement("button");
        button.textContent = opt;
        button.classList.add("show");

        if(selectedAnswer[currentquestionindex] === opt)
        {
            button.classList.add("selected");
        }
        button.onclick = function() {
            selectedAnswer[currentquestionindex] = opt;
            document.querySelectorAll("#options button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        };
        
        options.appendChild(button);
    });

}
function backQuestion(){
    if (currentquestionindex > 0) {
        currentquestionindex--;
        questionPop();
    }
}
function nextQuestion(){
    if(selectedAnswer[currentquestionindex]=== quiz[currentquestionindex].answer){
        score++;
    }
    else
    {
        wrongansweredqns.push(currentquestionindex);
    }
    currentquestionindex++;

    if(currentquestionindex<quiz.length)
    {
        questionPop();
    }
    else
    {
        const submitbtn = document.getElementById("submit");
        submitbtn.classList.add("showbtn");
    }
}
function submitAnswers(){
    const container = document.getElementById("contquiz");
    container.innerHTML="";

    const results = document.createElement("div");
    results.classList.add("resultsshow");
    console.log(score);
    results.innerHTML = `<h2>Quiz Results</h2><p>Your score: <span id='score'>${score}/${quiz.length}</span></p>`
    container.appendChild(results);

    const explanations = document.createElement("div");
    explanations.classList.add("resultsshow");
    explanations.innerHTML = "";

    wrongansweredqns.forEach(wrong =>{
        const ele = document.createElement("div");
        ele.innerHTML = `<h5>You made a wrong answer in question: ${quiz[wrong].question}</h5><p>And here is your explanation: ${quiz[wrong].explanation}</p>`
        ele.classList.add("explanationsshow");
        container.appendChild(ele);
    })
}
quizData();