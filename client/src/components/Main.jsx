import React, { useState } from "react";
import "./layouts/main.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../store/auth";

const Main = () => {
  const { chooseLanguage,getScore,getTotalMarks } = useGlobalContext();
  const navigate = useNavigate();
  const languages = ["HTML", "CSS", "JavaScript", "React", "Node", "Python"];
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('form is submited');
    const { selectLang, selectMode } = selectQuiz;
    // Check if both options are selected
    if (selectLang !== "select" && selectMode !== "select") {
      chooseLanguage(selectLang, selectMode);
      getScore(0);
      navigate("/quiz");
    } else {
      // Display an error message or take appropriate action for incomplete form
      alert("Please select both language and mode before starting the quiz.");
    }
  };

  const [selectQuiz, setSelectOption] = useState({
    selectLang: "select",
    selectMode: "select",
  });
  const handleSelect = (e) => {
    const value = e.target.value;
    switch(value){
      case "easy":
        getTotalMarks(10);
        break;
      case "medium":
        getTotalMarks(30);
        break;
      case "hard":
        getTotalMarks(50);
        break;
      default:
        break;
    }
    // alert(value);
    const name = e.target.name;

    // console.log(name);
    setSelectOption({ ...selectQuiz, [name]: value });
    // console.log("lang selected: ", selectQuiz.selectLang);
    // console.log("Mode of exam: ", selectQuiz.selectMode);
    // alert(value+" selected");
  };
  return (
    <div className="container">
      <h1 className="title tex-light">Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after antother.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one option.
        </li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form" onSubmit={handleSubmit}>
        <h3 className="select__lang mb-3">Select Language</h3>
        <select onChange={handleSelect} className="mb-3" name="selectLang">
          <option value="select">select</option>
          {languages.map((lang, i) => {
            return (
              <option value={lang} key={lang + i}>
                {lang}
              </option>
            );
          })}
        </select>

        <h3 className="select__lang mb-3">Select Mode</h3>
        <select onChange={handleSelect} name="selectMode">
          <option value="select">select</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div className="start">
          <button type="submit" className="btn">
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;
