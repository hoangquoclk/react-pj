// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const newYear = '1 Jan 2022';

  const countDown = () => {
    const newYearTime = new Date(newYear);
    const currentTime = new Date();
    const totalSeconds = (newYearTime - currentTime) / 1000;
    const SECONDS = Math.floor(totalSeconds % 60);  
    const MINS = Math.floor(totalSeconds / 60 % 60);
    const HOURS = Math.floor(totalSeconds / 3600 % 24);
    const DAYS = Math.floor(totalSeconds / 3600 / 24);
    setDay(DAYS);
    setHours(HOURS);
    setMins(MINS);
    setSeconds(SECONDS);
    // console.log(SECONDS);
  }

  useEffect(() => {
    setInterval(() => countDown(), 1000);
  }, [seconds]);
  

  return (
    <>
      <h1>New Years Eve</h1>
    
      <div className="countdown-container">
        <div className="countdown-el days-c">
            <p className="big-text" id="days">{day}</p>
            <span>days</span>
        </div>
        <div className="countdown-el hours-c">
            <p className="big-text" id="hours">{hours}</p>
            <span>hours</span>
        </div>
        <div className="countdown-el mins-c">
            <p className="big-text" id="mins">{mins}</p>
            <span>mins</span>
        </div>
        <div className="countdown-el seconds-c">
            <p className="big-text" id="seconds">{seconds}</p>
            <span>seconds</span>
        </div>
      </div>
    </>
  );
}

export default App;
