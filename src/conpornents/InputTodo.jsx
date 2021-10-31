/**
 * 未完了TODOエリアのコンポーネント
 * @param {todoText,onChange,onClick} prop
 * todoText:テキストエリアの値
 * onChange:追加ボタンの値へ工事の処理
 * onClick:削除ボタンのonClick処理
 */

import React from "react";
import { Message } from "./Message";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (prop) => {
  const { todoText, onChange, onClick, data } = prop;
  const { incompleteTodos } = data;

  const showErrorMessage = () => {
    return incompleteTodos.length >= 5;
  };
  // 同一TODOをはじくチェック処理
  const checkSameTODO = () => {
    let result = false;
    incompleteTodos.map((todo) => {
      if (todo === todoText) result = true;
      return null;
    });
    return result;
  };

  const message1 = ["同じTODOがあります", "確認してください。"];
  const message2 = [
    "登録できるTODOは5個までです。",
    "未完了のTODOから値を削除してください。"
  ];

  return (
    <>
      <div style={style} className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={(checkSameTODO(), onChange)}
          disabled={showErrorMessage()}
        />
        <button
          onClick={onClick}
          disabled={showErrorMessage() || checkSameTODO()}
        >
          追加
        </button>
      </div>
      <Message message={message1} type="error" showFlg={checkSameTODO()} />
      <Message message={message2} type="error" showFlg={showErrorMessage()} />
    </>
  );
};
