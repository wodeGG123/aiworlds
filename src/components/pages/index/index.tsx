"use client";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
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
        router.push("/user/login");
      }
    });
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.topWrap}>
        <img src="/img/TOUXIANG1.png" alt="" />
        <div className={styles.topItemWrap}>
          <Coin />
          <p>狐狸弟弟</p>
          <p>45级</p>
        </div>
      </div>
      <div className={styles.bottomWrap}>
        <div>
          <img src="/icons/set.png" alt="" />
          <p>
            <Link href="/config">异常</Link>
          </p>
        </div>
        <div>
          <Link href="/journey/list">
            <img src="/icons/hammer.png" alt="" />
          </Link>

          <p>50</p>
        </div>
        <div style={{ visibility: "hidden" }}>
          <img src="/icons/set.png" alt="" />
          <p>异常</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
