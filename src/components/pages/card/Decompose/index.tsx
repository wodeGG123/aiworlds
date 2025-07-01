import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.cardContent}>
          <div>
            <div>
              <Card size="mid" name="曹操" level="3" />
              <div className={styles.checkedWrap}>
                <img src="/img/yc_decompose_checked.png" alt="" />
              </div>
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" quality="blue" star="3" />
              <div className={styles.checkedWrap}>
                <img src="/img/yc_decompose_checked.png" alt="" />
              </div>
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
              <div className={styles.checkedWrap}>
                <img src="/img/yc_decompose_checked.png" alt="" />
              </div>
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="99" star="5" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" quality="orange" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
          </div>
        </div>
        <div className={styles.toolsWrap}>
          <div className={styles.toolsContent}>
            <div className={styles.toolsContentTop}>
              <div
                className={`${styles.toolsContentItem} ${styles.toolsContentItemGreen}`}
              >
                <div>
                  <div className={styles.checkedWrap}>
                    <img src="/img/yc_decompose_checked.png" alt="" />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.toolsContentItem} ${styles.toolsContentItemBlue}`}
              >
                <div></div>
              </div>
              <div
                className={`${styles.toolsContentItem} ${styles.toolsContentItemPurple}`}
              >
                <div></div>
              </div>
              <div
                className={`${styles.toolsContentItem} ${styles.toolsContentItemYellow}`}
              >
                <div></div>
              </div>
            </div>
            <div className={styles.toolsContentBottom}>
              <div className={styles.toolsContentButton}>确认</div>
              <div className={styles.toolsContentInfo}>
                <div>
                  <img src="/img/home_right_coin.png" alt="" />
                  <span>9999999</span>
                </div>
                <p>批量分解等级1,未上阵英灵,预计获得</p>
              </div>
              <div
                className={styles.toolsContentBottomClose}
                onClick={() => {
                  router.push("/config");
                }}
              >
                <img src="/img/yc_decompose_close.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
