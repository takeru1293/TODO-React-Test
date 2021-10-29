import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // Todoリストのコンポーネント化
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState(["uuuuuuu", "eeeeeee"]);
  const [todoText, setTodoText] = useState("");
  // 処理内容------------------------------------------------------------
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // TODO追加処理
  const onChickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // retrun処理-------------------------------------------
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onChickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo1) => {
            return (
              <div key={todo1} className="list-row">
                <li>{todo1}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
