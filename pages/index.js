import styles from "../styles/Home.module.css";
import carbon from "../public/carbon.png";
import scroll from "../public/scrollDown.png";
import InputPage from "../components/InputPage";
import { Link } from "react-scroll";

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Carbon Footprint</h1>
          <p className={styles.para}>
            A carbon footprint is the total greenhouse gas emissions caused by
            an individual, event, organization, service , place or product,
            expressed as carbon dioxide equivalent
          </p>
        </div>
        <img
          className={styles.img}
          src={carbon.src}
          alt="carbonfootrpint.png"
        />
      </div>
      <Link
        to="inputWrapper"
        className={styles.scrollLink}
        spy={true}
        smooth={true}
        duration={500}
      >
        estimate carbon footprint
        <img src={scroll.src} />
      </Link>
      <InputPage />
    </>
  );
};

export default Index;
