import styles from "./index.module.scss";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <span>
          <img src="/icons/coin.png" alt="" />
          99999
          <img src="/icons/plus.png" alt="" />
        </span>
        <span>
          <img src="/icons/fire.png" alt="" />
          99999
        </span>
      </div>
    </div>
  );
};

export default Main;
