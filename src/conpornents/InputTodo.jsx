import React from "react";

export const InputTodo = (prop) => {
  const { todoText, onChange, onClick } = prop;
  return (
    <div className="input-area">
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
