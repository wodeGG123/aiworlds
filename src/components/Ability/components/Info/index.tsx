import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
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
        anchor="bottom"
        open={show}
        onClose={() => {
          setShow(false);
        }}
        className={styles.drawerWrap}
      >
        <div className={styles.drawerContent}>
          <p>技能说明：</p>
          <p>
            **对付单个强大的敌人**：在面对单体BOSS或者关键敌人时，可以有效降低其血量和战斗力。
            <br />
            **清理小怪**：虽然主要针对单体目标，但也可以用于快速清除一群小怪物，尤其是在关卡的早期阶段。
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
