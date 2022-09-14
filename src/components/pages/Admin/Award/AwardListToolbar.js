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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateAwardForm from 'components/form/CreateAwardForm';
import * as React from 'react';
import { Search as SearchIcon } from '../icons/search';
import CloseIcon from '@mui/icons-material/Close';

export const AwardListToolbar = (props) => {
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
          Awards
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Award
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
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
            Create Award
            <Button>
              <CloseIcon onClick={handleClose} />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <CreateAwardForm
            onClose={() => {
              handleClose();
              props?.handleChangeList?.();
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
