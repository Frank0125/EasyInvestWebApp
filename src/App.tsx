import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createOrder } from "./lib/Order/createOrder";
import { useUser } from "./components/UserProvider";
import { StockType } from "./types/StockType";
import { OrderForm } from "./components/OrderForm";

function App() {
  const [count, setCount] = useState(0);
  const user = useUser();
  const sampleOrder = {
    id: crypto.randomUUID(),
    userID: user.id,
    stockName: "",
    amount: 5,
    shares: 0.05,
    priceBought: 0,
    expectedGrowth: 0,
    openedAt: new Date(),
    closedAt: null,
    type: StockType.REGULAR,
  };

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
        <button onClick={() => createOrder(sampleOrder)}>Create Order</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <OrderForm />
      </div>    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
