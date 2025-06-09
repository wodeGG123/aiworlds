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
  const routerGo = (url: string) => {
    router.push(url);
  };
  return (
    <div className={styles.wrap}>
      <div>
        <img src="/img/home_bottom_left.png" alt="" />
        <p>
          <Link href="/config">公司</Link>
        </p>
      </div>
      <div>
        <Link href="/journey/list">
          <img src="/img/home_bottom_center.png" alt="" />
        </Link>

        <p>50</p>
      </div>
      <div
        onClick={() => {
          routerGo("/config");
        }}
      >
        <Badge color="secondary" variant="dot">
          <img src="/img/home_bottom_right.png" alt="" />
        </Badge>
        <p>异常</p>
      </div>
    </div>
  );
};

export default Main;
