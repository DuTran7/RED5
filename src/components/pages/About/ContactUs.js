import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { theme } from 'theme';

export default function ContactUs() {
  const StyledDiv = ({ title, children }) => {
    return (
      <Stack rowGap={3} p={'64px 80px 0'}>
        <Typography variant="h2">{title}</Typography>
        {children}
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
        display: 'flex',
        background: theme.palette.common.black,
        height: 'calc(100vh - 84px)',
        overflowX: 'auto',
        overflowY: 'hidden',
        borderLeft: '1px solid ' + theme.palette.divider,
      }}
      position={'relative'}
      minWidth={'100vw'}
    >
      <Stack width={'100%'}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            borderRight={'1px solid ' + theme.palette.divider}
          >
            <StyledDiv title={'Contact'}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`If you have any questions about new project or orther inquires, please contact us. We will get back yo you as soon ass posible.`}
              </Typography>
              <StyledLabelContent title={'Email'}>
                <a href="mailto:Info@red5studio.vn">
                  <Typography
                    variant={'body1'}
                    color={'primary.main'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    Info@red5studio.vn
                  </Typography>
                </a>
              </StyledLabelContent>
              <StyledLabelContent title={'Phone'}>
                <a href="tel:+84 938 580 182">
                  <Typography
                    variant={'body1'}
                    color={'text.primary'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    +84 938 580 182
                  </Typography>
                </a>
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
            borderRight={'1px solid ' + theme.palette.divider}
          >
            <StyledDiv title={'Join us'}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`Seeking for following positions`}
              </Typography>
              <ul
                style={{
                  listStyleType: 'circle',
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
              <Typography variant={'body1'} color={'text.secondary'}>
                {`Please submit your portfolio to`}
                <a href="mailto:truc@red5studio.vn">
                  <Typography
                    variant={'body1'}
                    color={'text.primary'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    truc@red5studio.vn
                  </Typography>
                </a>
              </Typography>
            </StyledDiv>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledDiv title={'Follow'}>
              <Typography variant={'body1'} color={'text.secondary'}>
                {`Or follow us via social chanels`}
              </Typography>

              <StyledLabelContent title={'Facebook'}>
                <a href="facebook.com/red5studio.vn">
                  <Typography
                    variant={'body1'}
                    color={'text.primary'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    facebook.com/red5studio.vn
                  </Typography>
                </a>
              </StyledLabelContent>
              <StyledLabelContent title={'Instagram'}>
                <a href="instagram.com/red5studio.vn">
                  <Typography
                    variant={'body1'}
                    color={'text.primary'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    instagram.com/red5studio.vn
                  </Typography>
                </a>
              </StyledLabelContent>
              <StyledLabelContent title={'Youtube'}>
                <a href="youtube.com/c/red5studio.vn">
                  <Typography
                    variant={'body1'}
                    color={'text.primary'}
                    minWidth={'90px'}
                    sx={{
                      textDecoration: 'underline',
                    }}
                  >
                    youtube.com/c/red5studio.vn
                  </Typography>
                </a>
              </StyledLabelContent>
            </StyledDiv>
          </Grid>
        </Grid>
        <Stack
          flexGrow={1}
          height={'89%'}
          width={'100%'}
          sx={{
            background: 'url("/imgs/contact-bg.png")',
          }}
        ></Stack>
      </Stack>
    </Box>
  );
}
