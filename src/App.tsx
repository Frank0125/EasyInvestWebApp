import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createOrder } from './lib/createOrder'
import { useUser } from './components/UserProvider'
import { StockType } from './types/StockType'

function App() {
  const [count, setCount] = useState(0)
  const user = useUser()
  const sampleOrder = {
    id: "new",
    userID: user.id,
    stockName: "apple",
    amount: 100,
    expectedGrowth: 100,
    stockType: StockType.REGULAR,
    openedAt: new Date,
    closedAt: new Date,
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => createOrder(sampleOrder)}>
          Create Order
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
