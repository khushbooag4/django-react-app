import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../../static/css/App.css";
import { CSRFToken } from "./utils/csrf_token";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} method="POST" action="/api/">
        <CSRFToken />
        <div className="form-control">
          <label htmlFor="text">Spending Category</label>
          <select
            name="text"
            className="btn btn-primary dropdown-toggle"
            id="cars"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          >
            <option value="outing">Outing</option>
            <option value="houserent">House Rent</option>
            <option value="grocery">Grocery</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (add negative - expense, add positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn btn-secondary mb-4">Add transaction</button>
      </form>
    </>
  );
};
