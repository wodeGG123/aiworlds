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
import Narration from "../components/Narration";
import Dialogue from "../components/Dialogue";
import Options from "../components/Options";
import Fighter from "../components/Fighter";
import _ from "lodash";
import npcList from "@/lib/npclist";
import localforage from "localforage";
import { useRouter } from "next/navigation";
import ev from "@/lib/ev";
import yaml from "js-yaml";

let tag = false;
function extractYamlBlocks(text, options = {}) {
  const { trim = true, allowPlainBlock = false } = options;
  const pattern = allowPlainBlock
    ? /```(?:yaml)?\n([\s\S]+?)\n```/g
    : /```yaml\n([\s\S]+?)\n```/g;

  const matches = [];
  let match;
  while ((match = pattern.exec(text)) !== null) {
    let content = match[1];
    if (trim) content = content.trim();
    matches.push(content);
  }

  return matches;
}

let msgs = [
  {
    role: "system",
    content: systemContent,
  },
];

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = useState("");
  const [scene, setScene] = useState("/img/map.jpg");
  const [role, setRole] = useState("/img/1.png");
  const [data, setData] = useState({});

  const router = useRouter();

  const startAI = (item: any) => {
    setOpen(true);
    if (item) {
      console.log(item);

      msgs.push({
        role: "user",
        content: item,
      });
    }
    const params = {
      model: "deepseek-v3-250324",
      messages: msgs,
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
          t = t.replaceAll(`"`, "");
          console.log("t", t);
          const ttt = extractYamlBlocks(t);
          const parsed = yaml.load(ttt); // 验证 YAML 是否合法
          console.log("parsed", parsed);
          setData(parsed);
          setStep("Narration");
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

  useEffect(() => {
    if (!tag) {
      startAI("");
      tag = true;
    }
  }, []);
  useEffect(() => {
    if (data.event_scene) {
      setScene(`/img/猎魔人/猎魔人场景/${data.event_scene}/1.jpg`);
    }
  }, [data]);
  return (
    <div
      className={styles.wrap}
      style={{
        backgroundImage: `url(${scene})`,
      }}
    >
      <div className={styles.role}>
        <img src={role} alt="" />
      </div>
      <div className={styles.content}>
        {step === "Narration" && (
          <Narration
            onClick={() => {
              if (data.event_dialogue) {
                setStep("Dialogue");
              } else if (data.battle_start) {
                setStep("Fighter");
              }
            }}
            data={data.event_narration}
          />
        )}
        {step === "Dialogue" && (
          <Dialogue
            onSpeaker={(role) => {
              setRole(`/img/猎魔人/猎魔人角色/${role}/2.jpg`);
            }}
            onClick={() => {
              if (data.event_options) {
                setStep("Options");
              } else if (data.battle_start) {
                setStep("Fighter");
              }
            }}
            data={data.event_dialogue}
          />
        )}
        {data.event_options && step === "Options" && (
          <Options
            onClick={(o) => {
              setStep("");
              startAI(o);
            }}
            data={data.event_options}
          />
        )}
      </div>
      {data.battle_start && step === "Fighter" && (
        <Fighter
          onClick={(o) => {
            setStep("");
            startAI(o);
          }}
          elm={data.battle_start.enemies}
        />
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
