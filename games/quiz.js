// Computer Science Quiz Game Logic

const quizQuestions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Markup Language", "Hyper Text Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the main function of the ALU?",
        options: ["Data storage", "Perform arithmetic and logic operations", "Control data flow", "Execute instructions"],
        answer: "Perform arithmetic and logic operations"
    }
];

function startQuiz() {
    let score = 0;

    quizQuestions.forEach((q, index) => {
        let userAnswer = prompt(q.question + '\n' + q.options.join('\n'));
        if (userAnswer === q.answer) {
            score++;
            alert('Correct!');
        } else {
            alert('Wrong! The correct answer is: ' + q.answer);
        }
    });

    alert('Your total score is: ' + score + '/' + quizQuestions.length);
}

startQuiz();