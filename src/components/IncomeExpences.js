import React from "react";

export const IncomeExpences = ({ userInput }) => {
  
  
     const income = userInput
      .map((transaction) => {
        return transaction.amount;
      })
      .filter((amount) => amount > 0)
      .reduce((p, c) => (p += c), 0).toFixed(2);

     const expence = userInput
      .map((transaction) => {
        return transaction.amount;
      })
      .filter((amount) => amount < 0)
      .reduce((p, c) => (p += c), 0).toFixed(2);

  

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{`+$${income}`}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus"> {`-$${expence}`}</p>
      </div>
    </div>
  );
};
