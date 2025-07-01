"use client";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useEffect } from "react";
import localforage from "localforage";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    // localforage.getItem("access_token").then((data) => {
    //   if (data) {
    //     router.push("/journey/content");
    //   } else {
    //     router.push("/user/login");
    //   }
    // });
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.userWrap}>
          <span>狐狸弟弟</span>
        </div>
        <div className={styles.topItemWrap}>
          <img
            className={styles.topItemCurrency}
            src="/icons/icon_currency.png"
            alt=""
          />
          <p>364</p>
          <img
            className={styles.topItemPlus}
            src="icons/icon_plus.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
