import styles from "./index.module.scss";
const Main = () => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.topItemCurrency}
        src="/icons/icon_currency.png"
        alt=""
      />
      <p>364</p>
      <img className={styles.topItemPlus} src="/icons/icon_plus.png" alt="" />
    </div>
  );
};

export default Main;
