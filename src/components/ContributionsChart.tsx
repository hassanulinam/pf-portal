import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StrategyState } from "../StrategyContextProvider";

const ContributionsChart = () => {
  const { employeeContribution, retirementAge } = StrategyState();
  const data = generateGraphData(
    300,
    employeeContribution,
    retirementAge,
    8.4,
    5
  );
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart
        width={500}
        height={150}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="years" />
        <YAxis label="$" />
        <Bar dataKey="employer" stackId="a" fill="#0800a3" />
        <Bar dataKey="employee" stackId="a" fill="#4734f8" />
        <Bar dataKey="totalInterest" stackId="a" fill="#82abf9" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ContributionsChart;

function generateGraphData(
  income: number,
  employeeCont: number,
  age: number,
  employerCont: number,
  interestRate: number
) {
  let hdata = [];
  for (let i = 20; i <= age; i += 5) {
    let n = income / 100;
    let totalInterest = ((n * 12 * interestRate * (i - 20 + 1)) / 100).toFixed(
      2
    );
    let employer = (n * employerCont).toFixed(2);
    let employee = (n * employeeCont).toFixed(2);
    const item = { employer, employee, totalInterest, years: i };
    hdata.push(item);
    income += 83.3;
  }
  return hdata;
}
