"use client";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useEffect } from "react";
import localforage from "localforage";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    localforage.getItem("access_token").then((data) => {
      console.log(data);
      if (data) {
        router.push("/journey/content");
      } else {
        // router.push("/user/login");
      }
    });
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.levelWrap}>
          <span>Lv 60</span>
        </div>
        <div className={styles.topItemWrap}>
          <p>狐狸弟弟</p>
          <p>ID: 3785364</p>
        </div>
      </div>
      <div className={styles.leftWrap}>
        <div className={styles.leftItem}>
          <img src="/img/home_email.png" alt="" />
          <p>邮件</p>
        </div>
        <div className={styles.leftItem}>
          <img src="/img/home_task.png" alt="" />
          <p>任务</p>
        </div>
      </div>
      <div className={styles.rightWrap}>
        <div className={styles.rightItem}>
          <img src="/img/home_right_coin.png" alt="" />
          <p>9999</p>
          <span></span>
        </div>
        <div className={styles.rightItem}>
          <img src="/img/home_right_sp.png" alt="" />
          <p>99992</p>
          <span></span>
        </div>
      </div>
      <div className={styles.bottomWrap}>
        <div style={{ visibility: "hidden" }}>
          <img src="/icons/set.png" alt="" />
          <p>
            <Link href="/config">异常</Link>
          </p>
        </div>
        <div>
          <Link href="/journey/list">
            <img src="/img/home_bottom_center.png" alt="" />
          </Link>

          <p>50</p>
        </div>
        <div>
          <Badge color="secondary" variant="dot">
            <img src="/img/home_bottom_right.png" alt="" />
          </Badge>
          <p>异常</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
