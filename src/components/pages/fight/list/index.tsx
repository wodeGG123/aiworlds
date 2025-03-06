import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import CardStory from "@/components/CardStory";
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
      <div className={styles.content}>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
        <div>
          <CardStory size="mid" />
        </div>
      </div>
      <div className={styles.backWrap}>
        <img src="/icons/back.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
