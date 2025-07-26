import { useEffect, useState } from "react";
import Typewriter from "./TypeWriter";

const Main = ({ data, onClick = () => {} }) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      onClick={() => {
        if (step !== data.length - 1) {
          setShow(false);

          setTimeout(() => {
            setStep(step + 1);
            setShow(true);
          }, 300);
        } else {
          onClick();
        }
      }}
    >
      {show && <Typewriter role={data[step].speaker} text={data[step].text} />}
    </div>
  );
};
export default Main;
