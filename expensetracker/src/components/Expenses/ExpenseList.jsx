import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h5 className="text-center mt-4">No Expenses Found!</h5>;
  }
  return (
    <div className="row">
      {props.expenses.map((expense, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <ExpenseItem
             expense={expense} 
             onDelete={props.onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default ExpensesList;
