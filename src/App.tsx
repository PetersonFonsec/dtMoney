import React from "react";
import { GlobalStyle } from "./style/global";
import { HeaderComponent } from "./components/Header";

export function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
    </>
  );
}
