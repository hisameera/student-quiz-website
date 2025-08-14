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
        document.querySelectorAll('.subject-card').forEach(card => {
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
        const topicCards = document.querySelectorAll('.subject-card');

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

        // Save to Firebase if user is logged in
        if (window.firebaseAuth && window.firebaseAuth.user) {
            console.log('Saving quiz result to Firebase...');
            window.firebaseAuth.saveQuizResult(
                this.currentTopic,
                this.score,
                this.questions.length,
                this.userAnswers
            );
        }

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
    const cards = document.querySelectorAll('.subject-card');
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

// Social Sharing Functions for Enhanced Traffic
function shareQuiz(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("🧠 Test your knowledge with Quiz Master India! 600+ Indian context questions for students. Free and fun! 🇮🇳");

    const shareUrls = {
        whatsapp: `https://wa.me/?text=${text}%20${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        telegram: `https://t.me/share/url?url=${url}&text=${text}`
    };

    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');

        // Track sharing in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: platform,
                content_type: 'quiz',
                content_id: 'quiz_master_india'
            });
        }

        // Show success toast
        showToast(`Shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}! 🎉`);
    }
}

// Enhanced Analytics Tracking
function trackQuizStart(topic) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_started', {
            event_category: 'engagement',
            event_label: topic,
            custom_parameter_1: 'topic_selection'
        });
    }
}

function trackQuizComplete(topic, score, totalQuestions) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_completed', {
            event_category: 'engagement',
            event_label: topic,
            value: score,
            custom_parameter_1: 'completion_rate',
            custom_parameter_2: Math.round((score / totalQuestions) * 100)
        });
    }
}

function trackQuestionAnswer(questionIndex, isCorrect, timeTaken) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'question_answered', {
            event_category: 'interaction',
            event_label: isCorrect ? 'correct' : 'incorrect',
            value: questionIndex + 1,
            custom_parameter_1: 'time_taken',
            custom_parameter_2: timeTaken
        });
    }
}

// Toast Notification System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Performance Monitoring
function trackPageLoad() {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                event_category: 'performance',
                value: Math.round(loadTime),
                custom_parameter_1: 'load_time_ms'
            });
        }
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function () {
    trackPageLoad();

    // Add enhanced click tracking to topic cards
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', function () {
            const topic = this.dataset.topic;
            trackQuizStart(topic);
        });
    });
});

// Firebase Configuration and Authentication System
class FirebaseAuth {
    constructor() {
        this.user = null;
        this.initializeFirebase();
        this.initializeAuthListeners();
    }

    initializeFirebase() {
        try {
            console.log('Initializing Firebase...');
            // Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyBCjR-cUIjbJ5uGnoX3UN8r8luxHCU9VOU",
                authDomain: "quiz-master-india-b9c9b.firebaseapp.com",
                projectId: "quiz-master-india-b9c9b",
                storageBucket: "quiz-master-india-b9c9b.firebasestorage.app",
                messagingSenderId: "921781979213",
                appId: "1:921781979213:web:a49c9e3337ee327022b404",
                measurementId: "G-5X5DH76NMQ"
            };

            // Initialize Firebase
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
                console.log('Firebase initialized successfully');
            } else {
                console.log('Firebase already initialized');
            }

            this.auth = firebase.auth();
            this.db = firebase.firestore();
            console.log('Firebase services ready');

