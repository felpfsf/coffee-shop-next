import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Navbar from "@/components/Navbar";
import { CartContextProvider } from "../context/CartContext";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
