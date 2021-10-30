import Rcact from "react";
import { InputTodo } from "./InputTodo";
import { IncompleteTodo } from "./IncompleteTodo";
import { CompleteTodo } from "./CompleteTodo";

export const LogicController = (prop) => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos,
    todoText,
    setTodoText
  } = prop;

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

  return (
    <>
      {/* テキスト項目のエリアのコンポーネントを読み込み */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onChickAdd}
      />
      {/* 未完了TODOエリアのエリアのコンポーネントを読み込み */}
      <IncompleteTodo
        todoList={incompleteTodos}
        onClickC={onChickTodoAdd}
        onClickD={onChickDelete}
      />
      {/* 完了TODOエリアのエリアのコンポーネントを読み込み */}
      <CompleteTodo
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
      />
    </>
  );
};
