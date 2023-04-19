import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Navbar from "@/components/Navbar";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
