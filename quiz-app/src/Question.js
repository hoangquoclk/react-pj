import React from 'react'

const Question = ({question}) => {
    const {question_name, a, b, c, d} = question;
    return (
        <div className="quiz-header">                    
            <h2 id="question">{question_name}</h2>
            <ul>          
                <li>
                    <input type="radio" id="a" name="answer" className="answer"/>
                    <label htmlFor="a" id="a_text">{a}</label>
                </li>
                <li>
                    <input type="radio" id="b" name="answer" className="answer"/>
                    <label htmlFor="b" id="a_text">{b}</label>
                </li>
                <li>
                    <input type="radio" id="c" name="answer" className="answer"/>
                    <label htmlFor="c" id="a_text">{c}</label>
                </li>
                <li>
                    <input type="radio" id="d" name="answer" className="answer"/>
                    <label htmlFor="d" id="a_text">{d}</label>
                </li>
            </ul>     
        </div>
    );
}

export default Question