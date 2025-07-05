import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./styles/biodataPage.module.css";
import background from "../images/background.png";

const BiodataDisplayer = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [user, setUser] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  const bgStyle = {
    backgroundImage: background,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target.photo.files[0];
    const obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      dob: e.target.dob.value,
      profile: file ? URL.createObjectURL(file) : null,
      occupation: e.target.occupation.value,
      aboutme: e.target.desc.value,
      linkedin: e.target.linkedin.value,
    };
    setUser(obj);
    setIsToggled(false);
  };

  const handleAdd = (e, setter) => {
    e.preventDefault();
    setter((prev) => {
      const temp = [...prev];
      temp.push("");
      return temp;
    });
  };

  const handleUpdate = (e, idx, setter) => {
    setter((prev) => {
      const temp = [...prev];
      temp[idx] = e.target.value;
      return temp;
    });
  };

  const handleDelete = (e, idx, setter) => {
    e.preventDefault();
    setter((prev) => {
      const temp = [...prev];
      console.log(temp);
      console.log(idx);
      temp.splice(idx, 1);
      console.log(temp);
      return temp;
    });
  };

  return (
    <>
      <Navbar />
      <h1 className={styles.heading}>Biodata</h1>
      <div className={styles.toggle_button}>
        <button
          onClick={() => {
            setIsToggled(true);
          }}
          className={isToggled ? styles.toggled : styles.toggle}
        >
          Input Details
        </button>
        <button
          onClick={() => {
            setIsToggled(false);
          }}
          className={isToggled ? styles.toggle : styles.toggled}
        >
          View Biodata
        </button>
      </div>
      {isToggled ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Jane Doe" required />
          <label htmlFor="photo">Profile Photo</label>
          <input type="file" accept="image/*" name="photo" id="" required />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="jane.doe@example.com"
            required
          />
          <label htmlFor="desc">Brief Description About You</label>
          <input
            type="text"
            name="desc"
            required
            placeholder="I am a passionate learner..."
          />
          <label htmlFor="occupation">Occupation</label>
          <input type="text" name="occupation" required placeholder="Student" />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 0000000000"
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="123 Main Colony"
            required
          />
          <label htmlFor="dob">DOB</label>
          <input type="date" name="dob" required />
          <label htmlFor="linkedin">LinkedIn Handle</label>
          <input type="text" name="linkedin" required placeholder="@jane-doe" />
          <label htmlFor="education">Education</label>
          {education.map((elem, idx) => {
            return (
              <div className={styles.input_container} key={idx}>
                <input
                  type="text"
                  name=""
                  required
                  placeholder="High School @KVS"
                  value={elem}
                  onChange={(e) => {
                    handleUpdate(e, idx, setEducation);
                  }}
                />
                <button
                  onClick={(e) => {
                    handleDelete(e, idx, setEducation);
                  }}
                >
                  🗑️
                </button>
              </div>
            );
          })}
          <button
            className={styles.add_button}
            onClick={(e) => {
              handleAdd(e, setEducation);
            }}
          >
            +
          </button>

          <label htmlFor="education">Work Experience</label>
          {workExp.map((elem, idx) => {
            return (
              <div className={styles.input_container} key={idx}>
                <input
                  required
                  placeholder="SDE I @XYZ"
                  type="text"
                  name=""
                  value={elem}
                  onChange={(e) => {
                    handleUpdate(e, idx, setWorkExp);
                  }}
                />
                <button
                  onClick={(e) => {
                    handleDelete(e, idx, setWorkExp);
                  }}
                >
                  🗑️
                </button>
              </div>
            );
          })}
          <button
            className={styles.add_button}
            onClick={(e) => {
              handleAdd(e, setWorkExp);
            }}
          >
            +
          </button>

          <label htmlFor="education">Skills</label>
          {skills.map((elem, idx) => {
            return (
              <div className={styles.input_container} key={idx}>
                <input
                  required
                  placeholder="Python"
                  type="text"
                  name=""
                  value={elem}
                  onChange={(e) => {
                    handleUpdate(e, idx, setSkills);
                  }}
                />
                <button
                  onClick={(e) => {
                    handleDelete(e, idx, setSkills);
                  }}
                >
                  🗑️
                </button>
              </div>
            );
          })}
          <button
            className={styles.add_button}
            onClick={(e) => {
              handleAdd(e, setSkills);
            }}
          >
            +
          </button>

          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      ) : (
        <div className={styles.card} style={bgStyle}>
          <img src={user.profile} alt="" className={styles.profile} />
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.occupation}>{user.occupation}</p>
          <div className={styles.subcard_left}>
            <h3 className={styles.subheading}>About Me</h3>
            <p className={styles.aboutme}>{user.aboutme}</p>
          </div>
          <div className={styles.subcard_right}>
            <h3 className={styles.subheading}>Education</h3>
            <ul className={styles.list_conatiner}>
              {education.map((elem, idx) => {
                return <li key={idx}>{elem}</li>;
              })}
            </ul>
          </div>
          <div className={styles.subcard_left}>
            <h3 className={styles.subheading}>Skills</h3>
            <ul className={styles.list_conatiner}>
              {skills.map((elem, idx) => {
                return <li key={idx}>{elem}</li>;
              })}
            </ul>
          </div>
          <div className={styles.subcard_right}>
            <h3 className={styles.subheading}>Work Experience</h3>
            <ul className={styles.list_conatiner}>
              {workExp.map((elem, idx) => {
                return <li key={idx}>{elem}</li>;
              })}
            </ul>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.subheading}>Contact</h3>
            <ul className={styles.list_conatiner}>
              <li>
                {" "}
                <b>Email: </b> {user.email}
              </li>
              <li>
                {" "}
                <b>Linkedin: </b> {user.linkedin}
              </li>
              <li>
                <b>Phone: </b> {user.phone}
              </li>
              <li>
                <b>Address: </b> {user.address}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BiodataDisplayer;
