import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate mydate={props.mydate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
    </Card>
  );
}
