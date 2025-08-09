// Count questions per topic
const fs = require('fs');
const content = fs.readFileSync('questions.js', 'utf8');

// Extract the quizQuestions object
const match = content.match(/const quizQuestions = ({[\s\S]*?});/);
if (match) {
    const quizQuestionsStr = match[1];
    eval('const quizQuestions = ' + quizQuestionsStr);

    console.log('Current question counts:');
    Object.keys(quizQuestions).forEach(topic => {
        console.log(`${topic}: ${quizQuestions[topic].length} questions`);
    });

    const total = Object.values(quizQuestions).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`Total: ${total} questions`);
} else {
    console.log('Could not parse questions.js');
}
