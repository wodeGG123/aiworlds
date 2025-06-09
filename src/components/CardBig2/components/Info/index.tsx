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
          <div className={styles.drawerContentTop}>
            <p>
              养成
              <img src="/img/yc_info_underline.png" alt="" />
            </p>
            <div>
              <div className={styles.drawerContentTopItem}>
                <img src="/img/home_right_coin.png" alt="" />
                <p>9999</p>
                <span></span>
              </div>
              <div className={styles.drawerContentTopItem}>
                <img src="/img/home_right_sp.png" alt="" />
                <p>99992</p>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
