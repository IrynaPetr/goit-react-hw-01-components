import PropTypes from "prop-types";
import css from './TransactionHistiry.module.css'

export const TransactionHistory = ( {items} ) => {
  return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ type, id, amount, currency }) => {
      return  <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    })}
  </tbody>
</table>
}

TransactionHistory.propTypes ={
items: PropTypes.arrayOf(
  PropTypes.shape( {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
)
}