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
      <div>123</div>
    </div>
  );
};

export default Main;
