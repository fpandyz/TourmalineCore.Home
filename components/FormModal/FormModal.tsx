import { Modal } from '../Modal/Modal';
import { FormBlockRedesign } from '../redesign/FormBlockRedesign/FormBlockRedesign';

export function FormModal({
  asideText,
  setIsOpen,
  initializeIsSubmit,
  testId,
  isComponentPage,
}:{
  asideText: string;
  setIsOpen: (isOpen: boolean) => void;
  initializeIsSubmit?: boolean;
  testId?: string;
  isComponentPage?: boolean;
}) {
  return (
    <Modal
      testId={testId}
      onClose={onClose}
    >
      <FormBlockRedesign
        asideText={asideText}
        isModal
        initializeIsSubmit={initializeIsSubmit}
        isComponentPage={isComponentPage}
      />
    </Modal>
  );

  function onClose() {
    setIsOpen(false);
  }
}
