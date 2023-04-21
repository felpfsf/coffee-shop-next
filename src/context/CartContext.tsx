import { ReactNode, createContext, useContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  defaultPriceId?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  updateCartItems: (productId: string, newQuantity: number) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    // console.log(
    //   `Item added to the cart: ${product.name} - quantity: ${quantity}`
    // );
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

  const removeFromCart = (product: Product) => {
    // console.log(`Item removed from cart`);
    setCartItems(cartItems.filter((item) => item.product.id !== product.id));
  };

  const updateCartItems = (productId: string, newQuantity: number) => {
    /**
     * Atualiza a quantidade de itens de um produto no carrinho
     * passando um novo valor(newQuantity) incrementando ou decrementando
     * o valor atual de quantity
     */
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItems,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
