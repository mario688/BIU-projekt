import React, {useEffect, useState } from 'react';

import QuizApp from "./QuizApp"
import quizdata from './QuizData'

export default function ChooseQuiz() {


    const [buttonChat,SetbuttonChat] = useState(false);
    const [buttonChat2,SetbuttonChat2] = useState(false);
    const [buttonChat3,SetbuttonChat3] = useState(false);
   
    
   
    return (
        <>  
            <div id="quiz">
            <section>   
            <h2>{quizdata[0].quizTitle}</h2>    
            {buttonChat ? <QuizApp id="0" />:null}   
            <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                         Start quiz!
                        </button>
            
            </section>   
            <section>
            <h2>{quizdata[1].quizTitle}</h2>
             {buttonChat2 ? <QuizApp id="1" />:null}   
            <button className="btn btn-secondary" onClick={() => SetbuttonChat2(!buttonChat2)}>
                         Start quiz!
                        </button>
            </section>    
            
            </div>

        </>
    )
}