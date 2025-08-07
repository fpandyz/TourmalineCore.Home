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
      content={(
        <FormBlockRedesign
          isModal
          initializeIsSubmit={initializeIsSubmit}
        />
      )}
      onClose={onClose}
    />
  );

  function onClose() {
    setIsOpen(false);
  }
}
