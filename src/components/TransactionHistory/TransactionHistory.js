import React from "react";
import PropTypes from "prop-types";

import s from "./TransactionHistory.module.css";

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 === 1 ? s.grey : s.white;
  return (
    <tr className={trClassName} key={id}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return <tbody className={s.tbody}>{items.map(TransactionTr)}</tbody>;
};

const TransactionHistory = ({ transaction }) => {
  return (
    <table className={s.transaction}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionBody items={transaction} />
    </table>
  );
};

TransactionHistory.prototype = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
