import React from 'react'
import "./question.css";
import { useGlobalContext } from '../store/auth';
const Result = () => {
  const {user,totalScore,totalMarks}=useGlobalContext();
  return (
    <div className='container score__container'>
      <div className="user__name mb-5"><h1>Hello, {user.username}!</h1></div>
      <div className="userScore__container">
          <div className="left__container">
            <div className="score__content">
            <div className="score__text">
              Your Score
            </div>
            </div>
            <div className="your__score">
              <h3 className='total__marks'><span>{totalScore}/{totalMarks}</span></h3>
            </div>
          </div>
          <div className="right__container">
            <img src="https://tse2.mm.bing.net/th?id=OIP.iXLn3mGRFDlbf3vcseMw8wHaFu&pid=Api&P=0&h=180" alt="result-day" />
          </div>
      </div>
    </div>
  )
}

export default Result
