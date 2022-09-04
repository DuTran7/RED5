import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

const StyledTypography = styled(Typography)(({ theme, color }) => ({
  color: color || theme.palette.text.primary,
  display: 'inline',
  // whiteSpace: 'nowrap',
  // textOverflow: 'ellipsis',
  // overflow: 'hidden',
}));

export const StyledFirstLetter = styled(Typography)(
  ({ size, color, ...p }) => ({
    color: color || theme.palette.common.black,
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    '&::first-letter': {
      textTransform: 'uppercase',
      color: theme.palette.common.white,
      fontSize: 60,
      fontFamily: theme.typography.customFontF.okkio,
      background: theme.palette.primary.main,
      float: 'left',
      lineHeight: '49px',
      padding: '6px 8px 12px 9px',

      marginRight: '8px',
    },
  })
);
export const StyledFirstLetterWhite = styled(Typography)(
  ({ size, color, ...p }) => ({
    color: color || theme.palette.common.black,
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    '&::first-letter': {
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
      fontSize: 60,
      fontFamily: theme.typography.customFontF.okkio,
      background: theme.palette.common.white,
      float: 'left',
      lineHeight: '49px',
      padding: '6px 8px 12px 9px',

      marginRight: '8px',
    },
  })
);
export const TextBook60 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '60px',
  lineHeight: '60px',
  textTransform: 'uppercase',
  color: theme.palette.common.black,
  letterSpacing: '0.02em',
}));

export const TextBook40 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '40px',
  lineHeight: '44px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
  color: theme.palette.common.black,
}));

export const TextBook20 = styled(Typography)(({ theme }) => ({
  fontFamily: 'SVN-Univers',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '28px',
  color: theme.palette.common.black,
}));

export const TextBook14 = styled(Typography)(({ theme }) => ({
  fontFamily: 'SVN-Univers',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: theme.palette.common.black,
}));
export const TextBook12 = styled(Typography)(({ theme }) => ({
  fontFamily: 'SVN-Univers',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: theme.palette.common.black,
}));

export const TextBookWhite14 = styled(Typography)(({ theme }) => ({
  fontFamily: 'SVN-Univers',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: theme.palette.common.white,
}));

export const TextBook100 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '100px',
  lineHeight: '100px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
  color: theme.palette.common.black,
}));

export const TextBookWhite100 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '100px',
  lineHeight: '100px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
  color: theme.palette.common.white,
}));

export const TextBook24 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  color: theme.palette.common.black,
}));
export const TextBookWhite24 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  color: theme.palette.common.white,
}));

export const TextBookWhite60 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '60px',
  lineHeight: '60px',
  textTransform: 'uppercase',
  color: theme.palette.common.white,
  letterSpacing: '0.02em ',
}));
export const TextBold100 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '100px',
  lineHeight: '100px',
  letterSpacing: '0.02em',
  textTransform: 'lowercase',
  color: theme.palette.common.black,
}));

export const TextBook32 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFontF.okkio,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '32px',
  lineHeight: '36px',
  textTransform: 'uppercase',
  color: theme.palette.common.black,
  letterSpacing: '0.02em ',
}));
