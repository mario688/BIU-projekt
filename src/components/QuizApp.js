import { render } from '@testing-library/react';
import scoreboard from './ScoreBoardData'
import React, {useEffect, useState } from 'react';
import quizdata from './QuizData'
import ScoreBoardTable from './ScoreBoardTable'

export default function QuizApp(props)  {
	const [user,setUser]=useState("");
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
			scoreboard[props.id].users.push({nick:user,score:score})
			
		}
	};

	
		useEffect(()=>
		{
			if(user.length<=0){
				var person = prompt("Please enter your name", "Harry Potter");
				setUser(person);
				
			}
			
		});
		
		
		
		
		 
	return (
		
		<div className='app'>
			
		 {showScore ? (
			 <div className='score-section'>
				 
				 Twój wynik {user} to : {score} na {quizdata[props.id].questions.length}<br></br>
				 
				 <ScoreBoardTable data={scoreboard[props.id].users} />
				

				
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
						 <button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					 ))}
				 </div>
			 </>
		 )}
	 </div>
	);
}