import styles from "./index.module.scss";
import LevelUp from "./components/LevelUp";
const Main = ({}: any) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.swal}></div>
      <div className={styles.swal1}>等级： 9548/9548</div>
      <LevelUp />
    </div>
  );
};

export default Main;
