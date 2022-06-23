import Expenses from "./components/Expenses/Expenses";

export default function App() {
  return (
    <div className="App">
      <Expenses />
    </div>
  );

  //Alternative approach

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, {})
  // );
}
