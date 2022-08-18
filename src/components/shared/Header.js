import { Box, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StyledBtnMenu } from 'components/ukit/Button';
import Image from 'next/image';
import PropTypes from 'prop-types';
import * as React from 'react';

import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { StyledDrawerLeft } from 'components/ukit/Drawer';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { theme } from 'theme';
import { API, ROUTER } from 'utils/constants';
import { request } from 'utils/request';
import ButtonUnderline from './ButtonUnderline';
import {
  IconCart,
  IconCartSvg,
  IconProfile,
  IconProfileSvg,
  IconSearch,
  IconSearchSvg,
  MenuIcon,
} from './icons';
const LinkLogo = ({ width, height }) => (
  <Link
    href={{
      pathname: '/',
    }}
  >
    <a>
      <Image
        src={'/icons/logo.svg'}
        width={width || 120} // Width of logo
        height={height || 48} // Height of logo
        alt={'OKKIO'}
      />
    </a>
  </Link>
);

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const router = useRouter();
  const session = useSession();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorSelected, setAnchorSelected] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    {
      name: 'shop',
      anchor: 'shop',
      hasMore: true,
    },
    { name: 'location', anchor: 'location', hasMore: true },
    { name: 'discovery', anchor: 'discovery', hasMore: true },
    { name: 'contact', anchor: 'contact' },
  ];
  const settings = [
    {
      el: IconSearch,
      type: 1,
      anchor: 'search',
    },
    {
      el: IconProfile,
      type: 1,
      anchor: 'profile',
    },
    {
      el: IconCart,
      type: 1,
      anchor: 'cart',
    },
  ];

  const settings1 = [
    {
      el: (
        <IconSearchSvg
          viewBox="-4 -4 24 24"
          sx={{
            fill:
              anchorSelected === 'search'
                ? theme.palette.common.white
                : theme.palette.primary.main,
          }}
        />
      ),
      type: 1,
      anchor: 'search',
    },
    {
      el: (
        <Typography
          variant="h6"
          noWrap
          component="div"
          justifyContent={'center'}
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            cursor: 'pointer',
          }}
        >
          <LinkLogo width={80} height={16} />
        </Typography>
      ),
      type: 2,
    },
    {
      el: (
        <IconProfileSvg
          viewBox="-4 -3 24 24"
          sx={{
            fill:
              anchorSelected === 'profile' || router.asPath.includes('profile')
                ? theme.palette.common.white
                : theme.palette.primary.main,
          }}
        />
      ),
      type: 1,
      anchor: 'profile',
    },
    {
      el: (
        <IconCartSvg
          viewBox="-3 0 24 24"
          sx={{
            fill:
              anchorSelected === 'cart'
                ? theme.palette.common.white
                : theme.palette.primary.main,
          }}
        />
      ),
      type: 1,
      anchor: 'cart',
    },
  ];

  return (
    // <HideOnScroll {...props}>
    <Stack>
      <AppBar
        sx={{
          background: theme.palette.common.white,
          boxShadow: 'none',
          zIndex: 999999,
        }}
      >
        <Stack
          width={'100%'}
          justifyContent={'center'}
          alignContent={'center'}
          minHeight={'24px'}
          position={'relative'}
          sx={{
            background: theme.palette.primary.main,
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: theme.palette.common.white, m: '4px 8px' }}
          >
            {`We're here throughout the holiday season, we're just putting our
            feet up on the stat days. Stay safe and remember to slip, slop and
            slap. `}
          </Typography>
        </Stack>
        <Toolbar
          disableGutters
          sx={{
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            height: 'auto',
            minHeight: '0 !important',
          }}
        >
          {/* Desktop UI */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: '92px',
              ml: {
                xs: '20px',
                md: '40px',
              },
              color: theme.palette.primary.main,
              display: {
                xs: 'none',
                md: 'flex',
              },
              cursor: 'pointer',
            }}
            width={{
              sm: 'calc(100vw / 3)',
            }}
          >
            <LinkLogo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => {
                closeAllDrawer();
                handleOpenNavMenu(e);
              }}
              color="inherit"
            >
              <MenuIcon viewBox="-2 -3 15 12" />
            </IconButton>

            <StyledDrawerLeft
              visible={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              widthCustom={{
                xs: 'calc(100vw - 48px - 1px)',
                sm: 'calc(100vw - 95px - 1px)',
                md: 'calc(60px + 60px + 60px + calc(calc(100vw - calc(100vw / 3) - 60px - 60px - 60px)) / 4 + 1px)',
                lg: 'calc(60px + 60px + 60px + calc(calc(100vw - calc(100vw / 3) - 60px - 60px - 60px)) / 4 + 1px)',
              }}
            >
              <Stack height={'100%'} direction={'row'}>
                <Stack
                  width={'calc(100vw - 49px)'}
                  height={'calc(100vh - 85px)'}
                  borderRight={'1px solid'}
                  borderColor={theme.palette.primary.main}
                >
                  <Stack direction={'column'}>
                    <Stack
                      direction={'column'}
                      justifyContent={'start'}
                      alignItems={'start'}
                      rowGap={5}
                      py={'40px'}
                      px={{
                        xs: '16px',
                        md: '40px',
                      }}
                    >
                      {pages?.length > 0 &&
                        pages?.map((item, i) => (
                          <Stack
                            key={i}
                            px={'0'}
                            direction={'column'}
                            width={'100%'}
                            onClick={() => onClickSetting(item.anchor)}
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                                '.MuiTypography-root': {
                                  color: theme.palette.primary.main,
                                },
                              },
                            }}
                          >
                            <ButtonUnderline
                              key={i}
                              onClick={() => {
                                // setTwoLevelDrawer(e.childs);
                                // setTarget(null);
                                // e?.onClick && e?.onClick();
                              }}
                              pt={0}
                              isMore={item.hasMore}
                            >
                              <Typography variant="h4">{item.name}</Typography>
                            </ButtonUnderline>
                          </Stack>
                        ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </StyledDrawerLeft>

            {settings1.map((item, i) => (
              <StyledBtnMenu
                key={i}
                onClick={(e) => {
                  onClickSetting(item.anchor);
                  console.log(item.anchor);
                  setAnchorSelected(item.anchor);
                }}
                sx={{
                  display: 'block',
                  padding: 0,
                  background:
                    (item.anchor === anchorSelected && item.type === 1) ||
                    (router.asPath.includes(item.anchor) &&
                      theme.palette.primary.main),
                  '&:hover': {
                    background:
                      item.anchor === anchorSelected &&
                      item.type === 1 &&
                      theme.palette.primary.main,
                  },
                  minWidth: '48px',
                }}
                width={item.type === 1 ? '48px' : '100%'}
                height={'48px'}
              >
                <Stack
                  width={'100%'}
                  direction={'row'}
                  justifyContent={'center'}
                >
                  {item.el}
                </Stack>
              </StyledBtnMenu>
            ))}
          </Box>
          {/* Mobile UI */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            <Stack direction={'row'}>
              {pages.map((page, index) => (
                <StyledBtnMenu
                  key={index}
                  onClick={(e) => {
                    onClickSetting(page.anchor);
                  }}
                  sx={{
                    display: 'block',
                    width: {
                      xs: 'calc(calc(100vw - calc(100vw / 3) - 180px) / 4)',
                      sm: 'calc(calc(100vw - calc(100vw / 3) - 180px) / 4)',
                      md: 'calc(calc(100vw - calc(100vw / 3) - 180px) / 4)',
                      lg: 'calc(calc(100vw - calc(100vw / 3) - 180px) / 4)',
                    },
                  }}
                  height={'60px'}
                >
                  <Typography
                    color={theme.palette.primary.main}
                    sx={{ ml: '20px' }}
                  >
                    {page.name}
                  </Typography>
                </StyledBtnMenu>
              ))}
              {settings.map((item, i) => (
                <StyledBtnMenu
                  key={i}
                  sx={{ display: 'block', padding: 0 }}
                  width={'60px'}
                  height={'60px'}
                  onClick={(e) => {
                    onClickSetting(item.anchor);
                  }}
                >
                  <Stack
                    width={'100%'}
                    direction={'row'}
                    justifyContent={'center'}
                  >
                    {item.el}
                  </Stack>
                </StyledBtnMenu>
              ))}
            </Stack>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Stack>
    // </HideOnScroll>
  );
};

export default Header;
