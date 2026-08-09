import React, { useEffect, useCallback } from 'react';
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

export const Modal = ({
  children,
  open,
  onClose,
  closeOnBackdropClick = true,
  closeOnEscapeKey = true,
  closeOnOutsideClick = false,
  onBackdropClick,
  onEscapeKey,
  onOutsideClick,
  backdropClassName,
  backdropStyle,
  modalClassName,
  modalStyle,
  zIndex,
}: ModalProps) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      onBackdropClick?.(e);
      if (closeOnBackdropClick) onClose?.();
    },
    [closeOnBackdropClick, onClose, onBackdropClick]
  );

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      const modal = document.querySelector(`.${style['modal']}`);
      if (modal && !modal.contains(e.target as Node)) {
        onOutsideClick?.(e);
        if (closeOnOutsideClick) onClose?.();
      }
    },
    [closeOnOutsideClick, onClose, onOutsideClick]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeKey?.(e);
        if (closeOnEscapeKey) onClose?.();
      }
    },
    [closeOnEscapeKey, onClose, onEscapeKey]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleOutsideClick, handleKeyDown]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className={`${style['modal-backdrop']} ${backdropClassName || ''}`}
        style={{ ...backdropStyle, ...(zIndex != null ? { zIndex: zIndex - 1 } : {}) }}
        onClick={handleBackdropClick}
      />
      <div
        className={`${style['modal']} ${modalClassName || ''}`}
        style={{ ...modalStyle, ...(zIndex != null ? { zIndex } : {}) }}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
