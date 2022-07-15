import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/karla";
import "@fontsource/rubik";
import "@fontsource/nunito";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1024px',
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
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}}       
    },
    styles:{
        global: {
            'html, body': {
                bg: 'gray.200'
            }
        }
    }
    
})

export default theme