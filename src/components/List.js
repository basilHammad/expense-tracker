import React from "react";

export const List = ({ transactions , deletItem }) => {
  return (
    <div>
      {transactions.map((transaction,i) => {
          const sign = transaction.amount < 0 ? '-' : '+'
        return (
          <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={i}>
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button onClick={() => deletItem(i)} className="delete-btn">x</button>
          </li>
        );
      })}
    </div>
  );
};
