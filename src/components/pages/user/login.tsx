import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Relic from "@/components/Relic";
import LevelLine from "@/components/LevelLine";
import Tooltip from "@mui/material/Tooltip";
import localforage from "localforage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import request from "@/utils/request";
import Modal from "@mui/material/Modal";

const Main = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.wrap}>
      <img src="/icons/logo.png" alt="" />
      <h4>Knight of Valheim</h4>
      <div className={styles.content}>
        <h3>Welcome to the World</h3>
        <img src="/icons/line2.png" alt="" />
        <div className={styles.inputItem1}>
          <form action="">
            <input
              type="text"
              className={styles.input}
              placeholder="username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>
        </div>
        <div className={styles.inputItem2}>
          <form action="">
            <input
              type="password"
              className={styles.input}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>
        </div>
        <div
          className={styles.bt}
          onClick={() => {
            request({
              url: "/api/user/login",
              method: "post",
              data: {
                username: name,
                password: password,
              },
            }).then((res) => {
              localforage.setItem("access_token", res.data.access_token);
              console.log(res);
              request({
                url: "/api/user/cards",
                method: "get",
              }).then((res) => {
                console.log(res);

                const myCardsReq = [];
                for (let index = 0; index < res.data.length; index++) {
                  const element = res.data[index];
                  myCardsReq.push(
                    request({
                      url: "/api/card/info",
                      method: "get",
                      params: {
                        cardId: element.card_id,
                      },
                    })
                  );
                }
                Promise.all(myCardsReq).then((res) => {
                  console.log(res);
                  const myCards = [];
                  for (let index = 0; index < res.length; index++) {
                    const element = res[index];
                    myCards.push(element.data);
                  }
                  localforage.setItem("my-cards", myCards);
                });
                router.push("/home");
              });
            });
          }}
        >
          <img src="/icons/bt_login.png" alt="" />
        </div>
        <h3>New to the World</h3>
      </div>
    </div>
  );
};

export default Main;
