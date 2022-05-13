import { extendTheme } from "@chakra-ui/react";
import { BottomNavigationStyleConfig } from "chakra-ui-bottom-navigation";
import "@fontsource/karla";

const breakpoints = {
    sm: '320px',
    md: '870px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({
    fonts: {
        heading: 'Karla',
        body: 'Karla',
    },
    breakpoints,
    components: {
        BottomNavigation: BottomNavigationStyleConfig
    }
})

export default theme