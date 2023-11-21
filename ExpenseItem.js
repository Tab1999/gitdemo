import React, { useState } from 'react';
import './index.css'; // Link to your CSS file

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    console.log("Delete expense clicked");
    // Assuming you have a function to handle the deletion
    // You can implement the logic to delete the expense element
    // For example, you can call a function passed as a prop to handle the deletion.
    if (props.onDelete) {
      props.onDelete();
    }
  };

  const changeAmountHandler = () => {
    setAmount(100);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <div>
        <button onClick={changeAmountHandler}>Change Amount</button>
        <button onClick={clickHandler}>Delete Expense</button>
      </div>
    </div>
  );
}
