import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExp from './components/IncomeExp'
import TransactionList from './TransactionList'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExp />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App
