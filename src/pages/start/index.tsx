import { useState } from "react";
import styles from "./index.module.css";
const Main = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={styles.wrap}
      style={
        loading
          ? {
              backgroundImage: 'url("/img/start_loading_bg.jpg")',
            }
          : {}
      }
    >
      <img src="/icons/logo.svg" alt="" />
      <p>Knight of Valheim</p>
    </div>
  );
};
export default Main;
