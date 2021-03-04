import React from 'react';
import { ModalProps } from './interfaces';
import './styles/modal.component.css';

export function Modal({ show, setShow, code, setCode, addCode }: ModalProps) {
  if (!show) return <></>;
  return (
    <div
      className="modal-overlay"
      onClick={function hideModal({ target }: any) {
        if ((target as HTMLDivElement).nodeName === 'DIV') setShow(false);
      }}
    >
      <form className="modal-form">
        <input
          type="text"
          placeholder="i.e CF101-D2-A"
          onChange={function changeCode({ target }) {
            setCode(target.value);
          }}
        />
        <button
          onClick={function createInstance(ev) {
            ev.preventDefault();
            if (!code) {
              alert('please fill the input');
              return;
            }

            if (!code.match(/^CF[1-9]+[0-9]*-D[1-3]-[A-D]$/)) {
              alert('please provide a valid code');
              return;
            }

            localStorage.setItem(
              code,
              JSON.stringify({
                reading: 0,
                coding: 0,
                thinking: 0,
                debugging: 0,
              }),
            );

            addCode((problems) => {
              return problems.concat(code);
            });

            setShow(false);
          }}
        >
          go
        </button>
      </form>
    </div>
  );
}
