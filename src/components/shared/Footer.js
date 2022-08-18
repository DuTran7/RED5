import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { StyledBtnMenu, StyledContainerBtn } from 'components/ukit/Button';
import StyledListItemButtonA from 'components/ukit/ListItemButton';
import { theme } from 'theme';
import Link from 'next/link';
import Image from 'next/image';
import { FooterIcon } from 'components/shared/icons';
import StyledTextField from 'components/ukit/TextField';
import { StyledInput } from 'components/ukit/Input';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

const Property = ({ options = [], handleSelect, title }) => {
  return (
    <Stack
      direction={'column'}
      sx={{
        alignItems: {
          xs: 'center',
          lg: 'start',
        },
      }}
    ></Stack>
  );
};

const ListIcon = () => (
  <Stack
    direction={'row'}
    columnGap={3}
    height={'100%'}
    alignItems={'center'}
    sx={{
      justifyContent: {
        xs: 'center',
        lg: 'flex-end',
      },
    }}
  >
    <Image src={'/icons/twitter.svg'} alt={'Telegram'} width={48} height={48} />
    <Image src={'/icons/tele1.svg'} alt={'Telegram'} width={48} height={48} />
    <Image src={'/icons/github.svg'} alt={'Telegram'} width={48} height={48} />
  </Stack>
);

const Footer = () => {
  const navigate = (url) => {};
  const pages = ['About', 'Tier', 'Projects'];
  const options = [
    { value: '/careers', name: 'About Us' },
    { value: '/careers', name: 'privacy policy' },
    { value: '/careers', name: 'FAQ' },
    { value: '/careers', name: 'Deliery policy' },
    { value: '/careers', name: 'Contact us' },
    { value: '/careers', name: 'WHOLESALE' },
    { value: '/careers', name: 'return & exchange' },
  ];
  const helpOpts = [
    { value: '/careers', contentNode: 'Support' },
    { value: '/careers', contentNode: 'Term & Conditions' },
    { value: '/careers', contentNode: 'Privacy Policy' },
    { value: '/careers', contentNode: 'Press Kit' },
  ];
  const developersOpts = [{ value: '/careers', contentNode: 'Documentation' }];
  return (
    <Stack>
      <Stack
        width={'100vw'}
        sx={{
          background: theme.palette.common.black,
          p: '40px 40px',
        }}
        borderBottom={`1px solid ${theme.palette.common.white}`}
        rowGap={'40px'}
      >
        <Stack width={'100%'}>
          <Image
            src={'/icons/icon-footer.svg'}
            width={'98.97px'}
            height={'96px'}
            alt={'OKKIO'}
          />
        </Stack>
        <Grid container rowGap={'40px'}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={{
              xs: 'none',
              sm: 'grid',
            }}
          >
            <Grid container rowGap={'16px'}>
              {options.map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Typography
                    variant="h5"
                    color={'text.secondary'}
                    letterSpacing={'0.08em'}
                  >
                    {item.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                textAlign: 'center',
              }}
              direction={'column'}
              rowGap={'30px'}
              px={3}
            >
              <Typography
                variant="subtitle1"
                color={'text.secondary'}
                letterSpacing={'0.02em'}
              >
                WE BELIEVE THE COFFEE EXPERIENCE IS OUR RESPONSIBILITY FROM SEED
                TO CUP. COFFEE IS OUR CRAFT, OUR RITUAL, OUR PASSION. IT DRIVES
                US AND INSPIRES US. WITH THIS SIMPLE TRUTH AND RESPONSIBILITY WE
                ARE BRIDGING THE GAP FROM FARMLEVEL TO STREETLEVEL.
              </Typography>
              <Typography
                variant="subtitle1"
                color={'text.secondary'}
                letterSpacing={'0.02em'}
              >
                WE ARE OKKIO. MADE IN VIETNAM.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Stack
              direction={'column'}
              alignItems={{
                xs: 'start',
                md: 'flex-end',
              }}
            >
              <Stack direction={'column'} width={'322px'} rowGap={'14px'}>
                <Typography variant={'h3'} color={'text.secondary'}>
                  Join OUr COmMunity
                </Typography>
                <FormControl sx={{ width: '100%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    <Typography variant="subtitle3" key={'asdd'}>
                      Enter your Email
                    </Typography>
                  </InputLabel>

                  <StyledInput
                    id="standard-adornment-password"
                    type="email"
                    sx={{
                      color: theme.palette.common.white,
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          <SendIcon
                            sx={{
                              color: theme.palette.common.white,
                              transform: 'translateX(10px)',
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    variant="standard"
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={{
              xs: 'grid',
              sm: 'none',
            }}
          >
            <Grid container rowGap={'16px'}>
              {options.map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Typography
                    variant="h5"
                    color={'text.secondary'}
                    letterSpacing={'0.08em'}
                  >
                    {item.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        width={'100vw'}
        sx={{
          background: theme.palette.common.black,
          p: '40px 40px',
        }}
        borderBottom={`1px solid ${theme.palette.common.white}`}
        rowGap={'40px'}
      >
        <Grid container rowGap={'24px'}>
          <Grid item xs={12} sm={4} md={4}>
            <Stack direction={'column'} alignItems={'start'}>
              <Typography
                variant={'subtitle1'}
                maxWidth={'237px'}
                color={'text.secondary'}
              >
                © OKKIO COFFEE ROASTERS 2022 ALL RIGHTS RESERVED
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            textAlign={{
              xs: 'start',
              sm: 'center',
            }}
          >
            <Stack
              direction={'column'}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
              }}
            >
              <Typography
                variant={'subtitle1'}
                maxWidth={'211px'}
                color={'text.secondary'}
              >
                104 BRONSON STREET STE 19 SANTA CRUZ, CA 95062
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            textAlign={{
              xs: 'start',
              sm: 'end',
            }}
          >
            <Stack
              direction={'column'}
              alignItems={{
                xs: 'start',
                sm: 'flex-end',
              }}
            >
              <Typography
                variant={'subtitle1'}
                maxWidth={'283px'}
                color={'text.secondary'}
              >
                PROUDLY ROASTED IN SANTA CRUZ, CA WEBSITE MADEBYCOLONY.COM
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Footer;
