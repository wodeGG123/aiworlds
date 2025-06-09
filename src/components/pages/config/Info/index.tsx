import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const Main = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={`${styles.quality} ${styles.purple}`}>
          <img src="/img/card/star_4.png" alt="" />
        </div>
        <div className={styles.title}>
          <h2>曹操</h2>
          <h4>意识曹操</h4>
        </div>
      </div>
      <div className={styles.content}>
        <img src="/img/card/purple.png" alt="" />
        <div className={styles.contentLeft}>
          <div className={styles.contentLeftLv}>
            <span>Lv: 99</span>
            <img src="/img/update.png" alt="" />
          </div>

          <ul className={styles.contentLeftInfo}>
            <li>
              <div>
                <img src="/img/gemstone.png" alt="" />
              </div>
              <p>4564 / 5046</p>
            </li>
            <li>
              <div>
                <img src="/img/info_1.png" alt="" />
              </div>
              <p>
                <span>力量: 93</span>
                <span>资质: 45</span>
              </p>
            </li>
            <li>
              <div>
                <img src="/img/info_2.png" alt="" />
              </div>
              <p>
                <span>力量: 93</span>
                <span>资质: 45</span>
              </p>
            </li>
            <li>
              <div>
                <img src="/img/info_3.png" alt="" />
              </div>
              <p>
                <span>力量: 93</span>
                <span>资质: 45</span>
              </p>
            </li>
            <li>
              <div>
                <img src="/img/info_4.png" alt="" />
              </div>
              <p>
                <span>力量: 93</span>
                <span>资质: 45</span>
              </p>
            </li>
            <li>
              <div>
                <img src="/img/info_5.png" alt="" />
              </div>
              <p>
                <span>力量: 93</span>
                <span>资质: 45</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.contentRight}>
          <ul className={styles.contentRightItem1}>
            <li>普通攻击</li>
            <li
              onClick={() => {
                setOpen(true);
              }}
            >
              力劈华山
            </li>
            <li>普通攻击</li>
            <li>力劈华山</li>
          </ul>
          <ul className={styles.contentRightItem2}>
            <li>威震天下</li>
            <li>水淹七军</li>
            <li>普通攻击</li>
            <li>过关斩将</li>
          </ul>
        </div>
        <div className={styles.contentArrow}>
          <img src="/img/arrow_left.png" alt="" />
          <img src="/img/arrow_right.png" alt="" />
        </div>
      </div>
      <div className={styles.baseInfo}>
        <ul>
          <li>
            <div>
              <img src="/img/base_1.png" alt="" />
            </div>
            <span>血量: 999</span>
          </li>
          <li>
            <div>
              <img src="/img/base_2.png" alt="" />
            </div>
            <span>攻击: 999</span>
          </li>
          <li>
            <div>
              <img src="/img/base_3.png" alt="" />
            </div>
            <span>法术: 999</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <img src="/img/back.png" alt="" />
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

export default Main;
