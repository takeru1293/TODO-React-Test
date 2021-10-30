/**
 * 完了TODOエリアのコンポーネント
 * @param {cTodoList,onClickB} prop
 * cTodoList:完了のTODOに追加されてているTODO情報
 * onClickB：戻るボタンのonClick処理
 */

import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodo = (prop) => {
  // 引数の設定-------------------------------------------------
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos
  } = prop;

  // 戻るボタンの処理を追加-------------------------------------------------
  const onChickReturn = (index) => {
    // 配列コピー
    const newTodos = [...completeTodos];
    //　完了のTODOの配列とClickイベントで完了したTODOをreturnTodosに追加
    const retrunTodos = [...incompleteTodos, newTodos[index]];
    // 完了TODOリストをレンダリング
    setIncompleteTodos(retrunTodos);
    // 削除処理
    newTodos.splice(index, 1);
    //　削除された配列を追加
    setCompleteTodos(newTodos);
  };

  // 戻るボタンの処理-------------------------------------------------
  return (
    <div style={style} className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo1, index) => {
          return (
            <div key={todo1} className="list-row">
              <li>{todo1}</li>
              <button onClick={() => onChickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
