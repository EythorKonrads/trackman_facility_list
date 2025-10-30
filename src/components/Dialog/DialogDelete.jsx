import { useEffect, useRef } from 'react';
import './_dialog-delete.scss';

export default function DialogDelete({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
}) {
  const dialogRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="dialog-delete__overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="dialog-delete"
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
      >
        <header className="dialog-delete__header">
          <h2 className="dialog-delete__title">{title}</h2>
          <button
            className="dialog-delete__button dialog-delete__button--close"
            onClick={onClose}
          >
            <img
              src={`${import.meta.env.BASE_URL}close.svg`}
              alt="Close icon"
              loading="lazy"
            />
          </button>
        </header>
        <hr className="dialog-delete__separator" />
        <div className="dialog-delete__body">
          <p className="dialog-delete__description">{description}</p>
        </div>
        <hr className="dialog-delete__separator" />
        <footer className="dialog-delete__footer">
          <button
            ref={cancelRef}
            type="button"
            className="dialog-delete__button dialog-delete__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="dialog-delete__button dialog-delete__button--danger"
            onClick={() => {
              onConfirm?.();
            }}
          >
            Yes, Delete
          </button>
        </footer>
      </div>
    </div>
  );
}
