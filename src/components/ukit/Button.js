import { LoadingButton } from '@mui/lab';
import Button, { buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

const StyledBtn = styled(LoadingButton)(({ width, height }) => ({
  height: height || 48,
  width: width || 195,
  textTransform: 'uppercase',
  borderRadius: 0,
  '& .MuiLoadingButton-loadingIndicator': {
    color: theme.palette.common.white,
  },
}));

export const StyledBtnMenu = styled(StyledBtn)(({ active }) => ({
  borderLeft: '1px solid',
  minWidth: '60px',
  borderColor: theme.palette.primary.main,
  justifyContent: 'start',
  display: 'flex !important',
  '&:hover': {
    background: '#ffffff00',
    p: {
      color: theme.palette.primary.main,
    },
  },
}));
export const StyledBtnUnderline = styled(StyledBtn)(() => ({
  justifyContent: 'start',
  display: 'flex !important',
  padding: '0',
  height: '34px',
  '&:hover': {
    background: '#ffffff00',
    '.MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
}));

export const StyledPrimaryBtn = styled(StyledBtn)(() => ({
  color: theme.palette.primary.main,
  background: theme.palette.common.black,
  border: '1px solid ' + theme.palette.common.black,
  '.MuiTypography-root': {
    color: theme.palette.primary.main,
  },
}))

export const StyledContainerBtn = styled(StyledBtn)(() => ({
  color: theme.palette.common.black,
  background: theme.palette.common.custom,
  transition: theme.transitions.create(['background', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&: hover': {
    background: theme.palette.action.hover,
  },
}));

export const StyledWhiteBtn = styled(StyledBtn)(() => ({
  color: theme.palette.common.black,
  background: theme.palette.common.white,
  transition: theme.transitions.create(['background', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&: hover': {
    background: theme.palette.common.black,
    p: {
      color: theme.palette.common.white,
    },
  },
}));

export const StyledOutlineButton = styled(StyledBtn)(() => ({
  borderColor: theme.palette.common.black,
  border: '1px solid',
  borderRadius: '50%',
  '&: hover': {
    border: '1px solid',
    borderRadius: '50%',
    borderColor: theme.palette.primary.main,
    background: theme.palette.common.white,
    '.MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
}));

export const StyledRedButton = styled(StyledBtn)(() => ({
  background: theme.palette.primary.main,
  padding: 0,
  color: theme.palette.common.white,
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.common.white,
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
}));

export const StyledTextButton = styled(StyledBtn)(() => ({
  color: theme.palette.common.black,
  textTransform: 'uppercase',
  fontSize: '10px',
  width: '100%',
  justifyContent: 'right',
  paddingRight: '16px',
}));

export const StyledBtnUnder = styled(StyledBtn)(() => ({
  padding: '0',
  // height: '34px',
  '&:hover': {
    background: '#ffffff00',
    '.MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
  textDecoration: 'underline',
  textAlign: 'center',
}));

export const StyledIconLabelButton = styled(StyledBtn)(() => ({}));
