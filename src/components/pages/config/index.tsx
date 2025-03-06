import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Engage from "./components/Engage";
const ItemCompontent = () => {
  return (
    <div className={styles.contentItem}>
      <Card size="small" />
      <div className={styles.swalWrap}>
        <LevelLine />
        <p>曹操 +3</p>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.topWrap}>
        <Coin />
      </div>
      <div className={styles.contentWrap}>
        <ItemCompontent />
        <ItemCompontent />
        <ItemCompontent />
        <ItemCompontent />
      </div>
      <div className={styles.bottomWrap}>
        <div className={styles.bottomBlock1}>
          <Engage />
          <div>
            <img src="/icons/set.png" alt="" />
            <p>角色</p>
          </div>
        </div>
        <div className={styles.bottomBlock2}>
          <div>
            <img src="/icons/set.png" alt="" />
            <p>异常</p>
          </div>
          <div>
            <img src="/icons/hammer.png" alt="" />
            <p>50</p>
          </div>
          <div style={{ visibility: "hidden" }}>
            <img src="/icons/set.png" alt="" />
            <p>异常</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
