import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conpornents/InputTodo";

export const App = () => {
  // useStateにコンストラクタとsetterの名称を設定---------------------------------------
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState(["uuuuuuu", "eeeeeee"]);
  const [todoText, setTodoText] = useState("");

  // 処理内容------------------------------------------------------------
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // TODO追加処理-----------------------------------------------------
  const onChickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // TODOリスト削除処理-------------------------------------------------------
  const onChickDelete = (index) => {
    // 配列コピー
    const newTodos = [...incompleteTodos];
    // 削除処理
    newTodos.splice(index, 1);
    //　削除された配列を追加
    setIncompleteTodos(newTodos);
  };

  // 完了処理追加-------------------------------------------------------
  const onChickTodoAdd = (index) => {
    // 配列コピー
    const newTodos = [...incompleteTodos];
    //　完了のTODOの配列とClickイベントで完了したTODOをreturnTodosに追加
    const retrunTodos = [...completeTodos, newTodos[index]];
    // 完了TODOリストをレンダリング
    setCompleteTodos(retrunTodos);
    // 削除処理
    newTodos.splice(index, 1);
    //　削除された配列を追加
    setIncompleteTodos(newTodos);
  };

  // 戻るボタンの処理-------------------------------------------------------
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

  // retrun処理-------------------------------------------
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onChickAdd}
      />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onChickTodoAdd(index)}>完了</button>
                <button onClick={() => onChickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
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
    </>
  );
};
