import { useState } from "react";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Button from "@mui/material/Button";
import CardStory from "@/components/CardStory";
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

const Main = () => {
  const [status, setStatus] = useState(0);
  return (
    <div className={styles.wrap}>
      <div className={styles.npc}>
        <img src="/img/npc.jpg" alt="" />
      </div>
      <div className={styles.content}>
        1. **曹操决策**： - 曹操率领数十万大军从许昌出发，准备统一全国。 -
        他命令军队迅速行进，以便尽早抵达赤壁。 <br />
        2. **军师建议**： -
        曹操的谋士荀彧和贾诩等提出多项策略，最终决定以军事力量征服荆州。 <br />
        3. **船只准备**： - 曹操命人制作了大量的木船，并将士兵分散布置在船上。 -
        他还加固了船只之间的连接，以便形成一个巨大的战船队。 <br />
        4. **进军路线**： - 曹操选择了一条较为直接的水路，通过长江南下。 -
        他命令士兵昼夜兼程，确保大军能够迅速集结。 <br />
        5. **沿途行军**： - 大军一路上不断征召和补充兵员，壮大队伍。 -
        士兵们士气高昂，曹操亲自督战，鼓舞士气。 <br />
        6. **到达赤壁**： - 经过数日的行军，大军终于抵达了赤壁附近。 -
        曹操指挥船只停靠在岸边，并开始部署下一步行动计划。
      </div>
      {status === 0 && (
        <div className={styles.backWrap}>
          <img
            src="/icons/forward.png"
            alt=""
            onClick={() => {
              setStatus(1);
            }}
          />
        </div>
      )}
      {status === 1 && (
        <div className={styles.selection}>
          <Button variant="outlined">选项一</Button>
          <Button variant="outlined">选项二</Button>
        </div>
      )}
    </div>
  );
};

export default Main;
