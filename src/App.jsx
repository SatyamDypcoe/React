import ExpenseItem  from './components/ExpenseItem';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const expenses = [
    {tittle: 'Car Insurance', 
    amount: '100', 
    date: new Date(2023, 9, 10)
  },
    {tittle: 'Car', 
    amount: '1000', 
    date: new Date(2023, 9, 10)},
    {tittle: 'Insurance', 
    amount: '120', 
    date: new Date(2023, 9, 10)},
    {tittle: 'Grocery', 
    amount: '300', 
    date: new Date(2023, 9, 10)}
  ];
  return (
    <div>
      <h2>lets get started!</h2>
      <ExpenseItem tittle = {expenses[0].tittle}
      amount ={expenses[0].amount}
      date ={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem tittle = {expenses[1].tittle}
      amount ={expenses[1].amount}
      date ={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem tittle = {expenses[2].tittle}
      amount ={expenses[2].amount}
      date ={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem tittle = {expenses[3].tittle}
      amount ={expenses[3].amount}
      date ={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App
