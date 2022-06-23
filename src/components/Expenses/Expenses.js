import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

export default function Expenses() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 55.99,
      mydate: new Date(2020, 6, 15),
    },
    {
      title: "Toilet Paper",
      amount: 5.99,
      mydate: new Date(2021, 0, 25),
    },
    {
      title: "Book",
      amount: 10.99,
      mydate: new Date(2022, 8, 7),
    },
    {
      title: "Phone",
      amount: 1699.99,
      mydate: new Date(2020, 5, 2),
    },
    {
      title: "Speakers",
      amount: 150.69,
      mydate: new Date(2007, 4, 3),
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        mydate={expenses[0].mydate}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        mydate={expenses[1].mydate}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        mydate={expenses[2].mydate}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        mydate={expenses[3].mydate}
      />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        mydate={expenses[4].mydate}
      />
    </Card>
  );
}
