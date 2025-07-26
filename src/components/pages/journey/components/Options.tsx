import { useEffect, useState } from "react";
import Typewriter from "./TypeWriter";

const Main = ({ data, onClick = (o) => {} }) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li
              onClick={() => {
                onClick(item.option);
              }}
              key={item.option}
            >
              {item.option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Main;
