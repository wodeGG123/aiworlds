import { useState } from "react";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import CardFight from "@/components/CardFight";
const ItemCompontent = () => {
  return (
    <div className={styles.contentItem}>
      <Card size="small" />
      <div className={styles.swalWrap}>
        <LevelLine />
        <p>曹操 +3</p>
      </div>
    </div>
  );
};

const Main = () => {
  const [status, setStatus] = useState(0);
  return (
    <div className={styles.wrap}>
      <div className={styles.enemy}>
        <div>
          <CardFight name="曹操" level="3" />
          <CardFight name="曹操" level="3" />
          <CardFight name="曹操" level="3" />
          <CardFight name="曹操" level="3" />
        </div>
      </div>
      <div className={styles.myArmy}>
        <img
          src="/icons/seal.png"
          alt=""
          className={styles.seal}
          onClick={() => {
            setStatus(1);
          }}
        />
        <div>
          <CardFight name="曹操" level="3" type={0} />
          <CardFight name="曹操" level="3" type={0} />
          <CardFight name="曹操" level="3" type={0} />
          <CardFight name="曹操" level="3" type={0} />
        </div>
      </div>
      {status === 1 && (
        <div className={styles.status}>
          <img
            src="/icons/capture-successful.png"
            alt=""
            onClick={() => {
              setStatus(2);
            }}
          />
        </div>
      )}
      {status === 2 && (
        <div className={styles.status}>
          <img
            src="/icons/capture-failed.png"
            alt=""
            onClick={() => {
              setStatus(3);
            }}
          />
        </div>
      )}
      {status === 3 && (
        <div className={styles.status}>
          <img
            src="/icons/succsess.png"
            alt=""
            onClick={() => {
              setStatus(4);
            }}
          />
          <p>经验: +3264</p>
          <p>金币: +236</p>
        </div>
      )}
      {status === 4 && (
        <div className={styles.status}>
          <img
            src="/icons/failed.png"
            alt=""
            onClick={() => {
              setStatus(5);
            }}
          />
        </div>
      )}
      {status === 5 && (
        <div className={styles.status}>
          <img src="/icons/bingo.png" alt="" />
          <p>获得命运卡</p>
          <div>
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
