import React, { useState } from "react";

function Transaction({ onIncome, onExpence }) {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState();
  const [title, setTitle] = useState();
  const [transactionType, setTransactionType] = useState("expence");

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleTransaction = (e) => {
    e.preventDefault;

    const info = {
      id: data.length + 1,
      amount: amount,
      title: title,
      transactionType: transactionType,
    };

    if (!amount || !title) {
      alert("Amount and title are required");
    }
    if (transactionType === "income") {
      onIncome(Number(amount));
    } else {
      onExpence(Number(amount));
    }
    setData([info, ...data]);
    setAmount("");
    setTitle("");
    setTransactionType("expence");
    setMenu(!menu);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-black text-white font-medium px-3 py-2 mt-6 rounded-md"
        onClick={handleMenu}
      >
        Add Transaction
      </button>

      {menu && (
        <form action="#" className="flex flex-col mt-5 space-y-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="px-3 py-2 rounded-md outline-none"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="px-3 py-2 rounded-md outline-none"
          />
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="px-3 py-2 rounded-md outline-none"
          >
            <option value="expence">Expence</option>
            <option value="income">Income</option>
          </select>
          <button
            className="bg-black text-white font-medium px-3 py-2 mt-6 rounded-md"
            onClick={handleTransaction}
          >
            Add
          </button>
        </form>
      )}
      {data.length > 0 &&
        data.map((dt) => (
          <div
            className={`flex flex-row justify-between mt-2 px-3 py-2 font-bold rounded-md w-[200px] text-white ${
              dt.transactionType === "expence" ? "bg-red-500" : "bg-green-500"
            }`}
            key={dt.id}
          >
            <p>{dt.title}</p>
            <p>{dt.amount}</p>
          </div>
        ))}
    </div>
  );
}

export default Transaction;
