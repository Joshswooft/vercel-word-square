import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./default/theme";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeWrapperProps {
  children: React.ReactNode;
}
export function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
