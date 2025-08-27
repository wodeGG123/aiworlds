import styles from "./index.module.scss";
import Drawer from "@mui/material/Drawer";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Badge from "@mui/material/Badge";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import request from "@/utils/request";
import localforage from "localforage";

const Main = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [isLineup, setIsLineup] = useState(false);
  const [selected, setSelected] = useState([]);
  const [activeDataTemp, setActiveDataTemp] = useState([]);
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);

  const selectedSet = useMemo(() => {
    return new Set(selected);
  }, [selected]);
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
          return {
            ...card,
            origin: rawCardsObj[card.card_id],
          };
        });
        setData(_data);
        console.log("cards", res);
      });
      request({
        method: "get",
        url: "/api/lineup",
      }).then((res) => {
        const _activeData = res.data.cards.map((card) => {
          return {
            ...card,
            origin: rawCardsObj[card.card_id],
          };
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
  console.log(exraData);
  const handleCard = (card, active?) => {
    if (isSelect || isLineup) {
      if (isSelect && !active) {
        if (selectedSet.has(card.id)) {
          selectedSet.delete(card.id);
        } else {
          selectedSet.add(card.id);
        }
        setSelected(Array.from(selectedSet));
      }
      if (isLineup) {
        const activeDataTempSet = new Set(activeDataTemp);
        if (activeDataTempSet.has(card.id)) {
          activeDataTempSet.delete(card.id);
          setActiveDataTemp(Array.from(activeDataTempSet));
        } else {
          if (activeDataTemp.length < 4) {
            setActiveDataTemp([...activeDataTemp, card.id]);
          }
        }
      }
    } else {
      router.push(`/card/info?${card.id}`);
    }
  };
  const getBadgeProp = (card, active?) => {
    let rs: any = {
      color: "secondary",
      badgeContent: " ",
      invisible: true,
    };
    if (isSelect || isLineup) {
      if (isSelect && !active) {
        rs.invisible = !selectedSet.has(card.id);
      }
      if (isLineup) {
        const activeDataTempSet = new Set(activeDataTemp);
        if (activeDataTempSet.has(card.id)) {
          rs.invisible = false;
          rs.badgeContent = activeDataTemp.indexOf(card.id) + 1;
        }
      }
    }
    return rs;
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.activeCard}>
          {activeData.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() => {
                  handleCard(card, true);
                }}
              >
                <Badge {...getBadgeProp(card, true)}>
                  <Card
                    size="mid"
                    name={card?.origin?.name}
                    level="3"
                    quality={card?.level}
                    star="3"
                    url={`/img/猎魔人/猎魔人角色/${card?.origin?.name}/1.jpg`}
                  />
                </Badge>
              </div>
            );
          })}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.cardContent}>
          <div>
            {exraData.map((card) => {
              return (
                <div
                  key={card.id}
                  onClick={() => {
                    handleCard(card);
                  }}
                >
                  <Badge {...getBadgeProp(card)}>
                    <Card
                      size="mid"
                      name={card?.origin.name}
                      level="3"
                      quality={card?.level}
                      star="3"
                      url={`/img/猎魔人/猎魔人角色/${card?.origin.name}/1.jpg`}
                    />
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.splitWrap}>
          {isSelect || isLineup ? (
            <>
              <img
                src="/icons/confirm.png"
                alt=""
                onClick={() => {
                  request({
                    method: "post",
                    url: "/api/card/decompose",
                    data: selected,
                  });
                  setSelected([]);
                  setIsSelect(false);
                  setIsLineup(false);
                  router.refresh();
                }}
              />
              <img
                src="/icons/cancel.png"
                onClick={() => {
                  setSelected([]);
                  setIsSelect(false);
                  setIsLineup(false);
                }}
                alt=""
              />
            </>
          ) : (
            <>
              <img
                src="/icons/lineup.png"
                onClick={() => {
                  setIsLineup(true);
                }}
                alt=""
              />
              <img
                src="/icons/split.png"
                onClick={() => {
                  setIsSelect(true);
                }}
                alt=""
              />
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
