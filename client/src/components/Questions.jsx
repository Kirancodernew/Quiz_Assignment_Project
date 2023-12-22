import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../store/auth";
import { useNavigate } from "react-router-dom";
import "./question.css";

const Questions = () => {

  const { getQuestions,getScore,languageSelect } = useGlobalContext();
  const lang = languageSelect.language;
  const choose = languageSelect.mode;
  const [test, setTest] = useState([]);
  const fetchData = async () => {
    try {
      const response = await getQuestions(lang, choose);
      // console.log("I'm from test1:", response);
      setTest(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("I'm from test:", test);
  const navigate=useNavigate();
  const [qustionNo, setQuestionNo] = useState(1);
  const selectPageHandler = () => {
    if (scoreUpdate.correct === "true") {
      // alert("visited here " + scoreUpdate.correct);
      // alert(scoreUpdate.correct + "  " + scoreUpdate.score);
      getScore(scoreUpdate.score);
      setScoreUpdate({ correct: false, score: 0 });
    }
    // alert(`your total: ${totalScore}`);
    if(qustionNo==10){
      setQuestionNo(0);
      navigate('/result');
    }
    setQuestionNo(qustionNo + 1);
  };
  //check the correct ans
  const [scoreUpdate, setScoreUpdate] = useState({ correct: false, score: 0 });
  //handling the onclick:
  const handleOnClick = (e) => {
    const correctAns = e.target.getAttribute("isCorrect");
    const point = e.target.getAttribute("score");
    setScoreUpdate({ correct: correctAns, score: point });
    // alert(scoreUpdate.correct + "  " + scoreUpdate.score);
  };
  //handling the next question:
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {Array.isArray(test) && test.length > 0 && (
        <div className="questions" onSubmit={handleSubmitForm}>
          {test.slice(qustionNo - 1, qustionNo).map((Q) => {
            return (
              <div className="question__single" key={Q.id}>
                <h2>{`${qustionNo}. ${Q.question}`}</h2>
                <div className="options">
                  <ul className="options-list">
                    {Q.options.map((option, i) => (
                      <li key={option + i}>
                        <label>
                          <input
                            type="radio"
                            name="options"
                            isCorrect={
                              option === Q.correctAnswer ? "true" : "false"
                            }
                            score={Q.marks}
                            onClick={handleOnClick}
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {Array.isArray(test) && test.length > 0 && (
        <div className="pagination">
          {/* <span
        className={qustionNo > 1 ? "" : "pagination__disable"}
        onClick={() => selectPageHandler(qustionNo - 1)}
      >
        PREV
      </span> */}
          {[...Array(10)].map((_, i) => (
            <span
              key={i + 1}
              className={qustionNo === i + 1 ? "pagination__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={qustionNo < 11 ? "" : "pagination__disable"}
            onClick={selectPageHandler}
          >
            NEXT
          </span>
        </div>
      )}
    </>
  );
};

export default Questions;
