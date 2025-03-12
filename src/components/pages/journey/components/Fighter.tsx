import { useEffect } from "react";
import Typewriter from "../components/TypeWriter";

let progressTXT = "";
class GameCharacter {
  constructor(name, options = {}) {
    // 基础属性

    this.name = name; // 角色名称 [1]()

    this.level = 1; // 等级 [6]()

    this.exp = 0; // 经验值 [6]()

    this.occupation = "战士"; // 职业分类 [9]() // 战斗核心属性

    this.attack = options.attack || 10; // 攻击力 [1]()[8]()

    this.defense = options.defense || 5; // 防御力 [13]()

    this.speed = options.speed || 100; // 速度 [13]()

    this.health = options.health || 100; // 血量 [1]()

    this.maxHealth = this.health; // 最大血量 [13]() // 扩展属性

    this.critRate = 0.1; // 暴击率 [13]()

    this.dodgeRate = 0.05; // 闪避率 [13]()

    this.status = "alive"; // 状态（alive/dead） [9]()
  }

  // 攻击方法 [1]()[8]()

  attackTarget(target) {
    const isCrit = Math.random() < this.critRate;

    const damage = isCrit
      ? Math.floor(this.attack * 1.5 - target.defense)
      : Math.floor(this.attack - target.defense);

    if (damage > 0) {
      target.receiveDamage(damage);

      const t = `${this.name}${isCrit ? "暴击！" : ""}对${
        target.name
      } 造成${damage}点伤害`;
      progressTXT += t;
      console.log(t);
    } else {
      const t = `${target.name} 防御了本次攻击`;
      progressTXT += t;
      console.log(t);
    }
  }

  // 承受伤害 [13]()

  receiveDamage(damage) {
    if (Math.random() < this.dodgeRate) {
      const t = `${this.name} 闪避了攻击！`;
      progressTXT += t;
      console.log(t);
      return;
    }

    this.health = Math.max(0, this.health - damage);

    if (this.health === 0) {
      this.status = "dead";
      const t = `${this.name} 已阵亡`;
      progressTXT += t;
      console.log(t);
    }
  }

  // 恢复血量 [13]()

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    const t = `${this.name} 恢复${amount}点生命，当前生命值：${this.health}`;
    progressTXT += t;
    console.log(t);
  }
}

class BattleManager {
  constructor(teamA, teamB) {
    this.teamA = teamA; // 队伍A

    this.teamB = teamB; // 队伍B

    this.round = 1; // 当前回合数
  }

  // 判断队伍状态

  checkTeamDefeated(team) {
    return team.every((c) => c.status === "dead");
  }

  // 获取存活角色列表

  getAliveMembers(team) {
    return team.filter((c) => c.status === "alive");
  }

  // 战斗主循环

  startBattle() {
    const t = "=====  战斗开始! =====";
    progressTXT += t;
    console.log(t);

    while (true) {
      // 获取存活成员并按速度排序
      const t = `\n===  第 ${this.round}  回合 ===`;
      progressTXT += t;
      console.log(t);
      const aliveA = this.getAliveMembers(this.teamA);

      const aliveB = this.getAliveMembers(this.teamB);

      const allFighters = [...aliveA, ...aliveB].sort(
        (a, b) => b.speed - a.speed
      ); // 执行角色行动

      for (const fighter of allFighters) {
        if (fighter.status === "dead") continue; // 确定攻击目标阵营

        const isAttackerA = this.teamA.includes(fighter);

        const targetTeam = isAttackerA ? aliveB : aliveA;

        if (targetTeam.length === 0) break; // 随机选择目标

        const target =
          targetTeam[Math.floor(Math.random() * targetTeam.length)];

        fighter.attackTarget(target); // 实时检查战斗状态

        if (this.checkTeamDefeated(this.teamB)) {
          const t = "\n=====  队伍A 胜利! =====";
          progressTXT += t;
          console.log(t);
          return;
        }

        if (this.checkTeamDefeated(this.teamA)) {
          const t = "\n=====  队伍B 胜利! =====";
          progressTXT += t;
          console.log(t);
          return;
        }
      }

      this.round++;

      if (this.round > 100) {
        // 防止无限循环

        const t = "战斗超时，判定平局！";
        progressTXT += t;
        console.log(t);
        break;
      }
    }
  }
}

const Main = () => {
  useEffect(() => {
    // 测试用例

    const teamA = [
      new GameCharacter("红方战士", { attack: 15, health: 120 }),
      new GameCharacter("红方法师", { attack: 20, defense: 2 }),
    ];

    const teamB = [
      new GameCharacter("蓝方刺客", { attack: 18, speed: 120 }),
      new GameCharacter("蓝方牧师", { defense: 8, health: 150 }),
    ];

    const battle = new BattleManager(teamA, teamB);
    battle.startBattle();
  }, []);
  return <></>;
};
export default Main;
