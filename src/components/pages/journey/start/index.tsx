import styles from "./index.module.scss";
import Link from "next/link";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import Resource from "@/components/Resource";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.resourceWrap} style={{ visibility: "hidden" }}>
        <Resource />
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <img
            src="/img/journey_img_1.png"
            className={styles.contentItemBg}
            alt=""
          />
          <div className={styles.contentTextWrap}>
            <h5>Chapter 1</h5>
            <h3>Cursed Dragon</h3>
            <img src="/icons/journey_list_line.png" alt="" />
          </div>
          <div className={styles.contentNumberWrap}>
            <img src="/icons/journey_icon_1.svg" alt="" />
            <span>10/20</span>
          </div>
        </div>
      </div>
      <div className={styles.achievements}>
        <dl>
          <dt>
            <span>血月</span>
          </dt>
          <dd>~腐化达到30</dd>
          <dd>~总共冒险达到130/200轮的撒大苏打实打实大苏打实打实 大萨达萨达</dd>
          <dd>~触发剧情：爱的供养</dd>
        </dl>
        <dl>
          <dt>
            <span>血月</span>
          </dt>
          <dd>~腐化达到30</dd>
          <dd>~总共冒险达到130/200轮的撒大苏打实打实大苏打实打实 大萨达萨达</dd>
          <dd>~触发剧情：爱的供养</dd>
        </dl>
        <dl>
          <dt>
            <span>血月</span>
          </dt>
          <dd>~腐化达到30</dd>
          <dd>~总共冒险达到130/200轮的撒大苏打实打实大苏打实打实 大萨达萨达</dd>
          <dd>~触发剧情：爱的供养</dd>
        </dl>
      </div>
      <div className={styles.bottom}>
        <img src="/icons/Button_tiny_arrowleft.png" alt="" />
        <img src="/icons/bt1.png" alt="" style={{ visibility: "hidden" }} />
        <img src="/icons/Button_tiny_arrowright.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
