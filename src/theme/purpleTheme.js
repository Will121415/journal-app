import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
           main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red[400],
            light: red[300]            
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
    
});