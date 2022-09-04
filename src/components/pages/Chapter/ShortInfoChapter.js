import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { theme } from 'theme';
import EastIcon from '@mui/icons-material/East';
import LegendBox from './LegendBox';
export default function ShortInfoChapter({ chapter }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          md: 'flex',
        },
        background: theme.palette.common.black,
      }}
      minWidth={'calc(100vw - 80px)'}
    >
      <Stack flexGrow={1}>
        <Box
          position={'relative'}
          mt={10}
          sx={{
            display: 'flex',
            flexGrow: 1,
            backgroundImage: `url('${chapter.banner}')`,
            width: '100%',
            height: '476px',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          <Stack
            position={'absolute'}
            right={'26.67px'}
            bottom={'36.67px'}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            <EastIcon
              sx={{
                color: theme.palette.common.white,
                fontSize: '66px',
              }}
            />
          </Stack>
        </Box>
        <Stack
          p={{
            xs: 2,
            md: 5,
          }}
          pt={{
            xs: 3,
            md: 5,
          }}
          rowGap={3}
        >
          <Typography variant={'h1'} color={'text.primary'}>
            {chapter.name}
          </Typography>
          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            columnGap={'60px'}
            rowGap={2}
            width={'100%'}
            justifyContent={'space-between'}
          >
            <LegendBox label={'design'} name={chapter?.design} />
            <LegendBox label={'construction'} name={chapter?.construction} />
            <LegendBox label={'client'} name={chapter?.client} />
            <LegendBox label={'partner'} name={chapter?.partner} />
            <LegendBox label={'area'} name={chapter?.area} />
            <LegendBox label={'location'} name={chapter?.location} />
            <LegendBox label={'photo'} name={chapter?.photo} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
