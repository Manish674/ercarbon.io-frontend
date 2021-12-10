import styles from "../styles/Input.module.css";
import { useState } from "react";

const InputPage = () => {
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <span className={styles.inputWrapper} id="inputWrapper">
            <lable className={styles.label}>Location</lable>
            <input className={styles.textInput} placeholder="zipcode" />
          </span>

          <span className={styles.inputWrapper}>
            <lable className={styles.label}>Energy</lable>
            <select className={styles.input}>
              <option value=""></option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <lable className={styles.label}>Transportation</lable>
            <select className={styles.input}>
              <option value="">Personal</option>
              <option value="">Public</option>
              <option value="">Air rail</option>
              <option value="">Bus</option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <lable className={styles.label}>Recycle</lable>
            <select className={styles.input}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </span>

          <span className={styles.inputWrapper}>
            <lable className={styles.label}>Diet</lable>
            <select className={styles.input}>
              <option value="">Vegan</option>
              <option value="">Vegetarian</option>
              <option value="">Non Vegetarian</option>
              <option value="">Snacks Drinks</option>
            </select>
          </span>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputPage;
