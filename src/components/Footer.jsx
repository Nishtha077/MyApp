import styles from "./Footer.module.css";

const FooterBar = () => {
  return (
    <div className={styles.container}>
      <h1>MyApp</h1>
      <p>Stay Updated With MyApp</p>
      <form className={styles.form}>
        <input type="text" name="task" placeholder="📩 Your email address" />
        <button type="submit">Subscribe Now</button>
      </form>
      <div className={styles.footer}>
        <button>English</button>
        <p>&copy; 2025 Nishtha Sharma</p>
        <p>🟢🔵🟣🟤</p>
      </div>
    </div>
  );
};

export default FooterBar;
