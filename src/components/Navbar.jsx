import styles from "./Navbar.module.css";
import image from "../images/dashboard.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <img className={styles.image} src={image} alt="" />
        <Link to="/" className={styles.heading}>
          <h3>MyApp</h3>
        </Link>
        <div className={styles.action_items}>
          <Link to="/toDoList" className={styles.link}>
            To Do List
          </Link>
          <Link to="/calculator" className={styles.link}>
            Calculator
          </Link>
          <Link to="/stopwatch" className={styles.link}>
            Stopwatch
          </Link>
          {/* <Link to="/youtube" className={styles.link}>
            Youtube
          </Link> */}
          <Link to="/biodata" className={styles.link}>
            Biodata
          </Link>
        </div>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.search_box}>
          <input
            type="text"
            name="searchbox"
            placeholder="🔍 Search apps and features"
          />
          <button>Search</button>
        </div>
        <button>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
