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
  quality = 1,
  star = 1,
  url = "/img/card_temp.png",
}: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  const qualityMap = {
    1: "white",
    2: "blue",
    3: "green",
    4: "orange",
    5: "purple",
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.cardWrap}>
        <img src={url} alt="" className={styles.cardImg} />
        <div
          className={styles.cardBorder}
          style={{
            backgroundImage: `url("/img/card/purple_border_style.png")`,
          }}
        ></div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Main;
