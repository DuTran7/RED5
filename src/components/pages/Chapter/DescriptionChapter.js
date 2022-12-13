import { Box, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from 'theme';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ROUTER } from 'utils/constants';
import Image from 'next/image';
import LegendBox from './LegendBox';
export default function DescriptionChapter({ chapter }) {
  const arr = chapter?.detailCategory?.description?.split('<cap>');
  if (
    !chapter?.detailCategory?.description ||
    !chapter?.detailCategory?.description?.trim()
  ) {
    return <></>;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.common.black,
      }}
      minWidth={'calc(100vw - 484px)'}
      p={{
        xs: '80px 16px',
        md: 8,
      }}
      rowGap={5}
    >
      <Stack flexGrow={1}>
        <Box
          width={'100%'}
          sx={{
            columnCount: {
              xs: 1,
              md: 2,
            },
            columnGap: '50px',
            paddingBottom: '10px',
          }}
        >
          <Typography variant={'caption'} color={'text.primary'}>
            {arr?.[0]}
          </Typography>
          {arr?.[1]?.split('<br>')?.map((el, i) => (
            <Typography
              key={i}
              mt={3}
              variant={'body1'}
              color={'text.secondary'}
            >
              {el}
            </Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
