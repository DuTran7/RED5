import { NorthEast } from '@mui/icons-material';
import { Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import { getAllPress } from 'components/service/PressService';
import {
  getAllRecognitions,
  getRecognitionsByPress,
} from 'components/service/RecognitionsService';
import Loading from 'components/shared/Loading';
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
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [listAddress, setListAddress] = useState([]);
  const [recognition, setRecognition] = useState(data);
  const [page, setPage] = useState(1);
  const [mobile, setMobile] = useState(false);
  const [pressSelected, setPressSelected] = useState(press);
  const [loading, setLoading] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
    const newPage = value - 1;
    updateRecognitionByPress(press?.id, newPage);
  };

  const updateRecognitionByPress = async (id, page) => {
    setOpen(true);
    let res = null;
    if (id) {
      res = await getRecognitionsByPress(id, page);
    } else {
      res = await getAllRecognitions(page, 4);
    }
    if (res.status === 200) {
      setListAddress(res.data?.content);
      setRecognition(res.data);
    }
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    setOpen(false);
  };

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  useEffect(() => {
    setListAddress(recognition?.content);
  }, [recognition?.content]);

  // Listen change pressId
  useEffect(() => {
    if (press) {
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
      <Loading open={open} handleClose={handleClose} />
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
          page={(recognition?.number || 0) + 1}
          boundaryCount={mobile ? 0 : 1}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: () => (
                  <Stack
                    mr={{
                      xs: 2,
                      md: 3,
                    }}
                  >
                    <Typography variant="h6">Previous</Typography>
                  </Stack>
                ),
                next: () => (
                  <Stack
                    ml={{
                      xs: 2,
                      md: 3,
                    }}
                  >
                    <Typography variant="h6">Next</Typography>
                  </Stack>
                ),
              }}
              {...item}
            />
          )}
          sx={{
            '.MuiPaginationItem-page': {
              // color: theme.palette.common.grey,
              opacity: 0.5,
              '&.Mui-selected': {
                opacity: 1,
              },
            },
            '.MuiPagination-ul': {
              justifyContent: 'center',
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
