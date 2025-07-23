import { Modal } from '../Modal/Modal';
import { FormBlockRedesign } from '../redesign/FormBlockRedesign/FormBlockRedesign';

export function FormModal(
  {
    setIsOpen,
    initializeIsSubmit,
  }:{
    setIsOpen: (isOpen: boolean) => void;
    initializeIsSubmit?: boolean;
  },
) {
  return (
    <Modal
      dataTestId="form-modal"
      content={(
        <FormBlockRedesign
          className="is-modal"
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
