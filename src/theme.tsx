import { extendTheme } from "@chakra-ui/react";
import { BottomNavigationStyleConfig } from "chakra-ui-bottom-navigation";
// import "@fontsource/karla";
import "@fontsource/rubik"

const breakpoints = {
    sm: '320px',
    md: '1000px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({
    fonts: {
        heading: 'Rubik',
        body: 'Rubik',
    },
    breakpoints,
    components: {
        BottomNavigation: BottomNavigationStyleConfig
    }
})

export default theme