// import logo from './logo.svg';
import './App.css';
import Question from './Question'
import data from './data'
import { useEffect, useState } from 'react';

function App() {
  const [question, setQuestion] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctPoint, setCorrectPoint] = useState(0);
  const answerELs = document.querySelectorAll('.answer');

  useEffect(() => {
    setQuestion(data[index]);
    answerELs.forEach((answerEL) => {
      answerEL.checked = false;
    });
  }, [index]);

  if(index === data.length) {
    return <>
          <h2>You have score answer {correctPoint}/{data.length}</h2>
          <button onClick={() => window.location.reload(false)}>Reload</button>
      </> 
  }

  const submitAnswer = () => {
    
    let answer = undefined;
    answerELs.forEach((answerEL) =>{
      if(answerEL.checked) {
        answer = answerEL.id;
      }
    });

    if(answer) {
      if(answer === question.correct) {
        setCorrectPoint(correctPoint + 1);
      }
    
      setIndex(index + 1);
    }
  }

  return (
    <div className="quiz-container" id="quiz">
      
      <Question question={question} />
      
      <button id="submit" onClick={submitAnswer}>Submit</button>
    </div>
  );
}

export default App;
