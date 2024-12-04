const questions = [
    {
        question: "Ai là người sáng lập Microsoft?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Elon Musk", correct: false },
            { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "Thủ đô của Nhật Bản là gì?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Nagoya", correct: false }
        ]
    },
    {
        question: "Ai là tác giả của 'Harry Potter'?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "Stephen King", correct: false },
            { text: "George R.R. Martin", correct: false }
        ]
    },
    {
        question: "Nước nào lớn nhất thế giới?",
        answers: [
            { text: "Trung Quốc", correct: false },
            { text: "Canada", correct: false },
            { text: "Nga", correct: true },
            { text: "Mỹ", correct: false }
        ]
    },
    {
        question: "Ai là người đầu tiên lên mặt trăng?",
        answers: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startGame() {
    currentQuestionIndex = 0;
    nextButton.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.sort(() => Math.random() - 0.5);
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    if (answer.correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.classList.add(btn.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text ? 'correct' : 'wrong');
        btn.disabled = true;
    });
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        alert("Chúc mừng! Bạn đã hoàn thành trò chơi!");
        startGame();
    }
});

startGame();
