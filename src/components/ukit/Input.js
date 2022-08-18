import { Input, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

export const StyledInput = styled(Input)(({ }) => ({
  '&::before': {
    borderBottom: '1px solid',
    borderColor: theme.palette.common.white,
  },
}));

export const StyledInputUderline = styled(Input)(({ }) => ({
  padding: '8px 0',
  '&:before': {
    borderColor: theme.palette.common.black,
  },
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&::after': {
    borderBottom: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  '&:hover:not(.Mui-disabled):before': {
    borderBottom: '1px solid',
  },
  '&.Mui-disabled': {
    '& .MuiInput-input': { '-webkit-text-fill-color': theme.palette.text.primary, },
    '&::before': {
      borderBottom: '1px solid',
    }
  },


}));
