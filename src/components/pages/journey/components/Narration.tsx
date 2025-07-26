import { useEffect, useState } from "react";
import Typewriter from "./TypeWriter";

const Main = ({ data, onClick = () => {} }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      onClick={() => {
        onClick();
      }}
    >
      <Typewriter text={data} />
    </div>
  );
};
export default Main;
