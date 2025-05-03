import React from "react";
import "./ExpenseItem.css"
function ExpenseItem({ expense, onDelete }) {
  const formattedDate = new Date(expense.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const deleteHandler = () => {
    onDelete(expense.id);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{expense.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{formattedDate}</h6>
        <p className="card-text">${expense.amount}</p>
      </div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
