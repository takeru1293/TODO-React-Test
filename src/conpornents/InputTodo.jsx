/**
 * 未完了TODOエリアのコンポーネント
 * @param {todoText,onChange,onClick} prop
 * todoText:テキストエリアの値
 * onChange:追加ボタンの値へ工事の処理
 * onClick:削除ボタンのonClick処理
 */

import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (prop) => {
  const { todoText, onChange, onClick } = prop;
  return (
    <div style={style} className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
