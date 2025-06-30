import { useState } from "react";
import styles from "./index.module.css";
const Main = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.loadingWrap}>
      <p>80%</p>
      <div>
        <div style={{ width: "80%" }}></div>
      </div>
    </div>
  );
};
export default Main;
