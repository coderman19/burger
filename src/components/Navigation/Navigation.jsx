import styles from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';



export const Navigation = () => {

  const { category, activeCategory } = useSelector((state) => state.category)
  console.log('category: ', category);
  const dispath = useDispatch();

  return (
    <nav className={styles.navigation}>
    <Container className={styles.container}>
      <ul className={styles.list}>
        {category.map((item, i) =>
        <li className={styles.item}>
          <button 
            className={classNames(
              styles.button, 
              activeCategory === i ? styles.button_active : '')}
              style={{ backgroundImage: `url(${item.image})`}}
              onClick={() => {
                dispath(changeCategory({indexCategory: i }));
              }}
              >
           {item.rus}
          </button>
        </li>
        )}
      </ul>
    </Container>
  </nav>
  );
}