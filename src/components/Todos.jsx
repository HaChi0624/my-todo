import React from "react";

export const Todos = (props) => {
  const { todos, onClickDelete } = props;
  return (
    <div className="list-area">
      <p className="title">TODO一覧</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li><input type='checkbox'/>{todo}</li>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
