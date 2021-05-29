import React from "react";
import { GlobalStyle } from "./style/global";
import { HeaderComponent } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <Dashboard />
    </>
  );
}
