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


var quiz1 = new Quiz("","","","","");

function submitQuiz(quiz) {
    quiz.question = document.getElementById('query').value;
    quiz.answer1 = document.getElementById('answer1').value;
    quiz.answer2 = document.getElementById('answer2').value;
    quiz.answer3 = document.getElementById('answer3').value;
    quiz.correctAnswer = document.getElementById('correct').value;
    return quiz;
}

document.getElementById('send').addEventListener('click', 
function(){submitQuiz(quiz1); 
document.getElementById('qSection2').innerHTML=quiz1.question;
document.getElementById('a1Section2').innerHTML=quiz1.answer1;
document.getElementById('a2Section2').innerHTML=quiz1.answer2;
document.getElementById('a3Section2').innerHTML=quiz1.answer3;
document.getElementById('a4Section2').innerHTML=quiz1.correctAnswer;
}, false);

