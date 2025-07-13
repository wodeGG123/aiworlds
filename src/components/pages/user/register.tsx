import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Relic from "@/components/Relic";
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
      <img src="/icons/logo.png" alt="" />
      <h4>Knight of Valheim</h4>
      <div className={styles.content}>
        <h3>Welcome to the World</h3>
        <img src="/icons/line2.png" alt="" />
        <div className={styles.inputItem1}>
          <input type="text" className={styles.input} placeholder="username" />
        </div>
        <div className={styles.inputItem2}>
          <input
            type="password"
            className={styles.input}
            placeholder="password"
          />
        </div>
        <div className={styles.inputItem2}>
          <input
            type="password"
            className={styles.input}
            placeholder="Confirm password"
          />
        </div>
        <div className={styles.bt}>
          <img src="/icons/bt_create.png" alt="" />
        </div>
        <h3>Already have an account</h3>
      </div>
    </div>
  );
};

export default Main;
