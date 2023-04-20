import Image from "next/image";
import Logo from "../../assets/coffee-shop-logo.svg";
import { CartItemsCount, NavbarContainer, ShoppingCartButton } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import CartModal from "../CartModal";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const itemsOnCart = cartItems.length;
  return (
    <NavbarContainer>
      <Image src={Logo} alt={""} />
      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ShoppingCartButton>
              <ShoppingCart size={22} weight='fill' />
              {itemsOnCart > 0 && (
                <CartItemsCount>{itemsOnCart}</CartItemsCount>
              )}
            </ShoppingCartButton>
          </Dialog.Trigger>
          <CartModal />
        </Dialog.Root>
      </div>
    </NavbarContainer>
  );
};
export default Navbar;
