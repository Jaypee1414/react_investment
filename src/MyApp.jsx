import React from 'react'
import { useState } from 'react'
import UserInput from './components/UserInput'
import Header from './components/Header'
import logo from './assets/investment-calculator-logo.png'
import TableResult from './components/TableResult'

function MyApp() {

    const [userIput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 2000,
        expectedReturn: 9,
        duration: 10,
      })
    
      function HandleInput(inputTypes, Value) {
        setUserInput((prevValue)=>{
          return{
            ...prevValue,
            [inputTypes] : +Value
          }
        })
      }

    // total interest
    // valueendoftheyear  - annual investment * year
    // initial investment for [0] 
    // endoftheyear -interest -annualinvestment 
    // +newvalue
    // formatter.fromat()
    // total ammound = endoftheyear - total interest
    // validation -number && -1 return message 
    // please enter duration greater thatn 
    // table, thead ,tr , th, tbody,  map ,tr , td
   
  return (
    <div>
        <Header/>
        <UserInput onChange={HandleInput} userIput={userIput}/>
        <TableResult InvestmentResult={userIput}/>
    </div>
  )
}

export default MyApp
