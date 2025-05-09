import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultList({ inputValue }) {
  const list = calculateInvestmentResults({
    initialInvestment: inputValue.initial,
    annualInvestment: inputValue.annual,
    expectedReturn: inputValue.expected,
    duration: inputValue.duration,
  });

  return list.length > 0 ? (
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
        {list.map((itm, idx) => {
          const initialInvestment =
            list[0].valueEndOfYear -
            list[0].interest -
            list[0].annualInvestment;
          const totalInterest =
            itm.valueEndOfYear -
            itm.annualInvestment * itm.year -
            initialInvestment;
          const totalAmountInvested = itm.valueEndOfYear - totalInterest;

          return (
            <tr key={idx}>
              <td>{itm.year}</td>
              <td>{formatter.format(itm.valueEndOfYear)}</td>
              <td>{formatter.format(itm.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p className="center">Please enter valid input data!</p>
  );
}
