import TransactionHistoryItem from '../transactionHistoryItem/TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Amount</th>
                <th className={styles.th}>Currency</th>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, type, amount, currency }) => (
                <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
              ))}
            </tbody>
        </table>
    );
};          

export default TransactionHistory;