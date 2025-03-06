import { useState } from "react";
import styles from "./index.module.scss";
import Coin from "@/components/Coin";
import Card from "@/components/Card";
import LevelLine from "@/components/LevelLine";
import Button from "@mui/material/Button";
import CardStory from "@/components/CardStory";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import systemContent from "./systemContent";
import { SSE } from "@/lib/sse.js";
import Typewriter from "../components/TypeWriter";
import _ from "lodash";

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
let t = "";
let msgs = [
  {
    role: "system",
    content: systemContent,
  },
];

const Main = () => {
  const [status, setStatus] = useState(0);
  const [content, setContent] = useState(false);
  const [current, setCurrent] = useState(false);
  const [step, setStep] = useState(0);
  const [dialogStep, setDialogStep] = useState(0);
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
  const goNext = () => {
    setCurrent(false);
    setTimeout(() => {
      if (t[step].type === "narration") {
        setCurrent(t[step]);
        setStep(step + 1);
        setDialogStep(0);
      }
      if (t[step].type === "dialogue") {
        setCurrent(t[step]["content"][dialogStep]);
        if (dialogStep + 1 >= t[step]["content"].length) {
          setStep(step + 1);
        } else {
          setDialogStep(dialogStep + 1);
        }
      }
      if (t[step].type === "option") {
        setCurrent(t[step]);
        t = "";
      }
    }, 100);
  };
  const start = () => {
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
      try {
        let _t = _.get(e, ["data"], "");
        if (_t === "[DONE]") {
          t = t.replaceAll("```json", "");
          t = t.replaceAll("```", "");
          msgs.push({
            role: "assistant",
            content: t,
          });
          t = JSON.parse(t);
          // setContent(t);
          setStep(0);
          setTimeout(() => {
            goNext();
          }, 100);
          console.log("t", t);
          // t = "";
          return;
        }
        _t = JSON.parse(_t);
        console.log(_t);
        _t = _.get(_t, ["choices", "0", "delta", "content"], "");
        t += _t;
      } catch (error) {
        console.log(error);
      }
    });
    sse.stream();
  };

  const handleClick = (item) => {
    setCurrent(false);
    setStep(0);
    setDialogStep(0);
    t = "";
    msgs.push({
      role: "user",
      content: item,
    });
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
      try {
        let _t = _.get(e, ["data"], "");
        if (_t === "[DONE]") {
          t = t.replaceAll("```json", "");
          t = t.replaceAll("```", "");
          msgs.push({
            role: "assistant",
            content: t,
          });
          t = JSON.parse(t);
          // setContent(t);

          if (t.length === 3) {
            setStep(0);
          } else {
            setStep(1);
          }
          setTimeout(() => {
            goNext();
          }, 100);
          console.log("t", t);
          // t = "";
          return;
        }
        _t = JSON.parse(_t);
        console.log(_t);
        _t = _.get(_t, ["choices", "0", "delta", "content"], "");
        t += _t;
      } catch (error) {
        console.log(error);
      }
    });
    sse.stream();
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.npc}>
        {!dialogStep && <img src="/img/npc.jpg" alt="" />}
        {dialogStep === 1 && <img src="/img/2.jpg" alt="" />}
        {dialogStep === 2 && <img src="/img/3.jpg" alt="" />}
        {dialogStep === 3 && <img src="/img/4.jpg" alt="" />}
      </div>
      <div
        className={styles.content}
        onClick={() => {
          goNext();
        }}
      >
        {current && current.type !== "option" && (
          <Typewriter
            role={current?.name || ""}
            text={current?.content || ""}
            // onFinish={() => {
            //   goNext();
            // }}
          />
        )}
      </div>

      <div className={styles.backWrap}>
        <img
          src="/icons/forward.png"
          alt=""
          onClick={() => {
            start();
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
    </div>
  );
};

export default Main;
