import styles from "./index.module.scss";
import Link from "next/link";
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
      </div>
      <div className={styles.backWrap}>
        <Link href="/">
          <img src="/icons/back.png" alt="" />
        </Link>
        <Link href="/journey/start">
          <img src="/icons/forward.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
