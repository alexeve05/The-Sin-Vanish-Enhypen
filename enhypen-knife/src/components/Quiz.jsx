import { useEffect, useState } from "react";
function Quiz() {
    const questions = [
        {
            question: "Someone betrays your trust. What do you do?",
            answerOptions: [
                { text: "Disappear without saying anything", song: "Lost Island" },
                { text: "Confront them immediately", song: "Knife" },
                { text: "Pretend nothing happened", song: "Sleep Tight" },
                { text: "Get the last word", song: "Stealer" },
                { text: "Accept it and move on", song: "Big Girls Don't Cry" },
                { text: "Seek revenge", song: "No Way Back" },
            ],
        },
        {
            question: "Choose your favorite color.",
            answerOptions: [
                { text: "Black", song: "Knife" },
                { text: "White", song: "Sleep Tight" },
                { text: "Purple", song: "Stealer" },
                { text: "Blue", song: "Lost Island" },
                { text: "Red", song: "No Way Back" },
                { text: "Green", song: "Big Girls Don't Cry" },
            ],
        },
        {
            question: "In a group setting, your energy is...",
            answerOptions: [
                { text: "Quiet", song: "Lost Island" },
                { text: "Loud", song: "Knife" },
                { text: "Flirty", song: "No Way Back" },
                { text: "Observant", song: "Sleep Tight" },
                { text: "Grounding", song: "Big Girls Don't Cry" },
                { text: "Unserious", song: "Stealer" },
            ],
        },
        {
            question: "Your biggest weakness is...",
            answerOptions: [
                { text: "You don't take things seriously.", song: "No Way Back" },
                { text: "You isolate yourself when overwhelmed.", song: "Lost Island" },
                { text: "You overthink everything.", song: "Sleep Tight" },
                { text: "You avoid your emotions.", song: "Stealer" },
                { text: "You care too much.", song: "Big Girls Don't Cry" },
                { text: "You're too hard on yourself.", song: "Knife" },
            ],
        },
        {
            question: "Pick one word that describes your love.",
            answerOptions: [
                { text: "Reckless", song: "Knife" },
                { text: "Lighthearted", song: "No Way Back" },
                { text: "Idealistic", song: "Sleep Tight" },
                { text: "Protective", song: "Big Girls Don't Cry" },
                { text: "Compassionate", song: "Lost Island" },
                { text: "Toxic", song: "Stealer" },
            ],
        },
        {
            question: "You receive an anonymous letter. What do you do?",
            answerOptions: [
                { text: "Burn it unopened.", song: "Knife" },
                { text: "Read it immediately.", song: "Stealer" },
                { text: "Keep it hidden.", song: "Sleep Tight" },
                { text: "Ignore it completely.", song: "Big Girls Don't Cry" },
                { text: "Follow every clue.", song: "Lost Island" },
                { text: "Confront the sender.", song: "No Way Back" },
            ],
        },
        {
            question: "A vampire bites your neck. What's your first reaction?",
            answerOptions: [
                { text: "Fight back.", song: "Knife" },
                { text: "Accept your fate.", song: "Sleep Tight" },
                { text: "Ask questions.", song: "Lost Island" },
                { text: "Join them.", song: "Stealer" },
                { text: "Run away.", song: "Big Girls Don't Cry" },
                { text: "Laugh because it's hot.", song: "No Way Back" },
            ],
        },
        {
            question: "Which piece of evidence do you inspect first?",
            answerOptions: [
                { text: "A bloody knife.", song: "Knife" },
                { text: "A torn photograph.", song: "Big Girls Don't Cry" },
                { text: "A hidden journal.", song: "Sleep Tight" },
                { text: "A silver necklace.", song: "Stealer" },
                { text: "An old map.", song: "Lost Island" },
                { text: "Security footage.", song: "No Way Back" },
            ],
        },
        {
            question: "Which location feels most like home?",
            answerOptions: [
                { text: "Abandoned mansion", song: "Sleep Tight" },
                { text: "Neon city streets", song: "Stealer" },
                { text: "Foggy forest", song: "Lost Island" },
                { text: "Moonlit rooftop", song: "No Way Back" },
                { text: "Quiet library", song: "Big Girls Don't Cry" },
                { text: "Crime scene", song: "Knife" },
            ],
        },
        {
            question: "Choose your final investigation partner.",
            answerOptions: [
                { text: "The detective", song: "Knife" },
                { text: "The mysterious stranger", song: "Stealer" },
                { text: "Your childhood friend", song: "Big Girls Don't Cry" },
                { text: "The vampire", song: "Sleep Tight" },
                { text: "Your own instincts", song: "Lost Island" },
                { text: "Nobody. I work alone.", song: "No Way Back" },
            ],
        },
    ];

    const initialScores = {
        "No Way Back": 0,
        Knife: 0,
        Stealer: 0,
        "Big Girls Don't Cry": 0,
        "Sleep Tight": 0,
        "Lost Island": 0,
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(initialScores);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const savedScores = localStorage.getItem("quizScores");
        const savedQuestion = localStorage.getItem("quizQuestion");

        if (savedScores) {
            setScores(JSON.parse(savedScores));
        }

        if (savedQuestion) {
            setCurrentQuestion(Number(savedQuestion));
        }
    }, []);

    function chooseAnswer(song) {
        const updatedScores = {
            ...scores,
            [song]: scores[song] + 1,
        };

        setScores(updatedScores);

        localStorage.setItem("quizScores", JSON.stringify(updatedScores));

        if (currentQuestion === questions.length - 1) {
            setFinished(true);
            localStorage.removeItem("quizQuestion");
        } else {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);
            localStorage.setItem("quizQuestion", nextQuestion);
        }
    }

    function restartQuiz() {
        setScores(initialScores);
        setCurrentQuestion(0);
        setFinished(false);

        localStorage.removeItem("quizScores");
        localStorage.removeItem("quizQuestion");
    }

    const result = Object.keys(scores).reduce((highest, current) =>
        scores[current] > scores[highest] ? current : highest
    );

    if (finished) {
        return (
            <div className="result-card">
                <h2>Assessment Complete</h2>
                <h1>{result}</h1>

                <p>
                    This recovered audio file most closely matches your psychological
                    profile.
                </p>

                <button onClick={restartQuiz}>Take Quiz Again</button>
            </div>
        );
    }

    return (
        <div className="quiz-card">
            <div className="progress">
                Question {currentQuestion + 1} / {questions.length}
            </div>

            <h2>{questions[currentQuestion].question}</h2>

            <div className="answer-grid">
                {questions[currentQuestion].answerOptions.map((answer) => (
                    <button
                        key={answer.text}
                        onClick={() => chooseAnswer(answer.song)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Quiz;