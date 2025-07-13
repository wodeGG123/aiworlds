import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Main = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.activeCard}>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" quality="blue" star="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
          <div>
            <Card size="mid" name="曹操" level="3" />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.cardContent}>
          <div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="99" star="5" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" quality="orange" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
            <div>
              <Card size="mid" name="曹操" level="3" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
