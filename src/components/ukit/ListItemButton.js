import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

const StyledListItemButtonA = styled(
  ({ selectedValue, options, handleListItemClick }) => (
    <List component="nav" aria-label="main mailbox folders">
      {options &&
        options.map(({ value, contentNode, icon }, index) => (
          <ListItemButton
            sx={{
              p: 0,
              pb: '24px',
              '&:hover': {
                background: 'none',
              },
              '.MuiTouchRipple-root': {
                display: 'none',
              },
            }}
            key={index}
            selected={selectedValue === value}
            onClick={(event) => handleListItemClick(event, value)}
          >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText
              sx={{
                color: theme.palette.common.grey,
                '&:hover': {
                  span: {
                    color: theme.palette.primary.main,
                  },
                },
                textAlign: {
                  xs: 'center',
                  lg: 'start',
                },
              }}
              primary={contentNode}
            />
          </ListItemButton>
        ))}
    </List>
  )
)(({}) => ({}));

export default StyledListItemButtonA;
