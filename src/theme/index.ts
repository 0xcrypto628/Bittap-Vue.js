import { Text, Heading, Button } from "./components";
import { colors, shadows, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  shadows,
  fonts,
  components: { Text, Heading, Button },
});
export default theme;
