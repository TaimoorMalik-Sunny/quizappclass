import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service';
import {QuetionType} from './Types/quiz_types';
import QuestionCard from './Components/QuestionCard';

function App() {

  let [quiz, setQuiz] = useState<QuetionType[]>([]);
  let [CurrentStep, setCurrentStep] = useState(0);

  useEffect(()=>{

  async function fetchData() {
    const questions:QuetionType[] = await getQuizDetails(5 ,'easy');
    console.log(questions);
    setQuiz(questions);

  }
  fetchData();
   

  },[]);

  const handleSubmit = (e: React.FormEvent<EventTarget>)=>{
  console.log('handleSubmitCall')
    e.preventDefault()
    if(CurrentStep !== quiz.length-1)
    setCurrentStep(++CurrentStep)
    else {
      alert("Quiz Completed");
      setCurrentStep(0);
  }


  }

  if(!quiz.length)
  return<h3>Loading...</h3>
  return (
    <div className="App">
      <QuestionCard
        options = {quiz[CurrentStep].option}
        question ={quiz[CurrentStep].question}
        callback ={handleSubmit}
        />
  
    </div>
  );
}

export default App;
