import styles from "./index.module.scss";
import Link from "next/link";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import Resource from "@/components/Resource";
import Footer from "@/components/Footer";

const Main = () => {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      <div className={styles.resourceWrap}>
        <Resource />
      </div>
      <div className={styles.content}>
        <div
          className={styles.contentItem}
          onClick={() => {
            router.push("/journey/start");
          }}
        >
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
        <div className={styles.contentItem}>
          <img
            src="/img/journey_img_2.png"
            className={styles.contentItemBg}
            alt=""
          />
          <div className={styles.contentTextWrap}>
            <h5>Chapter 2</h5>
            <h3>Cursed Dragon</h3>
            <img src="/icons/journey_list_line.png" alt="" />
          </div>
          <div className={styles.contentNumberWrap}>
            <img src="/icons/journey_icon_1.svg" alt="" />
            <span>10/20</span>
          </div>
        </div>
        <div className={styles.contentItem}>
          <img
            src="/img/journey_img_1.png"
            className={styles.contentItemBg}
            alt=""
          />
          <div className={styles.contentTextWrap}>
            <h5>Chapter 2</h5>
            <h3>Cursed Dragon</h3>
            <img src="/icons/journey_list_line.png" alt="" />
          </div>
          <div className={styles.contentNumberWrap}>
            <img src="/icons/journey_icon_1.svg" alt="" />
            <span>10/20</span>
          </div>
        </div>
        <div className={styles.contentItem}>
          <img
            src="/img/journey_img_1.png"
            className={styles.contentItemBg}
            alt=""
          />
          <div className={styles.contentTextWrap}>
            <h5>Chapter 2</h5>
            <h3>Cursed Dragon</h3>
            <img src="/icons/journey_list_line.png" alt="" />
          </div>
          <div className={styles.contentNumberWrap}>
            <img src="/icons/journey_icon_1.svg" alt="" />
            <span>10/20</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
