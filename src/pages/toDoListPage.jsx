import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./styles/toDoListPage.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.push({ task: e.target.task.value, isChecked: false });
      return newTasks;
    });
  };

  const handleCheck = (e, idx) => {
    setTasks((prev) => {
      const newArr = [...prev];
      newArr[idx].isChecked = e.target.checked;
      return newArr;
    });
  };

  const handleDelete = (e, idx) => {
    setTasks((prev) => {
      const newArr = [...prev];
      newArr.splice(idx, 1);
      return newArr;
    });
  };

  const handleEdit = (idx) => {
    setEditIndex(idx);
  };

  const handleEditSubmit = (e, idx) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target[0].value);
    setTasks((prev) => {
      const temp = [...prev];
      temp[idx].task = e.target[0].value;
      return temp;
    });
    setEditIndex(-1);
  };

  const handleEditReset = () => {
    setEditIndex(-1);
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.heading}>To do list</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="task" placeholder="Add a new task..." />
        <button type="submit"> + Add Task</button>
      </form>
      <div className={styles.task_container}>
        {tasks.map((elem, idx) => {
          return (
            <div key={idx}>
              <hr className={styles.line} />
              <div className={styles.task}>
                <div className={styles.task_name}>
                  <input
                    type="checkbox"
                    name="done"
                    onChange={(e) => {
                      handleCheck(e, idx);
                    }}
                  />
                  {editIndex != idx ? (
                    <p
                      className={
                        elem.isChecked
                          ? styles.checked_task
                          : styles.unchecked_task
                      }
                    >
                      {elem.task}
                    </p>
                  ) : (
                    <form
                      className={styles.update_form}
                      onSubmit={(e) => {
                        handleEditSubmit(e, idx);
                      }}
                      onReset={() => {
                        handleEditReset();
                      }}
                    >
                      <input
                        type="text"
                        name="update"
                        defaultValue={elem.task}
                      />
                      <button type="submit">✏️</button>
                      <button type="reset">❌</button>
                    </form>
                  )}
                </div>
                <div className={styles.action_buttons}>
                  {editIndex != idx ? (
                    <>
                      <button
                        onClick={() => {
                          handleEdit(idx);
                        }}
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(e, idx);
                        }}
                      >
                        🗑️
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled>✏️</button> <button disabled>🗑️</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
