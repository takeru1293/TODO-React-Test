/**
 * 未完了TODOエリアのコンポーネント
 * @param {todoList,onClickC,onClickD} prop
 * todoList:未完了のTODOに追加されてているTODO情報
 * onClickC:完了ボタンのonClick処理
 * onClickD:削除ボタンのonClick処理
 */

import React from "react";

const style = {
  backgroundColor: "#c6ffee",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodo = (prop) => {
  const { todoList, onClickC, onClickD } = prop;

  return (
    <div style={style} className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickC(index)}>完了</button>
              <button onClick={() => onClickD(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
