import React, { useState } from "react";
import Transaction from "./Transaction";

function Bal() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expence, setExpence] = useState(0);

  const onIncome = (amount) => {
    setIncome(income + amount);
    setBalance(balance + amount);
  };
  const onExpence = (amount) => {
    setExpence(expence + amount);
    setBalance(balance - amount);
  };
  return (
    <div className="bg-sky-300 h-screen">
      <div className="flex flex-col items-center">
        <h1 className=" font-bold text-2xl text-black mt-3 ">
          Expense Tracker React App
        </h1>
        <h2 className=" font-semibold text-2xl pt-7">Balance: {balance}</h2>
        <div className="flex flex-row justify-between pt-3">
          <h2 className="bg-green-500 px-3 py-2 rounded-md font-bold mr-3">
            Income: {income}
          </h2>
          <h2 className="bg-red-500 px-3 py-2 rounded-md font-bold ml-3">
            Expence: {expence}
          </h2>
        </div>
        <Transaction onIncome={onIncome} onExpence={onExpence} />
      </div>
    </div>
  );
}

export default Bal;
