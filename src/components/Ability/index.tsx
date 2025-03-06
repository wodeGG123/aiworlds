import styles from "./index.module.scss";
import Info from "./components/Info";

const Main = ({}: any) => {
  return (
    <div className={styles.wrap}>
      <Info>
        <img src="/img/jn1.png" alt="" />
      </Info>
    </div>
  );
};

export default Main;
