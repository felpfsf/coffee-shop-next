import { ReactNode, createContext, useContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    console.log(
      `Item added to the cart: ${product.name} - quantity: ${quantity}`
    );

    /**
     * Caso o item já esteja no carrinho ele irá incrementar a quantidade
     * Caso contrário ele adiciona o produto e a quantidade selecionada
     */

    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  console.log("Cart Items => ", cartItems);

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
