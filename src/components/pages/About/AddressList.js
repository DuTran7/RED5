import { NorthEast } from '@mui/icons-material';
import { Pagination, Stack, Typography } from '@mui/material';
import { getAllPress } from 'components/service/PressService';
import { getAllRecognitions, getRecognitionsByPress } from 'components/service/RecognitionsService';
import { useEffect, useState } from 'react';
import { theme } from 'theme';

export default function AddressList({ isMobile, data, press }) {
  // const data = [
  //   'Hybird bar',
  //   'September Coffee',
  //   'English Town by Red5 Studio, Ho Chi Minh City – Vietnam',
  //   'Nguyen Hoang Tu flagship store by Red5 Studio, Ho Chi Minh City – Vietnam',
  //   'Hybird bar',
  //   'Nguyen Hoang Tu flagship store',
  // ];
  const [listAddress, setListAddress] = useState([]);
  const [recognition, setRecognition] = useState(data);
  const [page, setPage] = useState(1);
  const [mobile, setMobile] = useState(false);
  const [pressSelected, setPressSelected] = useState(press);
  const handleChange = (event, value) => {
    setPage(value);
    const newPage = value - 1;
    updateRecognitionByPress(press?.id, newPage);
  };

  const updateRecognitionByPress = async (id, page) => {
    let res = null;
    if (id) {
      res = await getRecognitionsByPress(id, page);
    } else {
      res = await getAllRecognitions(page, 4);
    }
    console.log(res);
    if (res.status === 200) {
      setListAddress(res.data?.content);
      setRecognition(res.data);
    }
  };

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  useEffect(() => {
    setListAddress(recognition?.content);
  }, [recognition?.content]);

  // Listen change pressId
  useEffect(() => {
    console.log('1111', press);
    if (press) {
      console.log(press);
      updateRecognitionByPress(press?.id, 0);
    } else {
      setRecognition(data);
    }
  }, [press]);

  useEffect(() => {
    setRecognition(data);
  }, [data]);
  return (
    <Stack
      justifyContent={'center'}
      borderTop={'1px solid ' + theme.palette.divider}
    >
      {listAddress &&
        listAddress?.map((e, i) => (
          <a key={i} target={'_blank'} href={e.link} rel={'noreferrer'}>
            <Stack
              direction={'row'}
              key={i}
              height={{
                xs: '52px',
                md: '74px',
              }}
              alignItems={'center'}
              justifyContent={'space-between'}
              borderBottom={'1px solid ' + theme.palette.divider}
              p={'26px 24px'}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.04);',
                  cursor: 'pointer',
                },
              }}
            >
              {' '}
              <Typography
                variant="body1"
                height={'fit-content'}
                sx={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
                title={e?.name}
              >
                {e?.name}
              </Typography>
              <NorthEast
                sx={{
                  fill: {
                    xs: theme.palette.text.primary,
                    md: theme.palette.text.secondary,
                  },
                  fontSize: '20px',
                }}
              />
            </Stack>
          </a>
        ))}
      {listAddress?.length === 0 && (
        <Typography variant="h5" textAlign={'center'} my={3}>
          Recognitions are empty!
        </Typography>
      )}
      <Stack py={'29px'}>
        <Pagination
          count={recognition?.totalPages}
          siblingCount={mobile ? 2 : 3}
          page={recognition?.number}
          boundaryCount={mobile ? 0 : 1}
          onChange={handleChange}
          sx={{
            '.MuiPagination-ul': {
              justifyContent: 'center',
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
