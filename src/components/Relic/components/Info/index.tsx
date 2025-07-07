import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import CardBig from "@/components/CardBig";
import CardBig2 from "@/components/CardBig2";
import LevelLine from "@/components/LevelLine";
import { useState } from "react";

const Main = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const [updated, setUpdated] = useState(false);
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
        {updated ? (
          <div className={styles.drawerUpdated}>
            <div className={styles.drawerUpdatedTop}>
              <img src="/img/yc_update_text_wrap.png" alt="" />
              <img src="/img/yc_update_text.png" alt="" style={{ top: 14 }} />
            </div>
            <div className={styles.drawerUpdatedCard}>
              <CardBig2 size="mid" name="曹操" level="99" star="5" />
            </div>
            <div className={styles.drawerUpdatedSum}>
              <ul>
                <li>
                  <span>等级上限</span>
                  <p>
                    <span>100</span>
                    <img src="/img/yc_update_arrow.png" alt="" />
                    <span>200</span>
                  </p>
                  <span>(+185)</span>
                </li>
                <li>
                  <span>攻击</span>
                  <p>
                    <span>100</span>
                    <img src="/img/yc_update_arrow.png" alt="" />
                    <span>200</span>
                  </p>
                  <span>(+185)</span>
                </li>
                <li>
                  <span>防御</span>
                  <p>
                    <span>100</span>
                    <img src="/img/yc_update_arrow.png" alt="" />
                    <span>200</span>
                  </p>
                  <span>(+185)</span>
                </li>
                <li>
                  <span>血量</span>
                  <p>
                    <span>100</span>
                    <img src="/img/yc_update_arrow.png" alt="" />
                    <span>200</span>
                  </p>
                  <span>(+185)</span>
                </li>
                <li>
                  <span>速度</span>
                  <p>
                    <span>100</span>
                    <img src="/img/yc_update_arrow.png" alt="" />
                    <span>200</span>
                  </p>
                  <span>(+185)</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.drawerUpdatedConfirm}
              onClick={() => {
                setUpdated(false);
              }}
            >
              <h2>确认</h2>
            </div>
          </div>
        ) : (
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
            <div className={styles.drawerContentMid}>
              <div>
                <CardBig size="mid" name="曹操" level="99" star="5" />
              </div>
            </div>
            <div className={styles.drawerContentBallWrap}>
              <img src="/img/yc_divider.png" alt="" />
              <div>
                <div className={styles.drawerContentBall}>
                  <img src="/img/card/white_ball.png" alt="" />
                </div>
                <div className={styles.drawerContentBallLine}>
                  <img src="/img/yc_info_ball_line.png" alt="" />
                </div>
                <div className={styles.drawerContentBall}>
                  <img src="/img/card/blue_ball.png" alt="" />
                </div>
                <div className={styles.drawerContentBallLine}>
                  <img src="/img/yc_info_ball_line.png" alt="" />
                </div>
                <div className={styles.drawerContentBall}>
                  <img src="/img/card/orange_ball.png" alt="" />
                </div>
                <div className={styles.drawerContentBallLine}>
                  <img src="/img/yc_info_ball_line.png" alt="" />
                </div>
                <div className={styles.drawerContentBall}>
                  <img src="/img/card/purple_ball.png" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.drawerContentUpdate}>
              <div
                onClick={() => {
                  setUpdated(true);
                }}
              >
                <h5>进阶</h5>
                <p>
                  <img src="/img/home_right_coin.png" alt="" />
                  <span>1000</span>
                </p>
              </div>
            </div>
            <div className={styles.drawerContentArrow}>
              <img
                src="/img/yc_info_left.png"
                alt=""
                className={styles.drawerContentArrowLeft}
              />
              <img
                src="/img/yc_info_right.png"
                alt=""
                className={styles.drawerContentArrowRight}
              />
            </div>
            <div className={styles.drawerContentBottom}>
              <img
                src="/img/back.png"
                alt=""
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Main;
