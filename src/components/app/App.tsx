import React, { useState } from 'react';
import './App.css';
import { Modal } from '../modal/modal.component';
import { TimersWrapper } from '../timer/timers-wrapper.comonent';

function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState('');
  const [problems, addCode] = useState<string[]>(Object.keys(localStorage));

  return (
    <div className="App">
      <Modal
        show={show}
        setShow={setShow}
        code={code}
        setCode={setCode}
        addCode={addCode}
      />
      <button
        onClick={function showModal() {
          setShow(true);
        }}
        className="create-instance-btn"
      >
        create instance
      </button>
      {problems.map((code) => {
        return (
          <TimersWrapper
            code={code}
            timers={JSON.parse(localStorage.getItem(code!)!) as any}
            key={code}
          />
        );
      })}
    </div>
  );
}

export default App;
