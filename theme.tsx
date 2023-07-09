import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      500: "#00454A",
      600: "#80FFDB",
      700: "#64DFDF",
      800: "#6930C3",
      900: "#16213E",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        scrollBehavior: "smooth !important",
      },
      body: {
        color: "whiteAlpha.800",
        bg: "brand.900",
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
