// import { Triangle } from "npm i react-loader-spinner";
import { Triangle } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <Triangle
      visible={true}
      height={80}
      width={80}
      color="rgb(64, 26, 202)"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass={s.loader}
    />
  );
}
