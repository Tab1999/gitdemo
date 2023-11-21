import React, { useState } from 'react';
import  {ExpenseItem}  from './ExpenseItem';

export function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Expense 1', amount: 100, date: new Date(2023, 0, 1) },
    { id: 2, title: 'Expense 2', amount: 200, date: new Date(2023, 1, 1) },
    // Add more expenses as needed
  ]);

  const deleteExpenseHandler = (expenseId) => {
    // Filter out the expense with the given ID
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={() => deleteExpenseHandler(expense.id)}
        />
      ))}
    </div>
  );
}


