import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Ability from "@/components/Ability";
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
          <div className={styles.cardWrap}>
            <div className={styles.card}>
              <img src="/img/ev.jpg" alt="" />
            </div>
            <h3>赤壁之战</h3>
          </div>

          <div className={styles.ability}>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
            </div>
            <div>
              <Ability />
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
