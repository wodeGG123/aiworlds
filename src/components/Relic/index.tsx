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
  url = "/img/card/item.png",
}: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  return (
    <div className={styles.wrap}>
      <div className={styles.cardWrap}>
        <div
          className={styles.cardTray}
          style={{
            backgroundImage: `url("/img/card/${quality}_relic_tray.png")`,
          }}
        ></div>
        <img src={url} alt="" className={styles.cardImg} />
        <div
          className={styles.cardBorder}
          style={{
            backgroundImage: `url("/img/card/${quality}_relic_border.png")`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Main;
