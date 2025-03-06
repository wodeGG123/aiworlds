import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div
        className={styles.tail}
        onClick={() => {
          setShow(true);
        }}
      >
        <p>进阶</p>
        <span>1000</span>
      </div>
      <Drawer
        anchor="top"
        open={show}
        onClose={() => {
          setShow(false);
        }}
        className={styles.drawerWrap}
      >
        <div className={styles.drawerContent}>
          <div className={styles.content}>
            <h3>升阶成功</h3>
            <Card size="big" name="曹操" level="3" />
            <ul>
              <li>
                <h5>等级上限</h5>
                <p>100</p>
                <span>&nbsp;=&gt;&nbsp;</span>
                <p>200</p>
                <p>&nbsp;(+185)</p>
              </li>
              <li>
                <h5>攻击</h5>
                <p>100</p>
                <span>&nbsp;=&gt;&nbsp;</span>
                <p>200</p>
                <p>&nbsp;(+185)</p>
              </li>
              <li>
                <h5>防御</h5>
                <p>100</p>
                <span>&nbsp;=&gt;&nbsp;</span>
                <p>200</p>
                <p>&nbsp;(+185)</p>
              </li>
              <li>
                <h5>血量</h5>
                <p>100</p>
                <span>&nbsp;=&gt;&nbsp;</span>
                <p>200</p>
                <p>&nbsp;(+185)</p>
              </li>
              <li>
                <h5>速度</h5>
                <p>100</p>
                <span>&nbsp;=&gt;&nbsp;</span>
                <p>200</p>
                <p>&nbsp;(+185)</p>
              </li>
            </ul>
          </div>
          <div className={styles.backWrap}>
            <p
              onClick={() => {
                setShow(false);
              }}
            >
              确认
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
