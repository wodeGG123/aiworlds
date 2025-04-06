import styles from "./index.module.scss";
import Info from "./components/Info";
import "animate.css";
import { useMemo } from "react";

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
    animationType: "", //attack、attacked=>10、heal=>10
  },
}: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  console.log(data);

  const animationClass = useMemo(() => {
    if (!data.isAlive) return styles.dead;
    let rs = "";
    if (!data.animationType) return rs;
    const animationType = data.animationType.split("=>");
    if (animationType[0] === "attack") {
      rs = "animate__flip";
    }
    if (animationType[0] === "heal") {
      rs = "animate__pulse";
    }
    if (animationType[0] === "attacked") {
      rs = "animate__flash";
    }
    return rs;
  }, [data]);
  const bloodDi = useMemo(() => {
    let rs = {
      class: "",
      value: "",
    };
    if (!data.animationType) return rs;
    const animationType = data.animationType.split("=>");
    if (animationType[0] === "heal") {
      rs.class = `animate__fadeOutUp ${styles.bloodAdd}`;
      rs.value = `+${animationType[1]}`;
    }
    if (animationType[0] === "attacked") {
      rs.class = `animate__fadeOutUp ${styles.bloodLoss}`;
      rs.value = `-${animationType[1]}`;
    }
    return rs;
  }, [data]);

  return (
    <div className={`${styles.wrap} animate__animated ${animationClass}`}>
      <div className={styles.card}>
        {type === 1 && <img src={data.src || "/npc/2.jpg"} alt="" />}
        {type === 0 && <img src={data.src || "/npc/1.jpg"} alt="" />}
        <p>lv: {level}</p>
      </div>
      <h5>{data.name.split("【")[0]}</h5>
      <div className={styles.blood}>
        <div style={{ width: `${data.health}%` }}></div>
      </div>
      <div className={styles.speed}>
        <div></div>
      </div>
      <div className={`${styles.bloodDi} animate__animated ${bloodDi.class}`}>
        <p>{bloodDi.value}</p>
      </div>
    </div>
  );
};

export default Main;
