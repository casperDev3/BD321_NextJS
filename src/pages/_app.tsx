import "@/styles/globals.scss";
import Link from "next/link";
import type { AppProps } from "next/app";
import Layouts from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
