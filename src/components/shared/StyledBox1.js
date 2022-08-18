import { Stack, Typography } from '@mui/material';
import { theme } from 'theme';

export default function StyledBox1({ title, name }) {
  return (
    <Stack
      direction={'row'}
      height={'50px'}
      borderBottom={'1px solid'}
      borderColor={theme.palette.common.black}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography variant="subtitle2"> {title} </Typography>
      <Typography variant="bold70012"> {name} </Typography>
    </Stack>
  );
}
