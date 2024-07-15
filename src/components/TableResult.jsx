import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function TableResult({InvestmentResult}) {
    const Result = calculateInvestmentResults(InvestmentResult);
    console.log(Result)
  return (
    <div>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>End of year</th>
                    <th>Total Interest </th>
                    <th>total Amount</th>
                </tr>
            </thead>
            <tbody>
                    {Result.map((investment)=>{
                        const interestresult = investment.interest - investment.annualInvestment
                        const totalInterest = investment.valueEndOfYear - investment.annualInvestment - investment.year;

                        const totalAmound = investment.interest - totalInterest
                        return(
                        <tr>
                            <td>{investment.year}</td>
                            <td>{formatter.format(interestresult)}</td>
                            <td>{formatter.format(investment.valueEndOfYear)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmound)}</td>
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
  )
}

export default TableResult
