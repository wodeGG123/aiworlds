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
        在东汉末年，曹操率领大军南下攻打刘备和孙权联军。在赤壁这个地方，周瑜与诸葛亮联手制定了火攻策略。诸葛亮借东风之助，
        安排士兵用草船诱敌，然后点燃船只将火势蔓延至曹军的战船。
        <br />
        大火迅速蔓延开来，曹军船只失火，加上风势加剧，最终导致大量船只燃烧并倾覆。曹操的大军在水面上遭受重创，损失惨重。这
        场以少胜多的经典战役扭转了三国时期的局势，奠定了孙刘联盟的基础。
      </div>
      <div className={styles.backWrap}>
        <img src="/icons/forward.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