            // Monitor auth state
            this.auth.onAuthStateChanged((user) => {
                console.log('Auth state changed:', user ? user.displayName : 'No user');
                this.user = user;
                this.updateUI();
                if (user) {
                    this.loadUserProgress();
                }
            });
        } catch (error) {
            console.error('Firebase initialization error:', error);
            alert('Firebase setup error. Please check console for details.');
        }
    }

    initializeAuthListeners() {
        // Login button
        document.getElementById('login-btn').addEventListener('click', () => {
            this.signInWithGoogle();
        });

        // Logout button
        document.getElementById('logout-btn').addEventListener('click', () => {
            this.signOut();
        });
    }

    async signInWithGoogle() {
        try {
            console.log('Attempting Google sign-in...');
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            provider.addScope('profile');

            console.log('Provider configured, showing popup...');
            const result = await this.auth.signInWithPopup(provider);
            console.log('User signed in successfully:', result.user.displayName);

            // Track login event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'login', {
                    method: 'Google',
                    user_id: result.user.uid
                });
            }
        } catch (error) {
            console.error('Detailed sign-in error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);

            // Show specific error messages
            let userMessage = 'Sign in failed. ';
            switch (error.code) {
                case 'auth/popup-blocked':
                    userMessage += 'Please allow popups for this site and try again.';
                    break;
                case 'auth/popup-closed-by-user':
                    userMessage += 'Sign-in was cancelled.';
                    break;
                case 'auth/unauthorized-domain':
                    userMessage += 'Domain not authorized. Please contact support.';
                    break;
                case 'auth/operation-not-allowed':
                    userMessage += 'Google sign-in is not enabled. Please contact support.';
                    break;
                default:
                    userMessage += `Error: ${error.message}`;
            }
            alert(userMessage);
        }
    } async signOut() {
        try {
            await this.auth.signOut();
            console.log('User signed out');

            // Track logout event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'logout', {
                    method: 'Google'
                });
            }
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    updateUI() {
        const userInfo = document.getElementById('user-info');
        const authSection = document.getElementById('auth-section');
        const userDashboard = document.getElementById('user-dashboard');
        const userName = document.getElementById('user-name');

        if (this.user) {
            // User is signed in
            userInfo.style.display = 'block';
            authSection.style.display = 'none';
            userDashboard.style.display = 'block';
            userName.textContent = this.user.displayName || 'User';
        } else {
            // User is signed out
            userInfo.style.display = 'none';
            authSection.style.display = 'block';
            userDashboard.style.display = 'none';
        }
    }

    async saveQuizResult(topic, score, totalQuestions, answers) {
        if (!this.user) {
            console.log('No user logged in, cannot save quiz result');
            return;
        }

        console.log('Saving quiz result:', { topic, score, totalQuestions, userId: this.user.uid });

        try {
            const userRef = this.db.collection('users').doc(this.user.uid);
            const quizRef = userRef.collection('quizResults').doc();

            await quizRef.set({
                topic: topic,
                score: score,
                totalQuestions: totalQuestions,
                percentage: Math.round((score / totalQuestions) * 100),
                answers: answers,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toISOString().split('T')[0]
            });

            console.log('Quiz result saved to Firestore successfully');

            // Update user stats
            await this.updateUserStats(topic, score, totalQuestions);
            console.log('User stats updated successfully');
        } catch (error) {
            console.error('Error saving quiz result:', error);
            console.error('Error details:', error.message);
        }
    }

    async updateUserStats(topic, score, totalQuestions) {
        if (!this.user) return;

        console.log('Updating user stats for:', this.user.uid);

        try {
            const userRef = this.db.collection('users').doc(this.user.uid);
            const userDoc = await userRef.get();

            let stats = {
                totalScore: score,
                quizzesCompleted: 1,
                totalQuestions: totalQuestions,
                topicsPlayed: [topic],
                lastPlayed: firebase.firestore.FieldValue.serverTimestamp(),
                achievements: []
            };

            if (userDoc.exists) {
                console.log('Existing user data found, updating...');
                const existingStats = userDoc.data();
                stats = {
                    totalScore: (existingStats.totalScore || 0) + score,
                    quizzesCompleted: (existingStats.quizzesCompleted || 0) + 1,
                    totalQuestions: (existingStats.totalQuestions || 0) + totalQuestions,
                    topicsPlayed: [...new Set([...(existingStats.topicsPlayed || []), topic])],
                    lastPlayed: firebase.firestore.FieldValue.serverTimestamp(),
                    achievements: existingStats.achievements || []
                };

                console.log('Updated stats:', stats);

                // Check for new achievements
                await this.checkAchievements(stats);
            } else {
                console.log('Creating new user stats');
            }

            await userRef.set(stats, { merge: true });
            console.log('User stats saved to Firestore');

            // Immediately update the dashboard
            this.updateDashboard(stats);
        } catch (error) {
            console.error('Error updating user stats:', error);
            console.error('Error details:', error.message);
        }
    }

    async checkAchievements(stats) {
        const newAchievements = [];

        // First Quiz Achievement
        if (stats.quizzesCompleted === 1 && !stats.achievements.includes('first_quiz')) {
            newAchievements.push('first_quiz');
        }

        // Quiz Master Achievement (10 quizzes)
        if (stats.quizzesCompleted >= 10 && !stats.achievements.includes('quiz_master')) {
            newAchievements.push('quiz_master');
        }

        // Perfect Score Achievement
        if (stats.totalScore > 0 && stats.totalScore / stats.totalQuestions === 1 && !stats.achievements.includes('perfect_score')) {
            newAchievements.push('perfect_score');
        }

        // All Topics Achievement
        if (stats.topicsPlayed.length >= 6 && !stats.achievements.includes('all_topics')) {
            newAchievements.push('all_topics');
        }

        if (newAchievements.length > 0) {
            stats.achievements.push(...newAchievements);
            this.showAchievementNotification(newAchievements);
        }
    }

    showAchievementNotification(achievements) {
        achievements.forEach(achievement => {
            const messages = {
                'first_quiz': '🎉 First Quiz Completed!',
                'quiz_master': '🏆 Quiz Master - 10 Quizzes Completed!',
                'perfect_score': '⭐ Perfect Score Achieved!',
                'all_topics': '🌟 All Topics Mastered!'
            };

            // Simple notification (can be enhanced with a proper notification system)
            alert(messages[achievement] || 'New Achievement Unlocked!');
        });
    }

    async loadUserProgress() {
        if (!this.user) return;

        try {
            const userRef = this.db.collection('users').doc(this.user.uid);
            const userDoc = await userRef.get();

            if (userDoc.exists) {
                const stats = userDoc.data();
                this.updateDashboard(stats);
            }
        } catch (error) {
            console.error('Error loading user progress:', error);
        }
    }

    updateDashboard(stats) {
        // Update dashboard elements
        document.getElementById('total-score').textContent = stats.totalScore || 0;
        document.getElementById('quizzes-completed').textContent = stats.quizzesCompleted || 0;

        const avgScore = stats.totalQuestions > 0 ?
            Math.round((stats.totalScore / stats.totalQuestions) * 100) : 0;
        document.getElementById('average-score').textContent = `${avgScore}%`;

        document.getElementById('current-streak').textContent = stats.quizzesCompleted || 0;

        // Update leaderboard score
        const userLeaderboardScore = document.getElementById('user-leaderboard-score');
        if (userLeaderboardScore) {
            userLeaderboardScore.textContent = `${stats.totalScore || 0} pts`;
        }

        // Update achievements
        this.displayAchievements(stats.achievements || []);

        // Load and update leaderboard
        this.loadLeaderboard();
    }

    displayAchievements(achievements) {
        const achievementsList = document.getElementById('achievements-list');
        if (!achievementsList) return;

        const achievementBadges = {
            'first_quiz': '🎯 First Quiz',
            'quiz_master': '🏆 Quiz Master',
            'perfect_score': '⭐ Perfect Score',
            'all_topics': '🌟 All Topics'
        };

        achievementsList.innerHTML = '';
        achievements.forEach(achievement => {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge earned';
            badge.textContent = achievementBadges[achievement] || achievement;
            achievementsList.appendChild(badge);
        });
    }

    async loadLeaderboard() {
        try {
            // Get top 10 users by total score
            const leaderboardQuery = await this.db.collection('users')
                .orderBy('totalScore', 'desc')
                .limit(10)
                .get();

            const leaderboard = document.getElementById('leaderboard');
            if (!leaderboard) return;

            // Clear existing leaderboard except current user entry
            const currentUserEntry = leaderboard.querySelector('.current-user');
            leaderboard.innerHTML = '';

            let rank = 1;
            let currentUserRank = '-';

            leaderboardQuery.forEach((doc) => {
                const userData = doc.data();
                const isCurrentUser = this.user && doc.id === this.user.uid;

                if (isCurrentUser) {
                    currentUserRank = rank;
                }

                if (rank <= 5) { // Show top 5 in main leaderboard
                    const item = document.createElement('div');
                    item.className = `leaderboard-item ${isCurrentUser ? 'current-user' : ''}`;
                    item.innerHTML = `
                        <span class="rank">${rank}</span>
                        <span class="name">${isCurrentUser ? 'You' : (userData.displayName || 'Anonymous')}</span>
                        <span class="score">${userData.totalScore || 0} pts</span>
                    `;
                    leaderboard.appendChild(item);
                }
                rank++;
            });

            // Add current user at bottom if not in top 5
            if (this.user && currentUserRank > 5) {
                const userStats = await this.db.collection('users').doc(this.user.uid).get();
                if (userStats.exists) {
                    const userData = userStats.data();
                    const item = document.createElement('div');
                    item.className = 'leaderboard-item current-user';
                    item.innerHTML = `
                        <span class="rank">${currentUserRank}</span>
                        <span class="name">You</span>
                        <span class="score">${userData.totalScore || 0} pts</span>
                    `;
                    leaderboard.appendChild(item);
                }
            }

        } catch (error) {
            console.error('Error loading leaderboard:', error);
        }
    }
}

