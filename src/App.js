// src/App.js

import React, { useState } from 'react';

function App() {
  const [pythonResult, setPythonResult] = useState('');

  const runPythonScript = async () => {
    try {
      // Pythonスクリプトを実行するためのAPIエンドポイントにリクエストを送信
      const response = await fetch('/api/hello.py');
      const data = await response.json();
      setPythonResult(data.body);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={runPythonScript}>Pythonスクリプトを実行</button>
      <div>Pythonの結果: {pythonResult}</div>
    </div>
  );
}

export default App;
