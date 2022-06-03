import { extendTheme } from "@chakra-ui/react";
import { BottomNavigationStyleConfig } from "chakra-ui-bottom-navigation";
// import "@fontsource/karla";
import "@fontsource/rubik";
import "@fontsource/nunito";

const breakpoints = {
    sm: '320px',
    md: '1000px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({
    fonts: {
        heading: 'Nunito',
        body: 'Nunito',
       
    },
    breakpoints,
    components: {
        BottomNavigation: BottomNavigationStyleConfig,
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}}
    }
})

export default theme