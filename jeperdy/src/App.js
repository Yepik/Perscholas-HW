import Score from './components/Score'
import Question from './components/Question';
import getData from './functions/getDataFunc.js'
import getCategories from './functions/getCategories.js'
import reducerHideQuestion from './functions/reducerHideQuestion'
import React, {useState,useEffect,useReducer} from 'react';
import './App.css';

function App() {
  const [question,setQuestion]=useState('')
  const [answer,setAnswer]=useState('')
  const [jeoperdy,setJeoperdy]=useState({category:{title:""},value:0})
  const [hideQuestion,dispatchHideQuestion]=useReducer(reducerHideQuestion, true)
  const [score,setScore]=useState(0)
  const [didAnswer, setDidAnswer]=useState(false)
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    getData(setQuestion,setAnswer,setJeoperdy)},[])
  getCategories(setCategories)
  return (
    <div className="App">
      <Score setScore={setScore} setDidAnswer={setDidAnswer} jeoperdy={jeoperdy} didAnswer={didAnswer} setScore={setScore} score={score}/>
      <Question setCategories={setCategories} didAnswer={didAnswer} setDidAnswer={setDidAnswer} jeoperdy={jeoperdy} dispatchHideQuestion={dispatchHideQuestion} hideQuestion={hideQuestion} answer={answer} question={question} getData={getData} setAnswer={setAnswer} setQuestion={setQuestion} setJeoperdy={setJeoperdy}/>
      
    </div> 
  );
}

export default App;
