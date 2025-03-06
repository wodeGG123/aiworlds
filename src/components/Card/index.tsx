import styles from "./index.module.scss";
import Info from "./components/Info";
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

const Main = ({ size = "big", name, level }: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  return (
    <div
      className={styles.wrap}
      style={{
        width,
        height,
      }}
    >
      <div>
        <Info>
          <img src="/img/card.png" alt="" />
        </Info>
        <p style={{ fontSize }}>lv: 99</p>
      </div>
      {name && (
        <h5>
          {name} +{level}
        </h5>
      )}
    </div>
  );
};

export default Main;
