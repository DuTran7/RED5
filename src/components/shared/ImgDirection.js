import { Box, Button, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { StyledOutlineButton } from 'components/ukit/Button';
import Image from 'next/image';
import { theme } from 'theme';

const useStyles = makeStyles({
  img: {
    // backgroundImage: 'url("/imgs/banner.png")',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    minHeight: '480px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDirection: {
    position: 'absolute',
    height: '120px',
    width: '320px',
    borderRadius: '50%',
    border: '1px solid #FFFCF6',
    color: '#FFFFFF',
    fontSize: '32px',
    left: '38%',
    marginTop: '15%',
  },
});
const ImgDirection = ({ tittle }) => {
  const classes = useStyles();
  const imgsStyle = {
    backgroundImage: 'url("/imgs/banner.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '648px',
    width: '100%',
    position: 'relative',
  };
  return (
    <>
      <div style={imgsStyle}>
        <StyledOutlineButton
          width={'320px'}
          height={'120px'}
          sx={{
            position: 'absolute',
            left: '50%',
            zIndex: 1,
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            color: theme.palette.common.white,
          }}
        >
          <Typography variant="h3" color={theme.palette.common.white}>
            {tittle}
          </Typography>
        </StyledOutlineButton>
      </div>

      {/* <Image
        sx={{ position: 'relative', width: '100%' }}
        src="/imgs/banner.png"
        height={'500px'}
        minHeight={'480px'}
        width="1440px"
      ></Image>
      <Button
        sx={{
          position: 'absolute',
          height: '150px',
          width: '420px',
          borderRadius: '50%',
          border: '1px solid #FFFCF6',
          color: '#FFFFFF',
          fontSize: '32px',
          left: '35%',
          marginTop: '15%',
          fontWeight: 'bold',
        }}
      >
        {tittle}
      </Button> */}
    </>
  );
};

export default ImgDirection;
