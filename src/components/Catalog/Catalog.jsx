import { Order } from "../Order/Order";
import { Container } from "../Container/Container";
import styles from './Catalog.module.css'
import { CatalogProducts } from "../CatalogProducts/CatalogProducts";

export const Catalog = () => {

  const goodsList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
  ];

  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              {goodsList.map(item => (
                <li className={styles.item}>
                <CatalogProducts title={item.title}/>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
      
      </Container>
    </section>
  )
}