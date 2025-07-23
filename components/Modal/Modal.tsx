import { ReactNode, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import IconCross from '../../icons/cross.svg';
import { useOnClickOutside } from '../../common/hooks';

export function Modal({
  content,
  onClose = () => {},
  testId,
}: {
  content: ReactNode;
  onClose?:() => unknown;
  testId?: string;
}) {
  useEffect(() => {
    function escFunction(event: KeyboardEvent) {
      if (event.key === `Escape`) {
        onClose();
      }
    }

    document.addEventListener(`keydown`, escFunction, false);

    return () => {
      document.removeEventListener(`keydown`, escFunction, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refModal = useRef<HTMLDivElement>(null);

  useOnClickOutside(refModal, onClose);

  return (
    <FocusLock
      returnFocus
    >
      <div
        className="default-scroll modal"
        data-testid={testId}
      >
        <div className="modal__container">
          <div
            className="modal__inner"
            ref={refModal}
          >
            <button
              type="button"
              className="modal__cross"
              onClick={onClose}
            >
              <IconCross />
            </button>
            <div className="modal__content">{content}</div>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}
