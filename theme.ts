import { createTheme, Theme } from '@mui/material/styles';
import productTheme from './product';
import compsychTheme from './compsych';

const brandings = {
  product: productTheme,
  compsych: compsychTheme,
};

const subdomain = window.location.hostname.split('.')[0] as keyof typeof brandings;
const currentTheme = brandings[subdomain] || brandings.product;

const createByTheme = (theme: Theme) => createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '5px',
          height: '5px',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-root': {
            color: theme.palette.primary.dark,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h3: {
          [theme.breakpoints.down('md')]: {
            fontSize: 26,
          },
        },
        h5: {
          [theme.breakpoints.down('md')]: {
            fontSize: 20,
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: theme.palette.styledComponents.datepicker.dark,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.styledComponents.tooltip.main,
          color: theme.palette.styledComponents.tooltip.contrastText,
          fontSize: '0.9rem',
        },
      },
    },
  },
  custom: {
    infoBubble: {
      root: {
        margin: '10px',
        textAlign: 'center',
        fontSize: '18px',
        padding: '10px',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px',
        },
      },
    },
  },
});

export default createByTheme(currentTheme);
