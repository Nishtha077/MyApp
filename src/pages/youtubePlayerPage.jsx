import Navbar from "../components/Navbar";
import styles from "./styles/youtubePage.module.css";
import YoutubeCard from "../components/YoutubeCard";
import youtube from "../images/appLogo.png";

const Youtube = () => {
  return (
    <>
      <Navbar />
      <div className={styles.topbar}>
        <div className={styles.app_logo}>
          <img src={youtube} alt="logo" />
          <h1>Youtube</h1>
        </div>
        <div className={styles.topbar_items}>
          <button>⏹️</button>
          <button>🔔</button>
          <button>🔍</button>
        </div>
      </div>
      <div className={styles.categories}>
        <p>All</p>
        <p>Shorts</p>
        <p>Watched</p>
        <p>Unwatched</p>
        <p>Videos</p>
      </div>
      <div className={styles.cards_container}>
        <YoutubeCard />
      </div>
      <div className={styles.bottom_bar}>
        <div className={styles.bottom_bar_item}>
          <img src="" alt="icon" />
          <p>Home</p>
        </div>
        <div className={styles.bottom_bar_item}>
          <img src="" alt="icon" />
          <p>Shorts</p>
        </div>
        <div className={styles.bottom_bar_item}>
          <button>+</button>
        </div>
        <div className={styles.bottom_bar_item}>
          <img src="" alt="icon" />
          <p>Subscriptions</p>
        </div>
        <div className={styles.bottom_bar_item}>
          <img src="" alt="icon" />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
};

export default Youtube;
