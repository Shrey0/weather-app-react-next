import { Html, Head, Main, NextScript } from "next/document";
import handler from "./api/hello";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
