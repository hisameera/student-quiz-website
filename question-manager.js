// Question Management Utility for Quiz Master

class QuestionManager {
    constructor() {
        this.topics = ['science', 'math', 'history', 'geography', 'english', 'general'];
    }

    // Get comprehensive statistics about all questions
    getDetailedStats() {
        const stats = {};
        let totalQuestions = 0;

        this.topics.forEach(topic => {
            const questions = quizQuestions[topic] || [];
            stats[topic] = {
                count: questions.length,
                canMakeFullQuiz: questions.length >= 20,
                possibleUniqueQuizzes: Math.floor(questions.length / 20),
                percentageOverlap: questions.length >= 20 ?
                    Math.round(((20 / questions.length) * 100)) : 100
            };
            totalQuestions += questions.length;
        });

        stats.overall = {
            totalQuestions,
            averagePerTopic: Math.round(totalQuestions / this.topics.length),
            topicsWithFullQuiz: Object.values(stats).filter(s => s.canMakeFullQuiz).length - 1 // -1 for overall
        };

        return stats;
    }

    // Analyze question variety for a topic
    analyzeTopicVariety(topic) {
        const questions = quizQuestions[topic] || [];
        const analysis = {
            totalQuestions: questions.length,
            uniqueQuizzes: Math.floor(questions.length / 20),
            repeatability: {
                excellent: questions.length >= 50, // Very low chance of repeats
                good: questions.length >= 35,      // Some variety
                fair: questions.length >= 25,      // Moderate variety  
                poor: questions.length < 25        // High chance of repeats
            }
        };

        if (questions.length >= 50) {
            analysis.variety = 'Excellent - Very low chance of repeat questions';
        } else if (questions.length >= 35) {
            analysis.variety = 'Good - Some variety on retakes';
        } else if (questions.length >= 25) {
            analysis.variety = 'Fair - Moderate variety on retakes';
        } else {
            analysis.variety = 'Poor - High chance of seeing same questions';
        }

        return analysis;
    }

    // Generate a question template for easy addition
    generateQuestionTemplate(topic = 'general') {
        return {
            question: "Your question text here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0, // Index of correct answer (0-3)
            difficulty: "medium", // easy, medium, hard
            category: topic,
            explanation: "Optional: Why this is the correct answer"
        };
    }

    // Validate a question object
    validateQuestion(questionObj) {
        const errors = [];

        if (!questionObj.question || typeof questionObj.question !== 'string') {
            errors.push('Question text is required and must be a string');
        }

        if (!Array.isArray(questionObj.options) || questionObj.options.length !== 4) {
            errors.push('Must have exactly 4 options in an array');
        }

        if (typeof questionObj.correct !== 'number' || questionObj.correct < 0 || questionObj.correct > 3) {
            errors.push('Correct answer must be a number between 0-3');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // Test question uniqueness within a topic
    checkDuplicates(topic) {
        const questions = quizQuestions[topic] || [];
        const duplicates = [];

        for (let i = 0; i < questions.length; i++) {
            for (let j = i + 1; j < questions.length; j++) {
                if (questions[i].question.toLowerCase() === questions[j].question.toLowerCase()) {
                    duplicates.push({
                        question: questions[i].question,
                        indices: [i, j]
                    });
                }
            }
        }

        return duplicates;
    }

    // Get recommendations for improving question variety
    getImprovementRecommendations() {
        const stats = this.getDetailedStats();
        const recommendations = [];

        this.topics.forEach(topic => {
            const topicStats = stats[topic];

            if (topicStats.count < 20) {
                recommendations.push({
                    topic,
                    priority: 'HIGH',
                    message: `Add ${20 - topicStats.count} more questions to enable full quizzes`
                });
            } else if (topicStats.count < 30) {
                recommendations.push({
                    topic,
                    priority: 'MEDIUM',
                    message: `Add ${30 - topicStats.count} more questions to reduce repeats`
                });
            } else if (topicStats.count < 50) {
                recommendations.push({
                    topic,
                    priority: 'LOW',
                    message: `Add ${50 - topicStats.count} more questions for excellent variety`
                });
            }
        });

        return recommendations;
    }

    // Generate a report for the developer
    generateDeveloperReport() {
        const stats = this.getDetailedStats();
        const recommendations = this.getImprovementRecommendations();

        console.log('=== QUIZ MASTER QUESTION DATABASE REPORT ===\n');

        console.log('📊 OVERALL STATISTICS:');
        console.log(`Total Questions: ${stats.overall.totalQuestions}`);
        console.log(`Average per Topic: ${stats.overall.averagePerTopic}`);
        console.log(`Topics with Full Quiz Capability: ${stats.overall.topicsWithFullQuiz}/6\n`);

        console.log('📋 TOPIC BREAKDOWN:');
        this.topics.forEach(topic => {
            const topicStats = stats[topic];
            const variety = this.analyzeTopicVariety(topic);
            console.log(`${topic.toUpperCase()}:`);
            console.log(`  Questions: ${topicStats.count}`);
            console.log(`  Variety: ${variety.variety}`);
            console.log(`  Unique Full Quizzes: ${topicStats.possibleUniqueQuizzes}`);
            console.log('');
        });

        if (recommendations.length > 0) {
            console.log('🎯 RECOMMENDATIONS:');
            recommendations.forEach(rec => {
                console.log(`${rec.priority}: ${rec.topic} - ${rec.message}`);
            });
        } else {
            console.log('✅ All topics have excellent question variety!');
        }

        return {
            stats,
            recommendations,
            summary: `${stats.overall.totalQuestions} total questions across ${this.topics.length} topics`
        };
    }
}

// Utility functions for easy question management
function addQuestionsToTopic(topic, questionsArray) {
    if (!quizQuestions[topic]) {
        console.error(`Topic '${topic}' does not exist`);
        return false;
    }

    const manager = new QuestionManager();
    const validQuestions = [];
    const errors = [];

    questionsArray.forEach((q, index) => {
        const validation = manager.validateQuestion(q);
        if (validation.isValid) {
            validQuestions.push(q);
        } else {
            errors.push(`Question ${index + 1}: ${validation.errors.join(', ')}`);
        }
    });

    if (errors.length > 0) {
        console.error('Validation errors:', errors);
        return false;
    }

    quizQuestions[topic].push(...validQuestions);
    console.log(`✅ Added ${validQuestions.length} questions to ${topic}`);
    return true;
}

// Initialize question manager for console use
const questionManager = new QuestionManager();

// For testing in browser console:
// questionManager.generateDeveloperReport();
