import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import request from "@/utils/request";
import localforage from "localforage";

const Main = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    localforage.getItem("raw-cards").then((rawCards) => {
      const rawCardsObj = rawCards.reduce((acc, current) => {
        // 将当前对象的id作为键，对象本身作为值存入累加器
        acc[current.id] = current;
        return acc;
      }, {});
      console.log("rawCardsObj", rawCardsObj);
      request({
        method: "get",
        url: "/api/user/cards",
      }).then((res) => {
        const _data = res.data.map((card) => {
          return rawCardsObj[card.card_id];
        });
        setData(_data);
        console.log("cards", res);
      });
      request({
        method: "get",
        url: "/api/lineup",
      }).then((res) => {
        const _activeData = res.data.cards.map((card) => {
          return rawCardsObj[card.card_id];
        });
        setActiveData(_activeData);
        console.log("lineup", res);
      });
    });
  }, []);

  const exraData = useMemo(() => {
    const activeDataSet = new Set(
      activeData.map((item) => {
        return item.id;
      })
    );

    const rs = [];
    data.forEach((element) => {
      if (!activeDataSet.has(element.id)) rs.push(element);
    });
    return rs;
  }, [activeData, data]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.activeCard}>
          {activeData.map((card) => {
            return (
              <div>
                <Card
                  size="mid"
                  name={card?.name}
                  level="3"
                  quality={card?.quality}
                  star="3"
                  url={`/img/猎魔人/猎魔人角色/${card?.name}/1.jpg`}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.cardContent}>
          <div>
            {exraData.map((card) => {
              return (
                <div>
                  <Card
                    size="mid"
                    name={card?.name}
                    level="3"
                    quality={card?.quality}
                    star="3"
                    url={`/img/猎魔人/猎魔人角色/${card?.name}/1.jpg`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
