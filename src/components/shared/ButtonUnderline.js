import { Stack, Typography } from '@mui/material';
import { StyledBtnUnderline } from 'components/ukit/Button';
import { cloneElement, useState } from 'react';
import { theme } from 'theme';
import { IconArrowRight } from './icons';

export default function ButtonUnderline({
  children,
  isMore,
  customIcon,
  isActive,
  linecolor,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(undefined);
  return (
    <Stack
      width={'100%'}
      borderBottom={'1px solid'}
      borderColor={
        isFocus || isActive
          ? theme.palette.divider
          : linecolor || theme.palette.common.black
      }
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <StyledBtnUnderline
          sx={{
            flexGrow: 1,
            background: isActive && '#ffffff00',
            '.MuiTypography-root': {
              color: isActive && theme.palette.primary.main,
            },
          }}
          height={40}
          {...props}
          onMouseEnter={() => setIsFocus(true)}
          onMouseLeave={() => setIsFocus(false)}
        >
          {children}
        </StyledBtnUnderline>
        {isMore && (
          <IconArrowRight
            sx={{
              color: isFocus
                ? theme.palette.primary.main
                : theme.palette.common.black,
            }}
          />
        )}
        {customIcon && cloneElement(customIcon)}
      </Stack>
    </Stack>
  );
}
