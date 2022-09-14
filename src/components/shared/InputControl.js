import { FormControl, Typography } from '@mui/material';
import { StyledInputUderline } from 'components/ukit/Input';
import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { theme } from 'theme';

export default function InputControl({
  control,
  id,
  name,
  label,
  endAdornment,
  onChange,
  register,
  srcImg,
  ...props
}) {
  const [focused, setFocused] = useState(undefined);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <>
            <StyledInputUderline
              id={id}
              value={field.value || ''}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              startAdornment={
                <Typography
                  variant={'subtitle1'}
                  color={focused ? theme.palette.primary.main : 'text.primary'}
                  minWidth={'150px'}
                >
                  {label}
                </Typography>
              }
              onChange={(...e) => {
                field.onChange(...e);
                onChange && onChange(e);
              }}
              {...props}
              variant="standard"
              sx={{
                width: '100%',
                mt: '0 !important',
                '& .MuiInput-input': {
                  width: '100%',
                },
              }}
            />
            {props?.type === 'file' && (
              <img
                src={srcImg}
                width={'max-content'}
                style={{
                  width: 'max-content',
                }}
                height={200}
              />
            )}
          </>
        );
      }}
    />
  );
}
