import { Box, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from 'theme';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ROUTER } from 'utils/constants';
import Image from 'next/image';
import LegendBox from './LegendBox';
export default function DescriptionChapter({ chapter }) {
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
          <Typography
            variant={'caption'}
            color={'text.primary'}
          >{`Everyone has a few times skipping class. The spaces where "we" often gather - tennis courts, locker rooms, swimming pools, etc... are the construction's design inspiration. `}</Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {`We want to aim at the dynamic and youthful as the 'Libe brand' is giving young people. Combining colors, lines, shapes on a retro color background creates fun in the space and enhances the product's value.`}{' '}
          </Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {`Our construction's facade is inspired by retro cubes made of red
        post-shaped steel covered with an effect paint.`}{' '}
          </Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {` Coming into the
        construction, we want to change the familiar Libe brand's look with
        colorful colors; the tennis court-inspired floor is cut out of color.
        The hanging furniture system along the walls is placed on an off-white
        color background to highlight the product. Our mobile hanging design is
        inspired by products containing tools in the sports field in addition to
        the fixed suspension system. `}
          </Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {`Entering the cashier area, the image we borrowed was a warehouse with plastic containers and storage cabinets. The ground floor's connecting point and the floor is a strip of stairs emphasized in orange to show the youthfulness leading in space, inside the staircase creating excitement by the color system moving along the stairs.`}{' '}
          </Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {`Upstairs we want to emphasize the joyfulness with mosaic floor tiles inspired by the feeling in a swimming pool and lush greenery.`}{' '}
          </Typography>
          <Typography mt={3} variant={'body1'} color={'text.secondary'}>
            {`The fitting part is a locker - because that's where people store their belongings and transform themselves, opening up the dresser a bit is turning into a party girl ...`}
          </Typography>
        </Box>
      </Stack>
      <Stack width={'100%'}>
        <Image
          src={'/imgs/bottom-img-description.png'}
          height={184}
          width={1322}
          alt={'loading...'}
        />
      </Stack>
    </Box>
  );
}
