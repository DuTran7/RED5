import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { theme } from 'theme';

export default function ContactUs() {
  const StyledDiv = ({ title, children, showBorder = true }) => {
    return (
      <Stack
        rowGap={3}
        p={{
          xs: '0 0 32px',
          md: '64px 80px 0',
        }}
        borderBottom={{
          xs: showBorder && '1px solid ' + theme.palette.divider,
          md: 'none',
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Stack rowGap={3}>{children}</Stack>
      </Stack>
    );
  };
  const StyledLabelContent = ({ title, children }) => {
    return (
      <Stack direction={'row'}>
        <Stack>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            minWidth={'90px'}
          >
            {title}
          </Typography>
        </Stack>
        <Stack flexGrow={1}>{children}</Stack>
      </Stack>
    );
  };
  const StyledLi = ({ children }) => {
    return (
      <li
        style={{
          color: '#ffffff',
          fontSize: '14px',
          margin: '0 0 12px 0',
        }}
      >
        {children}
      </li>
    );
  };
  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          md: 'flex',
        },
        background: theme.palette.common.black,
        height: {
          xs: 'auto',
          md: 'calc(100vh)',
        },
        overflowX: {
          xs: 'unset',
          md: 'auto',
        },
        overflowY: 'overlay',
        // borderLeft: '1px solid ' + theme.palette.divider,
      }}
      minWidth={'calc(100vw)'}
    >
      <Stack width={'100%'}>
        <Grid container zIndex={1}>
          <Grid
            item
            xs={12}
            md={4}
            borderRight={isMobile ? '' : '1px solid ' + theme.palette.divider}
            p={{
              xs: '80px 16px 32px',
              md: 0,
            }}
          >
            <StyledDiv title={'Contact'}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`If you have any questions about new project or orther inquires, please contact us. We will get back yo you as soon ass posible.`}
              </Typography>
              <StyledLabelContent title={'Email'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="mailto:Info@red5studio.vn">Info@red5studio.vn</a>
                </Typography>
              </StyledLabelContent>
              <StyledLabelContent title={'Phone'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="tel:+84 938 580 182">+84 938 580 182</a>
                </Typography>
              </StyledLabelContent>
              <StyledLabelContent title={'Location'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                >
                  435 Phan Xich Long Street, Ward 3, Phu Nhuan District, Ho Chi
                  Minh City
                </Typography>
              </StyledLabelContent>
            </StyledDiv>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            borderRight={isMobile ? '' : '1px solid ' + theme.palette.divider}
            p={{
              xs: '0 16px 32px',
              md: 0,
            }}
          >
            <StyledDiv title={'Join us'}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`Seeking for following positions`}
              </Typography>
              <ul
                style={{
                  listStyleType: 'square',
                  padding: '0 0 0 16px',
                }}
              >
                <StyledLi>
                  <Typography variant={'body1'} color={'text.primary'}>
                    {`01 interior design`}
                  </Typography>
                </StyledLi>
                <StyledLi>
                  <Typography variant={'body1'} color={'text.primary'}>
                    {`01 interior deployment`}
                  </Typography>
                </StyledLi>
                <StyledLi>
                  <Typography variant={'body1'} color={'text.primary'}>
                    {`01 pose design`}
                  </Typography>
                </StyledLi>
                <StyledLi>
                  <Typography variant={'body1'} color={'text.primary'}>
                    {`01 intern design`}
                  </Typography>
                </StyledLi>
              </ul>
              <Box>
                <Typography variant={'body1'} color={'text.secondary'}>
                  {`Please submit your portfolio to`}
                </Typography>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="mailto:truc@red5studio.vn">truc@red5studio.vn</a>
                </Typography>
              </Box>
            </StyledDiv>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            p={{
              xs: '0 16px 0',
              md: 0,
            }}
          >
            <StyledDiv title={'Follow'} showBorder={false}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`Or follow us via social chanels`}
              </Typography>

              <StyledLabelContent title={'Facebook'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="https:/facebook.com/red5studio.vn">
                    facebook.com/red5studio.vn
                  </a>
                </Typography>
              </StyledLabelContent>
              <StyledLabelContent title={'Instagram'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="https://instagram.com/red5studio.vn">
                    instagram.com/red5studio.vn
                  </a>
                </Typography>
              </StyledLabelContent>
              <StyledLabelContent title={'Youtube'}>
                <Typography
                  variant={'body1'}
                  color={'text.primary'}
                  minWidth={'90px'}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  <a href="https:/youtube.com/c/red5studio.vn">
                    youtube.com/c/red5studio.vn
                  </a>
                </Typography>
              </StyledLabelContent>
            </StyledDiv>
          </Grid>
        </Grid>
        <Stack
          flexGrow={1}
          height={'100%'}
          width={'100%'}
          minHeight={'356px'}
          // mt={10}
          sx={{
            backgroundImage:
              'linear-gradient(180deg, rgb(0 0 0 / 99%) 0%, #00000000 100%), url("/imgs/contact-bg.png")',
            // background:
            //   'linear-gradient(180deg, rgb(0 0 0 / 99%) 0%, #000000 100%)',
            transform: {
              xs: 'translateY(-50%) scaleY(2)',
              md: 'translateY(-18%) scaleY(1.4)',
            },
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <Image src={'/imgs/8b.jpg'} height="500" width="1300" /> */}
        </Stack>
      </Stack>
    </Box>
  );
}
