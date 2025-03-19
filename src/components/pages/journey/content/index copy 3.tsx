import React, { useState } from "react";
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
let completeText = "";
let currentText = "";

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
  const [step, setStep] = useState("-1");

  useEffect(() => {
    // if(current.type === 'narration'){
    // }
  }, [current]);
  const getCurrent = () => {
    const types = [
      {
        type: "narration",
        label: "旁白",
      },
      {
        type: "dialogue",
        label: "对话",
      },
      {
        type: "option",
        label: "选项",
      },
      {
        type: "fight",
        label: "战斗",
      },
    ];

    if (currentText.includes(`[旁白]`)) {
      if (currentText.includes(`$`)) {
        // debugger;
        currentText = "";
      } else {
        setCurrent({
          type: `narration`,
          content: currentText.replace(`[旁白]`, ""),
        });
      }
    }
    if (currentText.includes(`[对话]`) && currentText.includes(`$`)) {
      let _t = currentText.replace(`[对话]`, "").replace(`$`, "");
      const dialog = _t.split("=>");
      setCurrent({
        type: "dialogue",
        name: dialog[0].replace("(", "").replace(")", ""),
        content: dialog[1],
      });
      currentText = "";
    }
  };

  const textTransfer = (_t: string) => {
    try {
      if (_t === "[DONE]") {
        msgs.push({
          role: "assistant",
          content: completeText,
        });
        console.log("completeText", completeText);
        completeText = completeText.replaceAll("\n", "");
        completeText = completeText.replaceAll(" ", "");
        console.log("completeText", completeText);
        return;
      }
      _t = JSON.parse(_t);
      _t = _.get(_t, ["choices", "0", "delta", "content"], "");
      completeText += _t;
      currentText += _t;
      getCurrent();
    } catch (error) {
      console.log(error);
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
      model: "deepseek-ai/DeepSeek-V3",
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
    const sse = new SSE("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST",
      start: false,
      debug: true,
      headers: {
        Authorization:
          "Bearer sk-sdgjqigfyugwuouguoxpmllpikenslumxqlqsoqcpeoojpbi",
        "Content-Type": "application/json",
      },
      payload: JSON.stringify(params),
    });

    sse.addEventListener("message", (e) => {
      textTransfer(_.get(e, ["data"], ""));
      setOpen(false);
    });
    sse.stream();
  };

  const handleClick = (item: any) => {
    startAI(item);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.npc}>
        <img src="/img/npc.jpg" alt="" />
      </div>
      <div
        className={styles.content}
        onClick={() => {
          setStep(String(Number(step) + 1));
        }}
      >
        {current &&
          current.type !== "option" &&
          current.type !== "fight" &&
          current?.content}
        {current && current.type === "fight" && (
          <Fighter
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
      {/* {current && current.type === "fight" && (
        <div className={styles.selection}>
          <Button
            variant="outlined"
            onClick={() => {
              handleClick("战斗胜利");
            }}
          >
            战斗胜利
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handleClick("战斗失败");
            }}
          >
            战斗失败
          </Button>
        </div>
      )} */}

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
