import React from "react";

export const AddTransaction = ({ text, amount, submit}) => {
 

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={text}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={amount}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={submit} type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};
