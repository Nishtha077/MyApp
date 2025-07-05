import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./styles/calculatorPage.module.css";

const Calculator = () => {
  const [output, setOutput] = useState(0);

  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleAllClear = () => {
    setOutput(0);
    setFirstNum(null);
    setOperator(null);
    setSecondNum(null);
    // console.log(output, firstNum, secondNum, operator);
  };

  const handleOperator = (e) => {
    if (firstNum != null) {
      setOperator(e.target.innerText);
      setOutput(e.target.innerText);
    }
  };

  const handleNumClick = (e) => {
    // console.log(e.target.innerText);
    const num = Number(e.target.innerText);
    if (firstNum == null) {
      setFirstNum(num);
      setOutput(num);
    } else if (operator == null) {
      setFirstNum((prev) => {
        setOutput(prev * 10 + num);
        return prev * 10 + num;
      });
    } else if (secondNum == null) {
      setSecondNum(num);
      setOutput(num);
    } else {
      setSecondNum((prev) => {
        setOutput(prev * 10 + num);
        return prev * 10 + num;
      });
    }
    // console.log("first", firstNum, "second", secondNum);
  };

  const handleEqualTo = () => {
    let op = null;
    if (operator == null) {
      setOutput(firstNum);
    } else if (secondNum == null) {
      setOutput(firstNum);
    } else if (firstNum != null) {
      switch (operator) {
        case "+":
          op = firstNum + secondNum;
          break;
        case "-":
          op = firstNum - secondNum;
          break;
        case "*":
          op = firstNum * secondNum;
          break;
        case "/":
          op = firstNum / secondNum;
          break;
      }
    }
    setOutput(op == null ? 0 : op);
    setFirstNum(op);
    setSecondNum(null);
    setOperator(null);
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.heading}>Calculator</h1>
      <div className={styles.container}>
        <p className={styles.output}>{output}</p>
        <button className={styles.normal_button} onClick={handleAllClear}>
          AC
        </button>
        <button className={styles.normal_button} onClick={handleOperator}>
          /
        </button>
        <button className={styles.normal_button} onClick={handleOperator}>
          *
        </button>
        <button className={styles.normal_button} onClick={handleOperator}>
          -
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          7
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          8
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          9
        </button>
        <button className={styles.normal_button} onClick={handleOperator}>
          +
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          4
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          5
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          6
        </button>
        <button className={styles.equals} onClick={handleEqualTo}>
          =
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          1
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          2
        </button>
        <button className={styles.normal_button} onClick={handleNumClick}>
          3
        </button>
        <button className={styles.zero} onClick={handleNumClick}>
          0
        </button>
      </div>
    </>
  );
};

export default Calculator;
