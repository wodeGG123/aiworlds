import styles from "./index.module.scss";
import Info from "./components/Info";
const sizeMap: any = {
  big: {
    width: "150px",
    height: "200px",
    fontSize: "24px",
  },
  mid: {
    width: "100px",
    height: "136px",
    fontSize: "16px",
  },
  small: {
    width: "75px",
    height: "100px",
    fontSize: "12px",
  },
};

const Main = ({
  size = "big",
  name,
  level,
  quality = "white",
  star = 1,
  url = "/img/card_temp.png",
}: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  return (
    <div className={`${styles.wrap} ${sizeMap[size]}`}>
      <div className={styles.cardWrap}>
        <img src={url} alt="" className={styles.cardImg} />
        <div
          className={styles.cardMask}
          style={{
            backgroundImage: `url("/img/card/${quality}_mask.png")`,
          }}
        ></div>
        <img
          src={`/img/card/star_${star}.png`}
          alt=""
          className={styles.cardStar}
        />
        <div
          className={styles.cardBorder}
          style={{
            backgroundImage: `url("/img/card/${quality}_border.png")`,
          }}
        ></div>
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Main;
