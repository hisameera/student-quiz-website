// Optimized Question Loader for Quiz Master
class QuestionLoader {
    constructor() {
        this.loadedTopics = new Map();
        this.isLoading = false;
        this.cache = new Map();
    }

    // Load questions for a specific topic only when needed
    async loadTopicQuestions(topic) {
        if (this.loadedTopics.has(topic)) {
            return this.loadedTopics.get(topic);
        }

        if (this.isLoading) {
            // Wait for current loading to finish
            await new Promise(resolve => setTimeout(resolve, 100));
            return this.loadTopicQuestions(topic);
        }

        this.isLoading = true;

        try {
            // Show loading state
            this.showLoadingState(topic);

            // Extract questions for this topic from the main array
            const topicQuestions = quizQuestions[topic] || [];

            // Store in memory
            this.loadedTopics.set(topic, topicQuestions);

            // Hide loading state
            this.hideLoadingState();

            return topicQuestions;
        } catch (error) {
            console.error(`Error loading ${topic} questions:`, error);
            this.hideLoadingState();
            return [];
        } finally {
            this.isLoading = false;
        }
    }

    // Get random questions with better performance
    async getRandomQuestions(topic, count = 20) {
        const questions = await this.loadTopicQuestions(topic);

        if (!questions || questions.length === 0) {
            console.error(`No questions found for topic: ${topic}`);
            return [];
        }

        // Use cached shuffled version if available
        const cacheKey = `${topic}_${count}`;
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            // Return cached if not older than 5 minutes
            if (Date.now() - cached.timestamp < 300000) {
                return this.shuffleArray([...cached.questions]);
            }
        }

        // Efficient Fisher-Yates shuffle
        const shuffled = this.shuffleArray([...questions]);
        const selected = shuffled.slice(0, Math.min(count, shuffled.length));

        // Cache the result
        this.cache.set(cacheKey, {
            questions: selected,
            timestamp: Date.now()
        });

        return selected;
    }

    // Optimized Fisher-Yates shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Preload questions for better UX
    async preloadAllTopics() {
        const topics = ['science', 'math', 'history', 'geography', 'english', 'general'];
        const preloadPromises = topics.map(topic => this.loadTopicQuestions(topic));

        try {
            await Promise.all(preloadPromises);
            console.log('All question topics preloaded successfully');
        } catch (error) {
            console.warn('Some topics failed to preload:', error);
        }
    }

    // Show loading indicator
    showLoadingState(topic) {
        const topicCards = document.querySelectorAll('.topic-card');
        topicCards.forEach(card => {
            if (card.dataset.topic === topic) {
                card.classList.add('loading');
                const existingLoader = card.querySelector('.loading-spinner');
                if (!existingLoader) {
                    const spinner = document.createElement('div');
                    spinner.className = 'loading-spinner';
                    spinner.innerHTML = '<div class="spinner"></div>';
                    card.appendChild(spinner);
                }
            }
        });
    }

    // Hide loading indicator
    hideLoadingState() {
        const spinners = document.querySelectorAll('.loading-spinner');
        spinners.forEach(spinner => spinner.remove());

        const loadingCards = document.querySelectorAll('.topic-card.loading');
        loadingCards.forEach(card => card.classList.remove('loading'));
    }

    // Get topic statistics efficiently
    getTopicStats() {
        const stats = {};
        const topics = ['science', 'math', 'history', 'geography', 'english', 'general'];

        topics.forEach(topic => {
            const questions = quizQuestions[topic] || [];
            stats[topic] = {
                totalQuestions: questions.length,
                availableForQuiz: Math.min(20, questions.length),
                isLoaded: this.loadedTopics.has(topic)
            };
        });

        return stats;
    }

    // Clear cache to free memory
    clearCache() {
        this.cache.clear();
        console.log('Question cache cleared');
    }

    // Memory management
    freeUnusedTopics() {
        // Keep only the last 2 accessed topics in memory
        if (this.loadedTopics.size > 2) {
            const entries = Array.from(this.loadedTopics.entries());
            // Remove oldest entries
            for (let i = 0; i < entries.length - 2; i++) {
                this.loadedTopics.delete(entries[i][0]);
            }
        }
    }
}

// Initialize optimized loader
const questionLoader = new QuestionLoader();

// Backward compatibility - replace the original function
async function getRandomQuestions(topic, count = 20) {
    return await questionLoader.getRandomQuestions(topic, count);
}

// Enhanced stats function
function getTopicStats() {
    return questionLoader.getTopicStats();
}
