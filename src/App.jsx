import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div className="list-row">
          <li>aaaaaaa</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div className="list-row">
          <li>aaaaaaa</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </div>
    </>
  );
};
