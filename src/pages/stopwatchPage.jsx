import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./styles/stopwatchPage.module.css";

const Stopwatch = () => {
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  const handleStartTimer = () => {
    setTimerStarted(!timerStarted);
  };

  useEffect(() => {
    if (timerStarted) {
      const id = setTimeout(() => {
        setMiliSeconds((prev) => {
          // console.log(miliSeconds);
          return prev + 1;
        });
      }, 10);

      return () => {
        clearTimeout(id);
      };
    }
  });

  const miliSecondsClipped = String(miliSeconds % 60).padStart(2, "0");
  const seconds = String(Math.floor(miliSeconds / 60) % 60).padStart(2, "0");
  const minutes = String(Math.floor(miliSeconds / (60 * 60)) % 60).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor(miliSeconds / (60 * 60 * 60)) % 60).padStart(
    2,
    "0"
  );

  const handleResetTimer = () => {
    setMiliSeconds(0);
    setTimerStarted(false);
    setLapTimes([]);
  };

  const handleLap = () => {
    setLapTimes((prev) => {
      const temp = [...prev];
      temp.push({ hours, minutes, seconds, miliSecondsClipped });
      return temp;
    });
  };

  const handleDelete = (idx) => {
    setLapTimes((prev) => {
      const temp = [...prev];
      temp.splice(idx, 1);
      return temp;
    });
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.heading}>Stopwatch</h1>
      <div className={styles.container}>
        <h1 className={styles.time}>
          {hours}:{minutes}:{seconds}:{miliSecondsClipped}
        </h1>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleStartTimer}>
            {timerStarted ? "⏸️ Stop" : "▶️ Start"}
          </button>
          <button className={styles.button} onClick={handleLap}>
            📝 Lap
          </button>
          <button className={styles.button} onClick={handleResetTimer}>
            🔃 Reset
          </button>
        </div>
        {lapTimes.map((elem, idx) => {
          return (
            <div key={idx} className={styles.card}>
              <p>
                {idx + 1}. {elem.hours}:{elem.minutes}:{elem.seconds}:
                {elem.miliSecondsClipped}
              </p>
              <button
                onClick={() => {
                  handleDelete(idx);
                }}
              >
                🗑️
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stopwatch;
