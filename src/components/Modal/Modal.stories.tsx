import React from 'react';
import { ModalTitle, Modal, ModalBody, ModalFooter } from './Modal.component';
import { StoryFn, Meta } from '@storybook/react-vite';
import { ModalProps } from './Modal.types';
import Button from '../Button/Button.component';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} open={args.open || isOpen}>
        <ModalTitle>Title</ModalTitle>
        <ModalBody>Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  children: 'Hello world!',
};
