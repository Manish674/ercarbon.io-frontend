import styles from "../styles/Input.module.css";
import { useState } from "react";

const InputPage = () => {
  const [data, setData] = useState({
    transportation: "",
    recycle: "",
    diet: "",
    location: "",
    energy: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { transportation, recycle, diet, location, energy } = data;
    setData({
      ...data,
      transportation: "",
      recycle: "",
      diet: "",
      location: "",
      energy: "",
    });

    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "applicatio/json",
        body: {
          data: {
            transportation,
            recycle,
            diet,
            location,
            energy,
          },
        },
      },
    });

    const promise = response.json();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className={styles.wrapper}>
          <span className={styles.inputWrapper} id="inputWrapper">
            <label className={styles.label}>Location</label>
            <input
              name="location"
              className={styles.textInput}
              onChange={(e) => handleOnChange(e)}
              value={data.location}
              placeholder="zipcode"
            />
          </span>

          <span className={styles.inputWrapper}>
            <label htmlFor="energy" className={styles.label}>
              Energy
            </label>
            <select
              className={styles.input}
              onChange={(e) => handleOnChange(e)}
              name="energy"
              value={data.energy}
            >
              <option value=""> </option>
              <option value="something">something</option>
              <option value="something2">something2</option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <label className={styles.label}>Transportation</label>
            <select
              value={data.transportation}
              onChange={(e) => handleOnChange(e)}
              name="transportation"
              className={styles.input}
              defaultValue=""
            >
              <option value=""> </option>
              <option value="personal">Personal</option>
              <option value="public">Public</option>
              <option value="air rail">Air rail</option>
              <option value="bus">Bus</option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <label className={styles.label}>Recycle</label>
            <select
              onChange={(e) => handleOnChange(e)}
              value={data.recycle}
              name="recycle"
              className={styles.input}
              defaultValue="false"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <label className={styles.label}>Diet</label>
            <select
              onChange={(e) => handleOnChange(e)}
              name="diet"
              className={styles.input}
              defaultValue=""
              value={data.diet}
            >
              <option value=""> </option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non vegetarian">Non Vegetarian</option>
              <option value="snack drinks">Snacks Drinks</option>
            </select>
          </span>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputPage;
