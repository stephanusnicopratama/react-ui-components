import React from 'react';
import { ModalTitle, Modal, ModalBody, ModalFooter } from './Modal.component';
import { StoryFn, Meta } from '@storybook/react-vite';
import { ModalProps } from './Modal.types';
import Button from '../Button/Button.component';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    open: { control: { type: 'boolean' } },
    closeOnBackdropClick: { control: { type: 'boolean' } },
    closeOnOutsideClick: { control: { type: 'boolean' } },
    closeOnEscapeKey: { control: { type: 'boolean' } },
  },
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        open={args.open || isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalTitle>{args.title || 'Title'}</ModalTitle>
        <ModalBody>Click outside or press Escape to close.</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default Modal',
  closeOnBackdropClick: true,
  closeOnEscapeKey: true,
  closeOnOutsideClick: false,
};

export const CloseOnOutsideClick = Template.bind({});
CloseOnOutsideClick.args = {
  title: 'Outside Click Close',
  closeOnBackdropClick: true,
  closeOnEscapeKey: true,
  closeOnOutsideClick: true,
};

export const NoClose = Template.bind({});
NoClose.args = {
  title: 'No Auto Close',
  closeOnBackdropClick: false,
  closeOnEscapeKey: false,
  closeOnOutsideClick: false,
};
