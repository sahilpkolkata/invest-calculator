import { useState } from "react"
import ResultTable from "./components/ResultTable"
import UserInput from "./components/UserInput"



function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment : 100000,
    annualInvestment : 20000,
    expectedReturn: 7,
    duration: 0
  })

  const inputIsValid = userInput.duration >= 0

  function handleChange(inputIdentifier, newValue){
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue
      }  
    })
  }

  
  return (
    <>
     <UserInput inputs={userInput} handleInput={handleChange}/>
     {
      inputIsValid ? <ResultTable input = {userInput}/> 
                  : <p className="center">Please enter correct input</p>
     }
    </>
   
  )
}

export default App
