import { ExpandMore } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from 'theme';
import { StyledDrawerTop } from 'components/ukit/Drawer';
import ButtonUnderline from './ButtonUnderline';
import { useState } from 'react';

export default function TopTextContainer(props) {
  const { text, value, options, onClickOptions } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        width: '100%',
        px: {
          xs: '16px',
          md: '40px',
        },
        py: {
          xs: '10px',
          md: '20px',
        },
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: theme.palette.divider,
      }}
    >
      <Typography variant="subtitle2" lineHeight={'20px'}>
        {text}
      </Typography>
      <Stack
        display={{
          xs: 'flex',
          md: 'none',
        }}
        direction={'row'}
        alignItems={'center'}
        onClick={handleExpandClick}
      >
        <Typography variant="h4" lineHeight={'20px'}>
          {value.name}
        </Typography>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon
            sx={{
              fill: theme.palette.common.black,
            }}
          />
        </ExpandMore>
      </Stack>
      <StyledDrawerTop
        visible={expanded}
        onClose={() => setExpanded(!expanded)}
      >
        <Stack direction={'column'} width={'100%'} rowGap={'40px'}>
          {options?.map((el, i) => (
            <ButtonUnderline
              key={i}
              onClick={() => {
                onClickOptions(el);
                handleExpandClick();
              }}
              isActive={value.id === el?.id}
            >
              <Typography variant="h4">{el.name}</Typography>
            </ButtonUnderline>
          ))}
        </Stack>
      </StyledDrawerTop>
    </Stack>
  );
}
