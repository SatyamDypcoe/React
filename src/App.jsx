import Expenses from './components/Expenses'

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
     <Expenses items = {expenses} />
    </div>
  );
}

export default App
