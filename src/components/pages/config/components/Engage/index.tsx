import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
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
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <img
        src="/icons/set.png"
        alt=""
        onClick={() => {
          setShow(true);
        }}
      />
      <p>上阵</p>
      <Drawer
        anchor="left"
        open={show}
        onClose={() => {
          setShow(false);
        }}
        className={styles.drawerWrap}
      >
        <div className={styles.drawerContent}>
          <div className={styles.cardContent}>
            <div>
              <div>
                <Card size="mid" name="曹操" level="3" />
              </div>
              <div>
                <Card
                  size="mid"
                  name="曹操"
                  level="3"
                  quality="blue"
                  star="3"
                />
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
              <div>
                <Card size="mid" name="曹操" level="3" />
              </div>
              <div>
                <Card size="mid" name="曹操" level="3" />
              </div>
            </div>
          </div>
          <div className={styles.backWrap}>
            <img
              src="/img/back.png"
              alt=""
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
