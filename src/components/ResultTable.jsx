import { calculateInvestmentResults, formatter } from "../util/investment"

export default function ResultTable({input}){

    
    let annualData = calculateInvestmentResults(input)
    console.log(annualData)
    let totalInt = 0

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    annualData.map((item)=>{
                        totalInt+=item.interest 
                        return(
                            <tr key={item.year}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInt)}</td>
                                <td>{formatter.format((item.valueEndOfYear-totalInt))}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}