// Demo/Local Storage Fallback System
class DemoAuth {
    constructor() {
        this.user = this.getLocalUser();
        this.initializeDemoListeners();
        this.updateUI();
        if (this.user) {
            this.loadLocalProgress();
        }
    }

    initializeDemoListeners() {
        // Demo login button
        document.getElementById('login-btn').addEventListener('click', () => {
            this.demoLogin();
        });

        // Demo logout button
        document.getElementById('logout-btn').addEventListener('click', () => {
            this.demoLogout();
        });
    }

    demoLogin() {
        const name = prompt('Enter your name for demo mode:') || 'Demo User';
        this.user = {
            uid: 'demo_' + Date.now(),
            displayName: name,
            email: 'demo@example.com'
        };
        localStorage.setItem('demoUser', JSON.stringify(this.user));
        this.updateUI();
        this.loadLocalProgress();
        alert(`Welcome ${name}! You're now in demo mode. Your progress will be saved locally.`);
    }

    demoLogout() {
        this.user = null;
        localStorage.removeItem('demoUser');
        localStorage.removeItem('demoStats');
        this.updateUI();
        alert('Demo session ended. Your progress has been cleared.');
    }

    getLocalUser() {
        const stored = localStorage.getItem('demoUser');
        return stored ? JSON.parse(stored) : null;
    }

