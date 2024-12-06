const wordBank = {
    animals: { cat: "貓", dog: "狗", elephant: "大象", tiger: "老虎", lion: "獅子" },
    colors: { red: "紅色", blue: "藍色", green: "綠色", yellow: "黃色", black: "黑色" },
    household: { chair: "椅子", table: "桌子", lamp: "燈", sofa: "沙發", bed: "床" }
};

let currentQuiz = [];
function startQuiz() {
    const category = document.getElementById("category").value;
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = '';
    currentQuiz = Object.entries(wordBank[category]).sort(() => 0.5 - Math.random()).slice(0, 5);
    
    currentQuiz.forEach(([word], index) => {
        questionsDiv.innerHTML += `
            <div>
                <label>${word}</label>
                <input type="text" id="answer-${index}">
            </div>
        `;
    });
    
    document.getElementById("quiz").style.display = "block";
}

function submitQuiz() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';
    let score = 0;
    
    currentQuiz.forEach(([word, translation], index) => {
        const answer = document.getElementById(`answer-${index}`).value.trim();
        if (answer === translation) score++;
        resultsDiv.innerHTML += `
            <div>
                Word: ${word}, Your Answer: ${answer}, Correct Answer: ${translation}
            </div>
        `;
    });
    
    resultsDiv.innerHTML += `<h2>Your Score: ${score}/${currentQuiz.length}</h2>`;
    resultsDiv.style.display = "block";
}
