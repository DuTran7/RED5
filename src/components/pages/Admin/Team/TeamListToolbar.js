import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreateTeamForm from 'components/form/CreateTeamForm';
import * as React from 'react';
import { Search as SearchIcon } from '../icons/search';
export const TeamListToolbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4" color={'black'}>
          Teams
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Team
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}></Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiTypography-root, & .MuiInputBase-input': {
            color: 'black',
          },
        }}
        maxWidth={'lg'}
      >
        <DialogTitle>
          <Stack direction={'row'} justifyContent={'space-between'}>
            Create Team
            <Button>
              <CloseIcon onClick={handleClose} />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <CreateTeamForm
            onClose={() => {
              handleClose();
              props?.handleChangeList();
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
