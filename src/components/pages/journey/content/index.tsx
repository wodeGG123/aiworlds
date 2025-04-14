import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Button from "@mui/material/Button";
import CardStory from "@/components/CardStory";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import Modal from "@mui/material/Modal";
import systemContent from "./systemContent";
import { SSE } from "@/lib/sse.js";
import Typewriter from "../components/TypeWriter";
import Fighter from "../components/Fighter";
import _ from "lodash";
import npcList from "@/lib/npclist";
import ev from "@/lib/ev";
function replaceAllEscapes(str) {
  console.log("pre str", str);

  // 替换实际特殊字符
  str = str.replace(/[\r\n\t\f\v]/g, "");
  str = str.replace(/[\\r\\n\\t\\f\\v]/g, "");
  // 替换字面转义符
  str = str.replace(/\\(.)/g, (match, char) => {
    // 可根据需要处理特定转义符，例如保留反斜杠本身
    // if (char === "\\") return ""; // 保留双反斜杠中的一个
    return ""; // 其他转义符替换为空格
  });
  console.log("end str", str);

  return str;
}
const transfer = (list) => {
  let rs = [];
  let _list = list.split("$");
  let option: any = {
    type: "option",
    content: [],
  };
  let fight: any = {
    type: "fight",
    content: [],
  };
  _list.forEach((item) => {
    // if (item.includes("[场景]")) {
    //   rs.push({
    //     type: "scene",
    //     content: item.replaceAll("[场景]", ""),
    //   });
    // }
    if (item.includes("[旁白]")) {
      rs.push({
        type: "narration",
        content: item.replaceAll("[旁白]", ""),
      });
    }
    if (item.includes("[对话]")) {
      const dialog = item.replaceAll("[对话]", "").split("=>");
      rs.push({
        type: "dialogue",
        name: dialog[0].replaceAll("(", "").replaceAll(")", ""),
        content: dialog[1],
      });
    }
    if (item.includes("[选项]")) {
      option.content.push(item.replaceAll("[选项]", ""));
    }
    if (item.includes("[战斗]")) {
      const _fight = item.split("[战斗]");
      if (_fight[0].includes("=>")) {
        const fighter = _fight[0].split("=>");
        const obj: any = npcList.find((item) =>
          fighter[0].includes(item.character)
        );
        fight.content.push({
          ...obj,
          name: obj.character,
          src: `/img/赤壁之战/人物/${obj.character}/0.png`,
        });
      }
      // rs.push({
      //   type: "fight",
      //   content: fight[0],
      // });
    }
  });

  if (option.content.length !== 0 && fight.content.length === 0) {
    rs.push(option);
  }
  if (fight.content.length !== 0) {
    rs.push(fight);
  }

  return rs;
};
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

let msgs = [
  {
    role: "system",
    content: systemContent,
  },
];

const Main = () => {
  const [status, setStatus] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState(false);
  const [current, setCurrent] = useState(false);
  const [scene, setScene] = useState("/img/赤壁之战/场景/清江峡口/0.png");
  const [step, setStep] = useState("-1");

  useEffect(() => {
    // if(current.type === 'narration'){
    // }
  }, [current]);
  const currentNPCsrc = useMemo(() => {
    let rs = "/npc/1.jpg";
    if (current.type === "dialogue") {
      const obj: any = npcList.find((item) =>
        current.name.includes(item.character)
      );
      rs = `/img/赤壁之战/人物/${obj.character}/1.png`;
    }
    return rs;
  }, [current]);
  useEffect(() => {
    console.log("step", step);
    if (step !== "-1" && content) {
      setCurrent(false);
      setTimeout(() => {
        if (Number(step) >= content.length) {
          setStep("-1");
          setContent(false);
          setCurrent(false);
          return;
        } else {
          const _current = content[Number(step)];
          setCurrent(_current);
        }
      }, 100);
    }
  }, [step, content]);
  useEffect(() => {
    if (content && step === "-1") {
      setStep(String(Number(step) + 1));
      console.log("content", content);
    }
  }, [step, content]);
  const getScene = (t) => {
    for (let index = 0; index < ev.length; index++) {
      const element = ev[index];
      if (t.includes(element)) {
        setScene(`/img/赤壁之战/场景/${element}/0.png`);
        return;
      }
    }
  };
  const startAI = (item: any) => {
    setOpen(true);
    setStep("-1");
    setContent(false);
    setCurrent(false);
    if (item) {
      console.log(item);

      msgs.push({
        role: "user",
        content: item,
      });
    }
    const params = {
      model: "deepseek-v3-250324",
      messages: [{ role: "user", content: JSON.stringify(msgs) }],
      stream: true,
      max_tokens: 512,
      temperature: 0.7,
      top_p: 1,
      top_k: 1,
      frequency_penalty: 0,
      response_format: { type: "text" },
      n: 1,
    };
    const sse = new SSE(
      "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
      {
        method: "POST",
        start: false,
        debug: true,
        headers: {
          Authorization: "Bearer a5cccc9b-116e-40e1-9009-0c0f8fe56eb8",
          "Content-Type": "application/json",
        },
        payload: JSON.stringify(params),
      }
    );
    let t = "";
    sse.addEventListener("message", (e) => {
      try {
        let _t = _.get(e, ["data"], "");
        if (_t === "[DONE]") {
          msgs.push({
            role: "assistant",
            content: t,
          });
          console.log("t", t);
          // t = t.replaceAll("\\n", "");
          // t = t.replaceAll("\\", "");
          // t = t.replaceAll(" ", "");
          t = replaceAllEscapes(t);
          getScene(t);
          t = transfer(t);
          setContent(t);
          setOpen(false);
          return;
        }
        _t = JSON.parse(_t);
        _t = _.get(_t, ["choices", "0", "delta", "content"], "");
        t += _t;
      } catch (error) {
        console.log(error);
      }
    });
    sse.stream();
  };

  const handleClick = (item: any) => {
    startAI(item);
  };
  const handleClose = () => setOpen(false);
  return (
    <div
      className={styles.wrap}
      style={{
        backgroundImage: `url(${scene})`,
      }}
    >
      <div className={styles.npc}>
        <img src={currentNPCsrc} alt="" />
      </div>
      <div
        className={styles.content}
        onClick={() => {
          setStep(String(Number(step) + 1));
        }}
      >
        {current && current.type !== "option" && current.type !== "fight" && (
          <Typewriter
            role={current?.name || ""}
            text={current?.content || ""}
            // onFinish={() => {
            //   goNext();
            // }}
          />
        )}
        {current && current.type === "fight" && current.content.length > 0 && (
          <Fighter
            elm={current.content}
            onClick={(res: any) => {
              handleClick(res);
            }}
          />
        )}
      </div>

      <div className={styles.backWrap}>
        <img
          src="/icons/forward.png"
          alt=""
          onClick={() => {
            startAI("");
          }}
        />
      </div>

      {current && current.type === "option" && (
        <div className={styles.selection}>
          <Button
            variant="outlined"
            onClick={() => {
              handleClick("选择选项1");
            }}
          >
            {current.content[0]}
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handleClick("选择选项2");
            }}
          >
            {current.content[1]}
          </Button>
        </div>
      )}

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.loadingWrap}>
          <div className={styles.loader}></div>
        </div>
      </Modal>
    </div>
  );
};

export default Main;
