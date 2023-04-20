import { ReactNode, createContext, useContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  // addToCart: (product: Product, quantity: number) => void;
  addToCart: (quantity: number) => void;
  removeFromCart: (product: Product) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (count: number) => {
    console.log(`Item added to the cart: ${count}`);
  };

  const removeFromCart = () => {
    console.log(`Item added to the cart: `);
  };

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
