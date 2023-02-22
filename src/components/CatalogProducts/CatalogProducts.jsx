import styles from './CatalogProducts.module.css';

export const CatalogProducts = (props) => (
  <article className={styles.product}>
      <img src="img/photo-4.jpg" alt={props.title} className={styles.image} />

      <p className={styles.price}>560<span className="currency">₽</span></p>

        <h3 className={styles.title}>
          <button className={styles.detail}>{props.title}</button>
        </h3>

      <p className={styles.weight}>510г</p>

    <button className={styles.add} type="button">Добавить</button>
  </article>
)