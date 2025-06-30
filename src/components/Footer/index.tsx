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
        // router.push("/journey/content");
      } else {
        // router.push("/user/login");
      }
    });
  }, []);
  const routerGo = (url: string) => {
    router.push(url);
  };
  return (
    <div className={styles.wrap}>
      <div>
        <img src="/icons/icon_menu_1.png" alt="" />
        <p>庄园</p>
      </div>
      <div>
        <img src="/icons/icon_menu_2.png" alt="" />
        <p>融合</p>
      </div>
      <div>
        <img src="/icons/icon_menu_3.png" alt="" />
        <p>冒险</p>
      </div>
      <div>
        <img src="/icons/icon_menu_4.png" alt="" />
        <p>圣物</p>
      </div>
      <div>
        <img src="/icons/icon_menu_5.png" alt="" />
        <p>猎魔人</p>
      </div>
    </div>
  );
};

export default Main;
