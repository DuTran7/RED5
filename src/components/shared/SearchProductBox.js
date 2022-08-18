import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import { StyledInput } from 'components/ukit/Input';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from 'theme';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';

export default function SearchProductsBox({
  onSubmit,
  onClose,
  value,
  onChangeTextSearch,
}) {
  const [isFocus, setIsFocus] = useState(false);
  let textFocus = useRef(null);

  useEffect(() => {
    textFocus.focus();
  }, [textFocus]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e);
      e.preventDefault();
    }
  };
  return (
    <Stack
      direction={'row'}
      height={{
        xs: '48px',
        md: '60px',
      }}
      padding={'0 16px 0'}
    >
      <Stack justifyContent={'center'} alignItems={'center'}>
        <IconButton sx={{}} onClick={onSubmit}>
          <SearchIcon
            sx={{
              color: theme.palette.common.black,
            }}
          />
        </IconButton>
      </Stack>
      <Stack flexGrow={1} justifyContent={'space-evenly'}>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel
            htmlFor="standard-adornment-search"
            hidden={value}
            sx={{
              transform: 'translate(0, 3px) scale(1)',
            }}
          >
            <Typography
              key={'What are you looking for'}
              variant="body1"
              color={theme.palette.common.black}
              sx={{
                opacity: 0.6,
                textTransform: 'uppercase',
              }}
            >
              What are you looking for?
            </Typography>
          </InputLabel>

          <StyledInput
            id="standard-adornment-search"
            onChange={onChangeTextSearch}
            inputRef={(e) => (textFocus = e)}
            onKeyDown={onKeyDown}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            value={value || ''}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="close search" onClick={onClose}>
                  <CloseIcon
                    sx={{
                      color: theme.palette.common.black,
                      transform: 'translateX(0px)',
                    }}
                  />
                </IconButton>
              </InputAdornment>
            }
            variant="standard"
            sx={{
              mt: '0 !important',
            }}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}
