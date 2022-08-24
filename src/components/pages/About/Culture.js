import { Box, Stack, Typography } from '@mui/material';
import { theme } from 'theme';

export default function Culture() {
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
      }}
      minWidth={'calc(100vw - 80px)'}
    >
      <Stack width={'100vw'} height={'100%'} rowGap={3} p={'120px 142px 0'}>
        <Typography variant={'subtitle2'} color={'text.primary'}>
          Our definition of a beautiful design emphasizes on the relationship
          between human and space, activities and environment rather than
          meaningless decoration in order to deliver clients true experiences of
          happiness via their interactions with the spaces.
        </Typography>
        <Typography variant={'subtitle2'} color={'text.primary'}>
          Each project is not only a challenge or an opportunity, but also a
          story to tell. And we want to become a greatest storyteller
        </Typography>
      </Stack>
    </Box>
  );
}