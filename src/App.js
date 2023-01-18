import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <h1>俺のTODO</h1>

      <div className='addContent'>
        <h2>todo作成</h2>

        {/* やること */}
        <form>
          <div>
            <label>
              やること:
              <input />
            </label>
          </div>
        </form> 

        {/* 内容 */}
        <form>
          <div>
            <label>
              内容:
              <input />
            </label>
          </div>
        </form>

        {/* 追加ボタン */}
        <button>追加</button>

      </div>
      
      <div className='todos'>
        <h2>一覧</h2>
      </div>
    </div>
  );
}

export default App;


