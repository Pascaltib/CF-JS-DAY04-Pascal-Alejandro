class Quiz {
    question;
    answer1;
    answer2;
    answer3;
    correctAnswer;
    constructor(questionText, firstAnswer, secondAnswer, thirdAnswer, rightAnswer) {
        this.question = questionText;
        this.answer1 = firstAnswer;
        this.answer2 = secondAnswer;
        this.answer3 = thirdAnswer;
        this.correctAnswer = rightAnswer;
    }
}
var i = 0;
var arr = [];



function submitQuiz() {
    var quiz1 = new Quiz("", "", "", "", "");
    quiz1.question = document.getElementById('query').value;
    quiz1.answer1 = document.getElementById('answer1').value;
    quiz1.answer2 = document.getElementById('answer2').value;
    quiz1.answer3 = document.getElementById('answer3').value;
    quiz1.correctAnswer = document.getElementById('correct').value;
    arr.push(quiz1);
}


//part that fills section 2
document.getElementById('send').addEventListener('click',
    function () {
        submitQuiz();
        i++;
    }, false);


function randomQuestion() {
    var x = Math.floor(Math.random() * arr.length);
    document.getElementById('qSection2').innerHTML = arr[x].question;
    document.getElementById('a1Section2').innerHTML = arr[x].answer1;
    document.getElementById('a2Section2').innerHTML = arr[x].answer2;
    document.getElementById('a3Section2').innerHTML = arr[x].answer3;
    document.getElementById('a4Section2').innerHTML = arr[x].correctAnswer;
    console.log(x);
}
document.getElementById('random').addEventListener('click', randomQuestion, false);