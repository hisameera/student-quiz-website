// Quiz Master - Main JavaScript File
class QuizMaster {
    constructor() {
        this.currentTopic = '';
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timeLeft = 45;
        this.timer = null;
        this.isAnswerSelected = false;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Topic selection
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const topic = e.currentTarget.dataset.topic;
                console.log('Selected topic:', topic);
                this.startQuiz(topic);
            });
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results buttons
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        document.getElementById('review-btn').addEventListener('click', () => {
            this.showReview();
        });

        document.getElementById('back-to-results').addEventListener('click', () => {
            this.showResults();
        });

        // Initialize question statistics display
        this.displayQuestionStats();
    }

    displayQuestionStats() {
        const stats = getTopicStats();
        const topicCards = document.querySelectorAll('.topic-card');

        topicCards.forEach(card => {
            const topic = card.dataset.topic;
            const stat = stats[topic];
            if (stat) {
                // Add question count info to each topic card
                const existingInfo = card.querySelector('.question-count');
                if (!existingInfo) {
                    const questionInfo = document.createElement('div');
                    questionInfo.className = 'question-count';
                    questionInfo.innerHTML = `<small>${stat.totalQuestions} questions available</small>`;
                    card.appendChild(questionInfo);
                }
            }
        });
    }

    async startQuiz(topic) {
        console.log('Starting quiz for topic:', topic);
        this.currentTopic = topic;

        // Show quiz screen first
        this.showScreen('quiz-screen');

        // Show loading state in the question area
        document.getElementById('question').innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>Loading ${topic.charAt(0).toUpperCase() + topic.slice(1)} questions...</p>
            </div>
        `;
        document.getElementById('answers').innerHTML = '';

        try {
            // Use optimized question loader
            console.log('Getting random questions for:', topic);
            this.questions = await getRandomQuestions(topic, 20);
            console.log('Received questions:', this.questions.length);

            if (!this.questions || this.questions.length === 0) {
                console.error('No questions received');
                alert('Sorry, questions for this topic are not available right now. Please try another topic.');
                this.showScreen('welcome-screen');
                return;
            }

            this.currentQuestionIndex = 0;
            this.score = 0;
            this.userAnswers = [];

            this.loadQuestion();
        } catch (error) {
            console.error('Error starting quiz:', error);
            alert('Sorry, there was an error loading the quiz. Please try again.');
            this.showScreen('welcome-screen');
        }
    } loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const progressElement = document.getElementById('progress-fill');
        const progressTextElement = document.getElementById('progress-text');
        const nextBtn = document.getElementById('next-btn');

        // Update progress
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        progressElement.style.width = `${progressPercentage}%`;
        progressTextElement.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;

        // Load question
        questionElement.textContent = question.question;

        // Clear previous answers
        answersElement.innerHTML = '';
        this.isAnswerSelected = false;
        nextBtn.disabled = true;

        // Create answer options
        question.options.forEach((option, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <span>${option}</span>
            `;

            answerDiv.addEventListener('click', () => {
                this.selectAnswer(index);
            });

            answersElement.appendChild(answerDiv);
        });

        // Start timer
        this.startTimer();
    }

    selectAnswer(selectedIndex) {
        if (this.isAnswerSelected) return;

        const answerOptions = document.querySelectorAll('.answer-option');
        const question = this.questions[this.currentQuestionIndex];

        // Mark answer as selected
        this.isAnswerSelected = true;
        this.stopTimer();

        // Store user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            userAnswer: selectedIndex,
            correctAnswer: question.correct,
            isCorrect: selectedIndex === question.correct
        });

        // Update score
        if (selectedIndex === question.correct) {
            this.score++;
        }

        // Show correct/incorrect answers
        answerOptions.forEach((option, index) => {
            option.classList.add('disabled');

            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== question.correct) {
                option.classList.add('incorrect');
            }
        });

        // Enable next button
        document.getElementById('next-btn').disabled = false;

        // Add a small delay for visual feedback
        setTimeout(() => {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                document.getElementById('next-btn').innerHTML =
                    'Show Results <i class="fas fa-flag-checkered"></i>';
            }
        }, 1000);
    }

    startTimer() {
        this.timeLeft = 45;
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        const timerFillElement = document.getElementById('timer-fill');

        timerElement.textContent = this.timeLeft;

        const percentage = (this.timeLeft / 45) * 100;
        timerFillElement.style.width = `${percentage}%`;

        // Change color based on time left
        if (this.timeLeft <= 10) {
            timerElement.style.color = '#ff4444';
            timerFillElement.style.background = 'linear-gradient(90deg, #ff4444, #ff6666)';
        } else if (this.timeLeft <= 20) {
            timerElement.style.color = '#ff8800';
            timerFillElement.style.background = 'linear-gradient(90deg, #ff8800, #ffaa00)';
        } else {
            timerElement.style.color = '#FF6B35';
            timerFillElement.style.background = 'linear-gradient(90deg, #FF6B35, #F7931E)';
        }
    }

    timeUp() {
        if (this.isAnswerSelected) return;

        this.stopTimer();
        this.isAnswerSelected = true;

        // Mark as incorrect (no answer selected)
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            userAnswer: -1, // No answer
            correctAnswer: this.questions[this.currentQuestionIndex].correct,
            isCorrect: false
        });

        // Show correct answer
        const answerOptions = document.querySelectorAll('.answer-option');
        const correctIndex = this.questions[this.currentQuestionIndex].correct;

        answerOptions.forEach((option, index) => {
            option.classList.add('disabled');
            if (index === correctIndex) {
                option.classList.add('correct');
            }
        });

        // Enable next button
        document.getElementById('next-btn').disabled = false;

        // Show time up message
        this.showTimeUpMessage();
    }

    showTimeUpMessage() {
        const timerElement = document.getElementById('timer');
        const originalText = timerElement.textContent;
        timerElement.textContent = "Time's up!";
        timerElement.style.color = '#ff4444';

        setTimeout(() => {
            timerElement.textContent = '0';
        }, 2000);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.stopTimer();

        const scoreElement = document.getElementById('final-score');
        const percentageElement = document.getElementById('score-percentage');
        const correctCountElement = document.getElementById('correct-count');
        const incorrectCountElement = document.getElementById('incorrect-count');
        const performanceMessageElement = document.getElementById('performance-message');

        // Calculate results
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const incorrect = this.questions.length - this.score;

        // Update display
        scoreElement.textContent = this.score;
        percentageElement.textContent = `${percentage}%`;
        correctCountElement.textContent = this.score;
        incorrectCountElement.textContent = incorrect;

        // Performance message
        const performanceMessage = this.getPerformanceMessage(percentage);
        performanceMessageElement.innerHTML = `
            <h3>${performanceMessage.title}</h3>
            <p>${performanceMessage.message}</p>
        `;

        // Animate score
        this.animateScore();

        this.showScreen('results-screen');
    }

    getPerformanceMessage(percentage) {
        if (percentage >= 90) {
            return {
                title: "🌟 Outstanding! 🌟",
                message: "You're a true quiz master! Your knowledge is impressive and you should be very proud of yourself!"
            };
        } else if (percentage >= 80) {
            return {
                title: "🎉 Excellent Work! 🎉",
                message: "Great job! You really know your stuff. Keep up the fantastic learning!"
            };
        } else if (percentage >= 70) {
            return {
                title: "👍 Well Done! 👍",
                message: "Good work! You're on the right track. A little more practice and you'll be amazing!"
            };
        } else if (percentage >= 60) {
            return {
                title: "📚 Keep Learning! 📚",
                message: "You're making progress! Don't give up - every expert was once a beginner!"
            };
        } else {
            return {
                title: "🌱 Keep Growing! 🌱",
                message: "Learning is a journey! Every question teaches you something new. Try again and watch yourself improve!"
            };
        }
    }

    animateScore() {
        const scoreElement = document.getElementById('final-score');
        const targetScore = this.score;
        let currentScore = 0;

        const increment = Math.ceil(targetScore / 20);
        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(timer);
            }
            scoreElement.textContent = currentScore;
        }, 100);
    }

    showReview() {
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';

        this.userAnswers.forEach((answer, index) => {
            const question = this.questions[answer.questionIndex];
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';

            const userAnswerText = answer.userAnswer === -1 ?
                'No answer (Time up)' :
                question.options[answer.userAnswer];

            reviewItem.innerHTML = `
                <div class="review-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="review-answers">
                    <div class="review-option ${answer.isCorrect ? 'user-correct' : 'user-answer'}">
                        <strong>Your answer:</strong> ${userAnswerText}
                    </div>
                    ${!answer.isCorrect ? `
                        <div class="review-option correct-answer">
                            <strong>Correct answer:</strong> ${question.options[answer.correctAnswer]}
                        </div>
                    ` : ''}
                </div>
            `;

            reviewContent.appendChild(reviewItem);
        });

        this.showScreen('review-screen');
    }

    restartQuiz() {
        this.showScreen('welcome-screen');

        // Reset next button text
        document.getElementById('next-btn').innerHTML =
            'Next Question <i class="fas fa-arrow-right"></i>';
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizMaster();
});

// Add some fun animations
document.addEventListener('DOMContentLoaded', () => {
    // Add floating animation to topic cards
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
