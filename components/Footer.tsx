import styles from '../styles/Footer.module.css';

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.pageFooter}>
      <p>&copy; {getYear()} Laurynas Rupainis</p>
    </footer>
  );
}
