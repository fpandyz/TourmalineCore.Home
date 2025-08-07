import { Modal } from '../Modal/Modal';
import { FormBlockRedesign } from '../redesign/FormBlockRedesign/FormBlockRedesign';

export function FormModal({
  setIsOpen,
  initializeIsSubmit,
  testId,
}:{
  setIsOpen: (isOpen: boolean) => void;
  initializeIsSubmit?: boolean;
  testId?: string;
}) {
  return (
    <Modal
      testId={testId}
      onClose={onClose}
    >
      <FormBlockRedesign
        isModal
        initializeIsSubmit={initializeIsSubmit}
      />
    </Modal>
  );

  function onClose() {
    setIsOpen(false);
  }
}
