import Navbar from "../components/Navbar";
import FooterBar from "../components/Footer";
import image from "../images/dashboard.png";
import styles from "./styles/dashboardPage.module.css";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import toDoList from "../images/toDoList.png";
import calculator from "../images/calculator.png";
import stopwatch from "../images/stopwatch.png";
import biodata from "../images/biodata.png";

const Dahsboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className={styles.heading_container}>
        <div className={styles.heading}>
          <img src={image} alt="" />
          <h1>App Dashboard</h1>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/toDoList");
            }}
          >
            🚀 Quick Launch
          </button>
        </div>
      </div>
      <div className={styles.card_conatiner}>
        {Card({
          logo: image,
          heading: "To Do List App",
          desc: "Manage your daily tasks and boost your productivity with ease.",
          screenshot: toDoList,
          open: "Open To Do App",
          link: "/toDoList",
        })}
        {Card({
          logo: image,
          heading: "Calculator App",
          desc: "Perform basic arithmetic calculations quickly and accurately.",
          screenshot: calculator,
          open: "Open Calculator App",
          link: "/calculator",
        })}
        {Card({
          logo: image,
          heading: "Stopwatch App",
          desc: "Measure time precisely with start, stop, and reset functions.",
          screenshot: stopwatch,
          open: "Open Stopwatch App",
          link: "/stopwatch",
        })}
        {/* {Card({
          logo: image,
          heading: "Youtube App",
          desc: "Enjoy your favorite videos directly within the application.",
          screenshot: image,
          open: "Open Youtube App",
          link: "/youtube",
        })} */}
        {Card({
          logo: image,
          heading: "Biodata Displayer App",
          desc: "Enter and view your personal details in a structured format.",
          screenshot: biodata,
          open: "Open Biodata Displayer App",
          link: "/biodata",
        })}
      </div>
      <FooterBar />
    </>
  );
};

export default Dahsboard;
