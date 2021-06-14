import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/books.svg" alt="logo do book" />
        <h2>Biblioteca dos sonhos</h2>
      </div>
    </header>
  );
}
