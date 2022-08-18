import Radio, { radioClasses } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';
export const StyledRadio = styled(Radio)(({}) => ({
  color: theme.palette.primary.main,
  padding: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
    marginRight: '8px',
  },
  transform: 'translateY(1px)',
}));
