import React from 'react';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.types';

interface ModalTitleProps {
  children?: React.ReactNode;
}

interface ModalBodyProps {
  children?: React.ReactNode;
}

interface ModalFooterProps {
  children?: React.ReactNode;
}

export const ModalTitle = ({ children }: ModalTitleProps) => (
  <div className={style['modal-header']}>{children}</div>
);

export const ModalBody = ({ children }: ModalBodyProps) => (
  <div className={style['modal-body']}>{children}</div>
);

export const ModalFooter = ({ children }: ModalFooterProps) => (
  <div className={style['modal-footer']}>{children}</div>
);

export const Modal = ({ children, open }: ModalProps) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={style['modal-backdrop']} />
      <div className={style['modal']}>{children}</div>
    </>,
    document.body
  );
};

export default Modal;
