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
      <p>Loading</p>
      <div></div>
    </div>
  );
};
export default Main;
