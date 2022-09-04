import { styled, Tab, Tabs } from '@mui/material';
import { theme } from 'theme';

export const AboutTabs = ({ value, onChange, options, ...other }) => {
  return (
    <StyledTabs
      {...other}
      value={value}
      onChange={onChange}
      variant="scrollable"
      allowScrollButtonsMobile
      indicatorColor="#ffffff00"
      orientation="vertical"
    >
      <Tab label="culture" value="culture" />
      <Tab label="team" value="team" />
      <Tab label="awards" value="awards" />
      <Tab label="press" value="press" />
      <Tab label="contact" value="contact" />
    </StyledTabs>
  );
};

export const StyledTabs = styled(Tabs)(({}) => ({
  '& .MuiTabs-scroller': {
    width: 'fit-content',
  },
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  '& .MuiTabs-flexContainer': {
    // rowGap: 3,
    height: 'calc(100vh - 84px)',
    justifyContent: 'center',
  },
  '& .MuiTab-root': {
    fontSize: '10px',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 300,
    lineHeight: 1.6,
    fontFamily: 'Red5 Helvetica',
    transform: 'rotate(90deg)',
    margin: '24px 0 0',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      borderBottomWidth: '2px',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        height: '2px',
        width: '40px',
        transform: 'translateX(-50%)',
        borderBottom: '1px solid ' + theme.palette.primary.main,
      },
    },
  },
}));
