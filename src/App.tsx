import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service';
import {QuetionType} from './Types/quiz_types';
import QuestionCard from './Components/QuestionCard';

function App() {

  let [quiz, setQuiz] = useState<QuetionType[]>([]);
  let [CurrentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showScore, setShowScore] = useState(false);

  useEffect(()=>{

  async function fetchData() {
    const questions:QuetionType[] = await getQuizDetails(5 ,'easy');
    console.log(questions);
    setQuiz(questions);

  }
  fetchData();
   

  },[]);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns:string)=>{
  //console.log('handleSubmitCall')
    e.preventDefault();
    console.log(userAns);
      const currentQuestion: QuetionType = quiz[CurrentStep]

      console.log("Correct Answer is -- "+currentQuestion.correct_answer+"--User selected Answer  is--"+ userAns)

      if (userAns === currentQuestion.correct_answer){
        setScore(++score);
      }

    if(CurrentStep !== quiz.length-1)
    setCurrentStep(++CurrentStep)
    else {
      setShowScore(true);
  }


  }

  if(!quiz.length)
  return<h3>Loading...</h3>

  if (!showScore){
    return(<div className="App-Scrore">
        <h2>Quiz APP</h2>
    <div className="result-container" > 
    <h2>Quiz APP</h2>
  
      <h3>Result</h3>
      <p>Your final Scoure is  =  <b>{score}</b> Out of : <b>{quiz.length}</b></p>
    </div></div>)
  }
  return (
    <div className="App">

<h2>Quiz APP</h2>
      
      <QuestionCard
        options = {quiz[CurrentStep].option}
        question ={quiz[CurrentStep].question}
        
        callback ={handleSubmit}
        />
  
    </div>
  );
}

export default App;
