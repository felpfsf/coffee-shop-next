import Image from "next/image";
import Logo from "../../assets/coffee-shop-logo.svg";
import { CartItemsCount, NavbarContainer, ShoppingCartButton } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src={Logo} alt={""} />
      <div>
        <ShoppingCartButton>
          <ShoppingCart size={22} weight='fill' />
          <CartItemsCount>3</CartItemsCount>
        </ShoppingCartButton>
      </div>
    </NavbarContainer>
  );
};
export default Navbar;
