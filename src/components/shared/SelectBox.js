import { Stack, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { StyledSelectBox } from 'components/ukit/Select';
import { theme } from 'theme';

export default function SelectBox({
  title,
  value,
  handleChange,
  defaultValue,
  options,
  textTransform,
  titleVariant,
}) {
  return (
    <Stack
      direction={'column'}
      height={'42px'}
      borderBottom={'1px solid'}
      borderColor={theme.palette.common.black}
      justifyContent={'center'}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          variant={titleVariant || 'subtitle2'}
          textTransform={textTransform}
        >
          {title}
        </Typography>
        <StyledSelectBox
          value={value}
          onChange={handleChange}
          displayEmpty
          defaultValue={defaultValue}
        >
          {options?.map((el, i) => (
            <MenuItem value={el.value} key={i}>
              <Typography variant="bold70012">{el.name}</Typography>
            </MenuItem>
          ))}
        </StyledSelectBox>
      </Stack>
    </Stack>
  );
}
