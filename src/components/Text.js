import React from "react";
import style from "../../DashBoardPage.module.scss";

export default function Text({ text }) {
  return <p className={style.text}>{text}</p>;
}
