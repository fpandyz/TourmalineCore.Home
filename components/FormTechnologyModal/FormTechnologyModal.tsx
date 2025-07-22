import { Modal } from '../Modal/Modal';
import { FormBlockRedesign } from '../redesign/FormBlockRedesign/FormBlockRedesign';

export function FormTechnologyModal(
  {
    setIsOpen,
  }:{
    setIsOpen: (isOpen: boolean) => void;
  },
) {
  return (
    <Modal
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
