import styles from './Count.module.css';

export const Count = () => (
        <div className={styles.count}>
          <button className={styles.minus}>-</button>
            <p className={styles.amount}>1</p>
          <button className={styles.plus}>+</button>
        </div>
)