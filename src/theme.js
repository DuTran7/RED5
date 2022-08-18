import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { fontWeight } from '@mui/system';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#BA442E', // main
        light: '#FCF5EE',
      },
      border: 'linear-gradient(to Right, #D2FF7C, #FFEE48)',
      common: {
        white: '#FFFCF6',
        black: '#2B2828',
        custom: 'linear-gradient(to Right, #D2FF7C, #FFEE48)',
        grey: '#DDDDDD',
        blue: '#3362FF',
        darkBlack: '#010101',
      },
      action: {
        hover: 'linear-gradient(to Right, #D2FF7C, #c1b435)',
      },
      text: {
        primary: '#2B2828',
        secondary: '#FFFCF6',
      },
      divider: '#BA442E',
      link: {
        blue: '#0C66FF',
      },
    },
    typography: {
      fontFamily: 'SVN-Univers Regular',
      h1: {
        fontFamily: 'Okkio Display',
        fontWeight: '400',
        fontSize: '21.25rem',
        textTransform: 'uppercase',
      },
      h2: {
        fontFamily: 'Okkio Display',
        fontWeight: '400',
        fontSize: '60px',
        lineHeight: 1,
        textTransform: 'uppercase',
      },
      h3: {
        fontFamily: 'Okkio Display',
        fontWeight: '400',
        fontSize: '32px',
        lineHeight: 1,
        textTransform: 'uppercase',
      },
      h4: {
        fontFamily: 'Okkio Display',
        fontWeight: '400',
        fontSize: '24px',
        textTransform: 'uppercase',
      },
      h5: {
        fontFamily: 'Okkio Display',
        fontWeight: '400',
        fontSize: '16px',
        textTransform: 'lowercase',
      },
      h6: {
        fontFamily: 'SVN-Univers Bold',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        textTransform: 'uppercase',
      },
      h7: {
        fontFamily: 'SVN-Univers Bold',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        letterSpacing: '0.02em',
      },
      customFontF: {
        okkio: 'Okkio Display',
        svn: {
          bold: 'SVN-Univers Bold',
          regular: 'SVN-Univers Regular',
        },
      },
      caption: {
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: '16px',
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.02em',
      },
      subtitle2: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        fontStyle: 'normal',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      },
      subtitle3: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.02em',
      },
      body1: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '20px',
        // textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
      bold70012: {
        fontFamily: 'SVN-Univers Bold',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '16px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      },
      bold70012lower: {
        fontFamily: 'SVN-Univers Bold',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '18px',
        letterSpacing: '0.16em',
        // textTransform: 'uppercase',
      },
      normal50040: {
        fontFamily: 'Okkio Display',
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '48px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      },
      bold70010: {
        fontFamily: 'SVN-Univers Bold',
        fontSize: '10px',
        fontWeight: 700,
        lineHeight: '16px',
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        color: '#2B2828',
      },
      bold500100: {
        fontFamily: 'Okkio Display',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '100px',
        lineHeight: '100px',
        letterSpacing: '0.02em',
        textTransform: 'lowercase',
        color: '#2B2828',
      },
      regular50024: {
        fontFamily: 'Okkio Display',
        fontWeight: '500',
        fontSize: '24px',
        textTransform: 'lowercase',
        color: '#2B2828',
      },
      regurlar4001612: {
        textTransform: 'uppercase',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '400',
      },
      normal70010: {
        fontFamily: 'SVN-Univers Regular',
        fontSize: '10px',
        fontWeight: 700,
        lineHeight: '16px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      },
      normal500100O: {
        fontFamily: 'Okkio Display',
        fontSize: '100px',
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      },
    },
    components: {},
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
  })
);
