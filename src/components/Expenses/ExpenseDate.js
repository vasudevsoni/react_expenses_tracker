import Card from "./UI/Card";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.mydate.toLocaleString("en-US", { month: "short" });
  const day = props.mydate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.mydate.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date-day">{day}</div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
    </Card>
  );
}
