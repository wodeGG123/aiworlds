import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Relic from "@/components/Relic";
import LevelLine from "@/components/LevelLine";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Main = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.cardContent}>
          <div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="red" level="3" />
            </div>
            <div>
              <Relic size="mid" name="曹操" level="3" quality="blue" star="3" />
            </div>
            <div>
              <Relic
                size="mid"
                name="曹操"
                level="3"
                quality="green"
                star="3"
              />
            </div>
            <div>
              <Relic size="mid" name="曹操" quality="purple" level="3" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
