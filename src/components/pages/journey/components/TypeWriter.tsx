import { useState, useEffect, useCallback } from "react";

function getRandomInt(min = 1, max = 8) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Typewriter({
  role,
  text,
  speed = 300,
  onFinish = () => {},
}) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // 分块处理长字符串 [6]()
  const typeText = useCallback(() => {
    let index = 0;
    const timer = setInterval(() => {
      const chunkSize = getRandomInt();
      const chunk = text.substring(index, index + chunkSize);
      setDisplayText((prev) => prev + chunk);
      index += chunkSize;

      if (index >= text.length) {
        clearInterval(timer);
        setShowCursor(false);
        onFinish();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  // 光标闪烁效果 [7]()
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // 启动打字效果
  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  return (
    <div className="typewriter">
      {role && `${role}：`}
      {displayText}
      <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>|</span>
    </div>
  );
}
