import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./style";
import { XCircle } from "@phosphor-icons/react";

const CartModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h1>CartModal</h1>
        <Dialog.Close asChild>
          <CloseButton>
            <XCircle size={24} weight="fill" />
          </CloseButton>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  );
};

export default CartModal;
