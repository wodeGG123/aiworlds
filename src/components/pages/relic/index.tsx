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
        <div className={styles.activeCard}>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" quality="blue" star="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
        </div>
        <div className={styles.divider}>
          <p>战力值: 599999</p>
        </div>
        <div className={styles.cardContent}>
          <div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
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
      </div>
      <div className={styles.buttonsWrap}>
        <div className={styles.buttonItem}>上阵</div>
        <div
          className={styles.buttonItem}
          onClick={() => {
            router.push("/config/decompose");
          }}
        >
          分解
        </div>
      </div>
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
