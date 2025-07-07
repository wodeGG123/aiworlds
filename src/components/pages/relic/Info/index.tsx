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
        <h5>Wandering Knight</h5>
        <h2>Secret Mask</h2>
        <div>
          <img src="/icons/star2.png" alt="" />
          <img src="/icons/star2.png" alt="" />
          <img src="/icons/star2.png" alt="" />
          <img src="/icons/star2.png" alt="" />
          <img src="/icons/star2.png" alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <img src="/img/relic.png" alt="" />
        </div>
      </div>
      <div className={styles.description}>
        <p>
          故事描述：的撒回家的哈萨克觉得哈萨克觉得哈萨克就的就撒开了多久ask了解到卢萨卡就打死了大家撒赖扩大上来看大家撒开绿灯撒赖看
        </p>
        <ul>
          <li>
            <img src="" alt="" />
            <p>Darkness Attack</p>
            <span>2.241</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <img src="/icons/Button_tiny_arrowleft.png" alt="" />
        <img src="/icons/bt1.png" alt="" />
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

export default Main;
