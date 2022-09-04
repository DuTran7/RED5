import { Box, Stack, Typography } from '@mui/material';
import { theme } from 'theme';

export default function Culture() {
  return (
    <Box
      sx={{
        display: 'flex',
        background: theme.palette.common.black,
      }}
      minWidth={'calc(100vw)'}
      height={'calc(100vh - 84px)'}
      borderRight={'1px solid ' + theme.palette.divider}
    >
      <Stack
        width={'100%'}
        height={'100%'}
        rowGap={3}
        p={'0 222px 0 232px'}
        justifyContent={'center'}
      >
        <Typography variant={'subtitle2'} color={'text.primary'}>
          Our definition of a beautiful design emphasizes on the relationship
          between human and space, activities and environment rather than
          meaningless decoration in order to deliver clients true experiences of
          happiness via their interactions with the spaces.
        </Typography>
        <Typography variant={'subtitle2'} color={'text.primary'} mt={3}>
          Each project is not only a challenge or an opportunity, but also a
          story to tell. And we want to become a greatest storyteller
        </Typography>
      </Stack>
    </Box>
  );
}