    updateUI() {
        const userInfo = document.getElementById('user-info');
        const authSection = document.getElementById('auth-section');
        const userDashboard = document.getElementById('user-dashboard');
        const userName = document.getElementById('user-name');
        const demoBanner = document.getElementById('demo-banner');

        if (this.user) {
            userInfo.style.display = 'block';
            authSection.style.display = 'none';
            userDashboard.style.display = 'block';
            userName.textContent = this.user.displayName;

            // Show demo banner when user is logged in to demo mode
            if (demoBanner) {
                demoBanner.style.display = 'block';
            }
        } else {
            userInfo.style.display = 'none';
            authSection.style.display = 'block';
            userDashboard.style.display = 'none';

            // Hide demo banner when not logged in
            if (demoBanner) {
                demoBanner.style.display = 'none';
            }
        }
    }

    saveQuizResult(topic, score, totalQuestions, answers) {
        if (!this.user) return;

        const stats = this.getLocalStats();

        // Update stats
        stats.totalScore += score;
        stats.quizzesCompleted += 1;
        stats.totalQuestions += totalQuestions;

        if (!stats.topicsPlayed.includes(topic)) {
            stats.topicsPlayed.push(topic);
        }

        // Check achievements
        this.checkLocalAchievements(stats);

        // Save to local storage
        localStorage.setItem('demoStats', JSON.stringify(stats));
        this.updateLocalDashboard(stats);
    }

