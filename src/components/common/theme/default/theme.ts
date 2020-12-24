import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    animation: {
      defaultTransition: string;
    };
    colours: {
      primary: string;
      secondary: string;
    };
    textColours: {
      primary: string;
      secondary: string;
    };
    font: string;
  }
}

export const theme: DefaultTheme = {
  animation: {
    defaultTransition: "all .15s ease-in-out",
  },
  colours: {
    primary: "#0DFF8B",
    secondary: "black",
  },
  textColours: {
    primary: "black",
    secondary: "white",
  },
  font: "Sofia Pro",
};
