import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { theme } from 'theme';
import EastIcon from '@mui/icons-material/East';
import LegendBox from './LegendBox';
import { IMAGE_SOURCE } from 'utils/constants';
export default function ShortInfoChapter({ data }) {
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
          mt={{
            xs: 10,
            md: 0,
          }}
          sx={{
            display: 'flex',
            flexGrow: 1,
            backgroundImage: `url('${IMAGE_SOURCE + data?.image}')`,
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
            {data?.name}
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
            <LegendBox label={'design'} name={data?.design} />
            <LegendBox label={'construction'} name={data?.designTeam} />
            <LegendBox label={'client'} name={data?.client} />
            <LegendBox label={'partner'} name={data?.material} />
            <LegendBox label={'area'} name={data?.area} />
            <LegendBox label={'location'} name={data?.location} />
            <LegendBox label={'photo'} name={data?.photo} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