    getLocalStats() {
        const stored = localStorage.getItem('demoStats');
        return stored ? JSON.parse(stored) : {
            totalScore: 0,
            quizzesCompleted: 0,
            totalQuestions: 0,
            topicsPlayed: [],
            achievements: []
        };
    }

    checkLocalAchievements(stats) {
        const newAchievements = [];

        if (stats.quizzesCompleted === 1 && !stats.achievements.includes('first_quiz')) {
            newAchievements.push('first_quiz');
        }

        if (stats.quizzesCompleted >= 10 && !stats.achievements.includes('quiz_master')) {
            newAchievements.push('quiz_master');
        }

        if (stats.topicsPlayed.length >= 6 && !stats.achievements.includes('all_topics')) {
            newAchievements.push('all_topics');
        }

        if (newAchievements.length > 0) {
            stats.achievements.push(...newAchievements);
            this.showAchievementNotification(newAchievements);
        }
    }

    showAchievementNotification(achievements) {
        achievements.forEach(achievement => {
            const messages = {
                'first_quiz': '🎉 First Quiz Completed!',
                'quiz_master': '🏆 Quiz Master - 10 Quizzes Completed!',
                'perfect_score': '⭐ Perfect Score Achieved!',
                'all_topics': '🌟 All Topics Mastered!'
            };
            alert(messages[achievement] || 'New Achievement Unlocked!');
        });
    }

    loadLocalProgress() {
        const stats = this.getLocalStats();
        this.updateLocalDashboard(stats);
    }

    updateLocalDashboard(stats) {
        document.getElementById('total-score').textContent = stats.totalScore || 0;
        document.getElementById('quizzes-completed').textContent = stats.quizzesCompleted || 0;

        const avgScore = stats.totalQuestions > 0 ?
            Math.round((stats.totalScore / stats.totalQuestions) * 100) : 0;
        document.getElementById('average-score').textContent = `${avgScore}%`;

        document.getElementById('current-streak').textContent = stats.quizzesCompleted || 0;

        const userLeaderboardScore = document.getElementById('user-leaderboard-score');
        if (userLeaderboardScore) {
            userLeaderboardScore.textContent = `${stats.totalScore || 0} pts`;
        }

        this.displayLocalAchievements(stats.achievements || []);
    }

    displayLocalAchievements(achievements) {
        const achievementsList = document.getElementById('achievements-list');
        if (!achievementsList) return;

        const achievementBadges = {
            'first_quiz': '🎯 First Quiz',
            'quiz_master': '🏆 Quiz Master',
            'perfect_score': '⭐ Perfect Score',
            'all_topics': '🌟 All Topics'
        };

        achievementsList.innerHTML = '';
        achievements.forEach(achievement => {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge earned';
            badge.textContent = achievementBadges[achievement] || achievement;
            achievementsList.appendChild(badge);
        });
    }
}

// Initialize Authentication System
document.addEventListener('DOMContentLoaded', () => {
    // Try Firebase first, fallback to demo mode
    if (typeof firebase !== 'undefined' && firebase.apps) {
        try {
            window.firebaseAuth = new FirebaseAuth();
        } catch (error) {
            console.log('Firebase not configured, using demo mode');
            window.firebaseAuth = new DemoAuth();
        }
    } else {
        console.log('Firebase not available, using demo mode');
        window.firebaseAuth = new DemoAuth();
    }
});

// Enhance QuizMaster to work with Firebase
const originalQuizMaster = window.QuizMaster || QuizMaster;
QuizMaster.prototype.completeQuiz = function () {
    this.showResults();

    // Save to Firebase if user is logged in
    if (window.firebaseAuth && window.firebaseAuth.user) {
        window.firebaseAuth.saveQuizResult(
            this.currentTopic,
            this.score,
            this.questions.length,
            this.userAnswers
        );
    }
};

// Utility function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
