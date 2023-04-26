import Answer from "./Answer";

import {useContext} from "react";
import {QuizContext} from "../contexts/quiz";



const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log("Question", quizState);
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer key={index} answerText={answer} />
                ))}
            </div>
        </div>
    );
};

export default Question;
