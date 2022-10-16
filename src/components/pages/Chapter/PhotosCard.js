import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { IMAGE_SOURCE } from 'utils/constants';

export default function PhotosCard({ photos, width }) {
  return (
    <Stack rowGap={1}>
      <Box
        height={{
          xs: 'auto',
          md: '70vh',
        }}
        width={{
          xs: 'auto',
          md: 'max-content',
        }}
      >
        <img
          src={IMAGE_SOURCE + photos?.name}
          height={'100%'}
          width={'100%'}
          alt={photos?.title || 'loading...'}
        />
      </Box>
      <Typography variant={'body1'} color={'text.secondary'}>
        {photos?.description}
      </Typography>
    </Stack>
  );
}
