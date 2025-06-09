import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import { useState } from "react";

const Main = ({ children }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div
        onClick={() => {
          setShow(true);
        }}
      >
        {children}
      </div>
      <Drawer
        anchor="left"
        open={show}
        onClose={() => {
          setShow(false);
        }}
        className={styles.drawerWrap}
      >
        <div className={styles.drawerContent}>
          <div className={styles.content}>
            <h3>曹操 +3</h3>
            <img src="/img/card.png" alt="" />
            <div>
              <span>经验：</span>
              <div>4564/5046</div>
            </div>
            <p>Lv 100</p>
            <p>战斗力: 2867</p>
          </div>
          <div className={styles.pan}>
            <div className={styles.panData}>
              <dl className={styles.itemWrap}>
                <dt>
                  <img src="/icons/sword.png" alt="" />
                </dt>
                <dd>99999</dd>
              </dl>
              <dl className={styles.itemWrap}>
                <dt>
                  <img src="/icons/shield.png" alt="" />
                </dt>
                <dd>99999</dd>
              </dl>
              <dl className={styles.itemWrap}>
                <dt>
                  <img src="/icons/blood.png" alt="" />
                </dt>
                <dd>99999</dd>
              </dl>
              <dl className={styles.itemWrap}>
                <dt>
                  <img src="/icons/shoe.png" alt="" />
                </dt>
                <dd>99999</dd>
              </dl>
            </div>
            <div className={styles.panLine}>
              <img src="/icons/line.png" alt="" />
            </div>
            <div className={styles.panAbility}>
              <div className={styles.panAbilityItem}>
                <img src="/icons/hm.png" alt="" />
              </div>
              <div className={styles.panAbilityCnLine}>
                <img src="/icons/cnctline.png" alt="" />
              </div>
              <div className={styles.panAbilityItem}>
                <img src="/icons/hm.png" alt="" />
              </div>
              <div className={styles.panAbilityCnLine}>
                <img src="/icons/cnctline.png" alt="" />
              </div>
              <div className={styles.panAbilityItem}>
                <img src="/icons/hm.png" alt="" />
              </div>
              <div className={styles.panAbilityCnLine}>
                <img src="/icons/cnctline.png" alt="" />
              </div>
              <div className={styles.panAbilityItem}>
                {/* <img src="/icons/hm.png" alt="" /> */}
              </div>
            </div>
            <div className={styles.panButtonWrap}>
              <div
                className={styles.panButton}
                onClick={() => {
                  setShow(false);
                }}
              >
                <h5>进阶</h5>
                <p>
                  <img src="/icons/c.png" alt="" />
                  <span>1000</span>
                </p>
              </div>
            </div>
          </div>
          <span
            className={styles.close}
            onClick={() => {
              setShow(false);
            }}
          >
            X
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
