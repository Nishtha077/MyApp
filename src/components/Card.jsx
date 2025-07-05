import styles from "./Card.module.css";
import { Navigate, useNavigate } from "react-router";

const Card = (obj) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <img className={styles.logo} src={obj.logo} alt="" />
      <h3>{obj.heading}</h3>
      <p>{obj.desc}</p>
      <img className={styles.screenshot} src={obj.screenshot} alt="" />
      <button
        onClick={() => {
          navigate(obj.link);
        }}
      >
        {obj.open}
      </button>
    </div>
  );
};

export default Card;
