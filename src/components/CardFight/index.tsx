import styles from "./index.module.scss";
import Info from "./components/Info";
import "animate.css";

const sizeMap: any = {
  big: {
    width: 150,
    height: 200,
    fontSize: 24,
  },
  mid: {
    width: 100,
    height: 136,
    fontSize: 16,
  },
  small: {
    width: 75,
    height: 100,
    fontSize: 12,
  },
};

const Main = ({
  size = "big",
  name,
  level,
  type = 1,
  data = {
    name: "A1",
    health: 39,
    attack: 20,
    defense: 10,
    speed: 15,
    isAlive: true,
    isAttack: false,
    isAttacked: false,
  },
}: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;

  return (
    <div
      className={`${styles.wrap} animate__animated ${
        data.isAttack ? "animate__rotateIn" : ""
      } 
      ${data.isAttacked ? "animate__wobble" : ""}`}
    >
      <div className={styles.card}>
        {type === 1 && <img src="/img/card2.png" alt="" />}
        {type === 0 && <img src="/img/card.png" alt="" />}
        <p>lv: {level}</p>
      </div>
      <h5>{data.name}</h5>
      <div className={styles.blood}>
        <div style={{ width: `${data.health}%` }}></div>
      </div>
      <div className={styles.speed}>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
