import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { withRouter } from "next/router";
import { useState } from "react";
import request from "@/utils/request";
import Modal from "@mui/material/Modal";

const Main = ({ router }) => {
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(router);
  const handleDecompose = () => {
    request({
      method: "post",
      url: "/api/card/decompose",
      data: [router.query.id],
    });
  };
  const handleUpgreade = () => {
    request({
      method: "post",
      url: "/api/card/upgrade",
      data: {
        id: router.query.id,
      },
    });
  };
  return (
    <div className={styles.wrap}>
      <img src="/img/Hero_01.jpg" alt="" />
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img src="/img/card/card_top_left.svg" alt="" />
          <span>奥赛罗二</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightItem}>
            <img src="/icons/icon_currency.png" alt="" />
            <span>297</span>
          </div>
          <div className={styles.topRightItem}>
            <img src="/icons/icon_currency.png" alt="" />
            <span>297</span>
          </div>
          <div className={styles.topRightItem}>
            <img src="/icons/icon_currency2.svg" alt="" />
            <span>297</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.contentLeftLv}>
            <span>99</span>
            <img
              src="/icons/bt1.png"
              alt=""
              onClick={() => {
                handleUpgreade();
              }}
            />
          </div>
          <div className={styles.contentLeftLvPrs}>
            <img src="/icons/icon_currency.png" alt="" />
            <span>30/19</span>
          </div>
          <ul className={styles.contentLeftInfo}>
            <li>力量: 93</li>
            <li>智慧: 93</li>
            <li>灵巧: 93</li>
            <li>体质: 93</li>
            <li>速度: 93</li>
          </ul>
        </div>
        <div className={styles.contentRight}>
          <ul className={styles.contentRightItem}>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              <img src="/icons/state.svg" alt="" />
              <span>力劈华山</span>
            </li>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
          </ul>
          <div className={styles.contentRightDivider}>
            <img src="/icons/line2.png" alt="" />
          </div>
          <ul className={styles.contentRightItem}>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              <img src="/icons/state.svg" alt="" />
              <span>力劈华山</span>
            </li>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
            <li>
              <img src="/icons/state.svg" alt="" />
              <span>普通攻击</span>
            </li>
          </ul>
        </div>
        <div className={styles.contentArrow}>
          <img src="/img/arrow_left.png" alt="" />
          <img src="/img/arrow_right.png" alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <img src="/icons/Button_tiny_arrowleft.png" alt="" />
        <img
          src="/icons/bt1.png"
          alt=""
          onClick={() => {
            handleDecompose();
          }}
        />
        <img
          style={{ visibility: "hidden" }}
          src="/icons/Button_tiny_arrowleft.png"
          alt=""
        />
      </div>
      <Modal className={styles.modalWrap} open={open} onClose={handleClose}>
        <div
          className={styles.modalContentWrap}
          onClick={() => {
            setOpen(false);
          }}
        >
          <div>
            技能描述：力劈华山是《梦幻西游》中召唤兽的强力物理攻击技能，其核心机制是通过对比己方与目标的物理伤害差值，对低物理防御单位造成爆发性伤害。发动时，技能会临时提升命中率（公式为LV*2+10），显著增强攻击稳定性
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default withRouter(Main);
