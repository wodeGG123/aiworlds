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

const Main = ({ size = "big", name, level }: any) => {
  const width = sizeMap[size].width;
  const height = sizeMap[size].height;
  const fontSize = sizeMap[size].fontSize;
  return (
    <div className={`${styles.wrap} ${sizeMap[size]}`}>
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
