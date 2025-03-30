import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import CardFight from "@/components/CardFight";
let res = "战斗胜利";
const logs = [];
const ItemCompontent = () => {
  return (
    <div className={styles.contentItem}>
      <Card size="small" />
      <div className={styles.swalWrap}>
        <LevelLine />
        <p>曹操 +3</p>
      </div>
    </div>
  );
};

const Main = ({ onClick = () => {}, elm = [] }) => {
  const [status, setStatus] = useState(0);
  const [log, setLog] = useState("");
  const [roundNumber, setRoundNumber] = useState(0);
  const [actionCharacter, setActionCharacter] = useState("");
  const [_teamA, set_teamA] = useState([]);
  const [_teamB, set_teamB] = useState([]);
  useEffect(() => {
    // 基础设定
    const battleMode = "多角色小队战";
    const characterAttributes = {
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    };
    const skillTypes = ["物理攻击", "魔法攻击", "治疗"];
    const skillTrigger = { type: "概率触发", probability: 1 };
    const winCondition = "全灭敌方";
    // 角色类
    class Character {
      constructor(name, attributes) {
        this.name = name;
        this.health = attributes.health;
        this.attack = attributes.attack;
        this.defense = attributes.defense;
        this.speed = attributes.speed;
        this.isAlive = true;
        this.isAttack = false;
        this.isAttacked = false;
      }

      // 物理攻击技能
      physicalAttack(target) {
        if (Math.random() < skillTrigger.probability) {
          let damage = this.attack - target.defense;
          if (damage < 0) damage = 0;
          target.health -= damage;
          if (target.health <= 0) {
            target.health = 0;
            target.isAlive = false;
          }
          this.uiChange(target);
          return `[${this.name}]  使用物理攻击对 [${target.name}]  造成了 ${damage} 点伤害`;
        }

        return `[${this.name}]  物理攻击未触发`;
      }

      // 魔法攻击技能
      magicAttack(target) {
        if (Math.random() < skillTrigger.probability) {
          let damage = this.attack - target.defense;
          if (damage < 0) damage = 0;
          target.health -= damage;
          if (target.health <= 0) {
            target.health = 0;
            target.isAlive = false;
          }
          this.uiChange(target);
          return `[${this.name}]  使用魔法攻击对 [${target.name}]  造成了 ${damage} 点伤害`;
        }
        return `[${this.name}]  魔法攻击未触发`;
      }

      // 治疗技能
      heal() {
        if (Math.random() < skillTrigger.probability) {
          const healAmount = Math.floor(Math.random() * 10) + 1;
          this.health += healAmount;
          return `[${this.name}]  使用治疗技能恢复了 ${healAmount} 点生命值`;
        }
        this.uiChange();
        return `[${this.name}]  治疗技能未触发`;
      }
      uiChange(target) {
        this.isAttack = true;
        if (target) {
          target.isAttacked = true;
        }

        setTimeout(() => {
          this.isAttack = false;

          if (target) {
            target.isAttacked = false;
          }
        }, 100);
      }
    }
    // 战斗系统类
    class BattleSystem {
      constructor(teamA, teamB) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.round = 0;
        this.isAutoBattle = false;
        this.isPaused = false;
        this.animationSkipped = false;
        this.rounding = false;
      }

      // 初始化界面
      initUI() {
        set_teamA([...this.teamA]);
        set_teamB([...this.teamB]);
      }

      // 更新界面
      updateUI() {
        set_teamA([...this.teamA]);
        set_teamB([...this.teamB]);
      }

      // 检查是否满足胜利条件
      checkWinCondition() {
        const teamAAlive = this.teamA.some((character) => character.isAlive);
        const teamBAlive = this.teamB.some((character) => character.isAlive);
        if (!teamAAlive) {
          res = "战斗失败";
          setStatus(3);
          return "Team B 胜利";
        } else if (!teamBAlive) {
          res = "战斗胜利";
          setStatus(4);
          return "Team A 胜利";
        }
        return null;
      }

      // 速度决定行动顺序
      getActionOrder() {
        const allCharacters = [...this.teamA, ...this.teamB].filter(
          (character) => character.isAlive
        );
        return allCharacters.sort((a, b) => b.speed - a.speed);
      }

      // 一个回合的战斗流程
      async roundBattle() {
        this.round++;
        setRoundNumber(this.round);
        const actionOrder = this.getActionOrder();
        for (let i = 0; i < actionOrder.length; i++) {
          const currentCharacter = actionOrder[i];
          setActionCharacter(currentCharacter.name);
          let log = "";
          if (this.teamA.includes(currentCharacter)) {
            const aliveEnemies = this.teamB.filter(
              (character) => character.isAlive
            );
            if (aliveEnemies.length > 0) {
              const target =
                aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
              const skillIndex = Math.floor(Math.random() * skillTypes.length);
              switch (skillTypes[skillIndex]) {
                case "物理攻击":
                  log = currentCharacter.physicalAttack(target);
                  break;
                case "魔法攻击":
                  log = currentCharacter.magicAttack(target);
                  break;
                case "治疗":
                  log = currentCharacter.heal();
                  break;
              }
            }
          } else {
            // AI 行为：随机攻击
            const aliveEnemies = this.teamA.filter(
              (character) => character.isAlive
            );
            if (aliveEnemies.length > 0) {
              const target =
                aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
              const skillIndex = Math.floor(Math.random() * skillTypes.length);
              switch (skillTypes[skillIndex]) {
                case "物理攻击":
                  log = currentCharacter.physicalAttack(target);
                  break;
                case "魔法攻击":
                  log = currentCharacter.magicAttack(target);
                  break;
                case "治疗":
                  log = currentCharacter.heal();
                  break;
              }
            }
          }
          setLog(log);
          logs.push(log);
          this.updateUI();
          const winResult = this.checkWinCondition();
          if (winResult) {
            // alert(winResult);
            console.log(logs.join("\n"));
            return;
          }
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(1);
            }, 1000);
          });
        }
        this.rounding = false;
      }

      // 自动战斗
      async autoBattle() {
        this.isAutoBattle = true;
        if (!this.rounding) {
          if (!this.isPaused) {
            const winResult = this.checkWinCondition();
            if (!winResult) {
              this.rounding = true;
              await this.roundBattle();
              await this.autoBattle();
            }
          }
        }
      }
    }
    const A = ["百事", "丘处机", "一灯大师", "王重阳"];

    // 创建角色
    // const characterA1 = new Character("A1", {
    //   health: 100,
    //   attack: 20,
    //   defense: 10,
    //   speed: 15,
    // });
    // const characterA2 = new Character("A2", {
    //   health: 100,
    //   attack: 25,
    //   defense: 8,
    //   speed: 20,
    // });
    // const characterB1 = new Character("B1", {
    //   health: 100,
    //   attack: 18,
    //   defense: 12,
    //   speed: 12,
    // });
    // const characterB2 = new Character("B2", {
    //   health: 100,
    //   attack: 22,
    //   defense: 9,
    //   speed: 18,
    // });

    // const teamA = [characterA1, characterA2];
    // const teamB = [characterB1, characterB2];
    const teamA = elm.map((item: any, index: number) => {
      return new Character(`${A[index]}【我方】`, {
        health: 100,
        attack: Number(item.attack),
        defense: Number(item.defense),
        speed: Number(item.speed),
      });
    });
    const teamB = elm.map((item: any) => {
      return new Character(`${item.name}【敌方】`, {
        health: 100,
        attack: Math.max(Number(item.attack), Number(item.defense)) + 10,
        defense: Math.min(Number(item.attack), Number(item.defense)) - 10,
        speed: Number(item.speed),
      });
    });
    const battleSystem = new BattleSystem(teamA, teamB);
    battleSystem.initUI();
    battleSystem.autoBattle();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.buttons}>
        {/* <button id="auto-battle">自动战斗</button>
        <button id="pause" disabled>
          暂停
        </button>
        <button id="skip-animation">跳过动画</button> */}
        <div id="info-display">
          <p>
            当前回合数: <span id="round-number">{roundNumber}</span>
          </p>
          <p>
            行动角色: <span id="action-character">{actionCharacter}</span>
          </p>
          <p>
            战斗日志: <span id="battle-log">{log}</span>
          </p>
        </div>
      </div>
      <div className={styles.enemy}>
        <div>
          {_teamB.map((item: any) => {
            return <CardFight name="曹操" level="3" data={item} />;
          })}
        </div>
      </div>
      <div className={styles.myArmy}>
        <img
          src="/icons/seal.png"
          alt=""
          className={styles.seal}
          onClick={() => {
            setStatus(1);
          }}
        />
        <div>
          {_teamA.map((item: any) => {
            return <CardFight name="曹操" level="3" data={item} type={0} />;
          })}
        </div>
      </div>
      {status === 1 && (
        <div className={styles.status}>
          <img
            src="/icons/capture-successful.png"
            alt=""
            onClick={() => {
              setStatus(2);
            }}
          />
        </div>
      )}
      {status === 2 && (
        <div className={styles.status}>
          <img
            src="/icons/capture-failed.png"
            alt=""
            onClick={() => {
              setStatus(3);
            }}
          />
        </div>
      )}
      {status === 3 && (
        <div className={styles.status}>
          <img
            src="/icons/succsess.png"
            alt=""
            onClick={(e) => {
              onClick(res);
              e.preventDefault();
              e.stopPropagation();
            }}
          />
          <p>经验: +3264</p>
          <p>金币: +236</p>
        </div>
      )}
      {status === 4 && (
        <div className={styles.status}>
          <img
            src="/icons/failed.png"
            alt=""
            onClick={(e) => {
              onClick(res);
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>
      )}
      {status === 5 && (
        <div className={styles.status}>
          <img src="/icons/bingo.png" alt="" />
          <p>获得命运卡</p>
          <div>
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
            <img src="/img/jn1.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
