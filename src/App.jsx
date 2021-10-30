import React, { useState } from "react";
import "./styles.css";
import { LogicController } from "./conpornents/LogicController";

export const App = () => {
  // useStateにコンストラクタとsetterの名称を設定---------------------------------------
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  // retrun処理-------------------------------------------
  return (
    <LogicController
      incompleteTodos={incompleteTodos}
      setIncompleteTodos={setIncompleteTodos}
      completeTodos={completeTodos}
      setCompleteTodos={setCompleteTodos}
      todoText={todoText}
      setTodoText={setTodoText}
    />
  );
};
