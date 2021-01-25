import { render } from '@testing-library/react';
import React, { useState } from 'react';
import quizdata from './QuizData'
export default function QuizApp(props)  {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizdata[props.id].questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	
	return (

		<div className='app'>
		
		 {showScore ? (
			 <div className='score-section'>

				 Wynik: {score} na {quizdata[props.id].questions.length}
			 </div>
		 ) : (
			 <>
				 <div className='question-section'>
					 <div className='question-count'>
						 <span>Question {currentQuestion + 1}</span>/{quizdata[props.id].questions.length}
					 </div>
					 
					 <div className='question-text'>{quizdata[props.id].questions[currentQuestion].questionText}</div>
				 </div>
				 <div className='answer-section'>
					 {quizdata[props.id].questions[currentQuestion].answerOptions.map((answerOption) => (
						 <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					 ))}
				 </div>
			 </>
		 )}
	 </div>
	);
}