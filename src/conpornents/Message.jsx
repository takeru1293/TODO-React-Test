import React from "react";

export const Message = (prop) => {
  // 処理内容-------------------------------------------------------------------
  // 引数の受け取り
  const { message, type, showFlg } = prop;

  // メッセージの種類判別
  const typeChangeDivStyle = () => {
    return type === "error" ? errorStyleDiv : styleDiv;
  };

  // 表示・非表示の管理
  const showMesage = () => {
    return showFlg ? "block" : "none";
  };

  // レイアウト定義-------------------------------------------------
  const errorStyleDiv = {
    color: "red",
    backgroundColor: "#FFDDFF",
    width: "400px",
    minHeight: "30px",
    padding: "1px 8px",
    margin: "8px",
    borderRadius: "8px",
    textAlign: "center",
    display: showMesage()
  };

  const styleDiv = {
    width: "400px",
    minHeight: "30px",
    padding: "1px 8px",
    margin: "8px",
    borderRadius: "8px",
    textAlign: "center",
    display: showMesage()
  };

  const styleP = {
    margin: "1%"
  };

  // HTML-------------------------------------------------------------------
  return (
    <div style={typeChangeDivStyle(type)}>
      <p style={styleP}>{message}</p>
    </div>
  );
};
