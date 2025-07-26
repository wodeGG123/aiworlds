import { useState, useEffect } from "react";
import Loading from "./start/Loading";
import localforage from "localforage";
import { useRouter } from "next/navigation";
import styles from "./start/index.module.css";
const Main = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    localforage.getItem("access_token").then((data) => {
      if (data) {
        router.push("/home");
      } else {
        router.push("/user/login");
      }
    });
  }, []);
  return (
    <div
      className={styles.wrap}
      style={
        loading
          ? {
              backgroundImage: 'url("/img/start_loading_bg.jpg")',
            }
          : {}
      }
    >
      <img src="/icons/logo.svg" alt="" />
      <p>Knight of Valheim</p>
      {loading && <Loading />}
    </div>
  );
};
export default Main;
