import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import CreatePressForm from 'components/form/CreatePressForm';
import { useState } from 'react';
import { Search as SearchIcon } from '../icons/search';
export const PressListToolbar = (props) => {
  const [open, setOpen] = useState(false);
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
          Press
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Press
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ mt: 3 }}>
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
      </Box> */}
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
            Create Press
            <Button>
              <CloseIcon onClick={handleClose} />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <CreatePressForm
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
