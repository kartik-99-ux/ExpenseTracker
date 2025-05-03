import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpensesList from "./components/Expenses/ExpenseList";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { getExpenses, addExpense, deleteExpense } from "./expenseService";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2023");
  useEffect(() => {
    getExpenses()
      .then((response) => {
        const parsedExpenses = response.data.map((exp) => ({
          ...exp,
          date: new Date(exp.date), // Parse ISO date from MongoDB
        }));
        setExpenses(parsedExpenses);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    addExpense(expense) // send to backend
      .then((response) => {
        const savedExpense = { ...response.data, date: new Date(response.data.date) };
        setExpenses((preExpenses) => [...preExpenses, savedExpense]);
      })
      .catch((error) => {
        console.error("Error adding expense:", error);
      });
  };
  

  const deleteExpenseHandler = (id) => {
    setExpenses((preExpenses) =>
      preExpenses.filter((expense) => expense.id !== id)
    );
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); // Update the filtered year
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <div className="mt-5">
        <ExpensesList
          expenses={expenses}
          onDelete={deleteExpenseHandler}
        ></ExpensesList>
      </div>
    </>
  );
}
export default App;
