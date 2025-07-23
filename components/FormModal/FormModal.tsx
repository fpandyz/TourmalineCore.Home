import { Modal } from '../Modal/Modal';
import { FormBlockRedesign } from '../redesign/FormBlockRedesign/FormBlockRedesign';

export function FormModal(
  {
    setIsOpen,
  }:{
    setIsOpen: (isOpen: boolean) => void;
  },
) {
  return (
    <Modal
      dataTestId="form-modal"
      content={(
        <FormBlockRedesign className="is-modal" />
      )}
      onClose={onClose}
    />
  );

  function onClose() {
    setIsOpen(false);
  }
}
