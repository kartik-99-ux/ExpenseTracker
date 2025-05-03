import React from "react";
import './ExpenseFilter.css'
function ExpenseFilter(props)
{
  const dropDownChangeHandler=(event)=>
  {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className="expense-filter">
      <label>Filter by Year</label>
      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};
export default ExpenseFilter