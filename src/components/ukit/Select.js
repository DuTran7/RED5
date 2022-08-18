import {
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { theme } from 'theme';
import { useState } from 'react';

export const StyledSelectStandard = styled(Select)(({}) => ({
  '&::before, &::after': {
    border: 'none',
  },
  '&:hover': {
    '&::before': {
      borderBottom: 'none !important',
    },
  },
  '.MuiSelect-standard': {
    paddingRight: '8px !important',
  },
}));

export const StyledSelectBox = styled(
  ({ value, defaultValue, onChange, startAdornment, children, ...props }) => {
    const [open, setOpen] = useState(false);
    return (
      <StyledSelectStandard
        {...props}
        open={open}
        value={value}
        onChange={(e) => {
          onChange(e);
          setOpen(!open);
        }}
        onClick={() => setOpen(!open)}
        variant={'standard'}
        startAdornment={startAdornment}
        defaultValue={defaultValue || ''}
        IconComponent={() => (
          <KeyboardArrowDownIcon
            onClick={() => setOpen(!open)}
            sx={{
              fontSize: '20px',
              '&:hover': {
                cursor: 'pointer',
                fill: theme.palette.primary.main,
              },
            }}
          />
        )}
      >
        {children}
      </StyledSelectStandard>
    );
  }
)(({}) => ({}));

export const StyledSelectStandard2 = styled(
  ({ label, value, defaultValue, onChange, options, ...props }) => (
    <Box sx={{ width: '100%', marginTop: '-10px' }}>
      <Box sx={{ position: 'relative', top: '23px' }}>{label}</Box>
      <Select
        sx={{
          width: '100%',
          textAlign: 'left',
          paddingBottom: '4px',
          '.MuiInput-input': {
            width: '70%',
            marginLeft: '110px',
          },
        }}
        {...props}
        value={value}
        onChange={onChange}
        variant="standard"
        defaultValue={defaultValue || ''}
        IconComponent={() => (
          <KeyboardArrowDownIcon
            sx={{
              fontSize: '20px',
            }}
          />
        )}
      >
        {/* <MenuItem disabled value="">
          <em>{props.placeholder}</em>
        </MenuItem> */}
        {(options || []).map((item) => (
          <MenuItem value={item.name} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
)(({}) => ({}));
