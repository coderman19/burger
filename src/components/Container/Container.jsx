import classNames from 'classnames';
import styles from './Container.module.css';


export const Container = ({children, className}) => (
  <div className={classNames(styles.container, className)}>
    {children}
  </div>
)