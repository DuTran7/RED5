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
import CreateCategoryDetailForm from 'components/form/CreateCategoryDetailForm';
import CreateCategoryForm from 'components/form/CreateCategoryForm';
import * as React from 'react';
import { Search as SearchIcon } from '../icons/search';
export const DetailCategoryListToolbar = (props) => {
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
          Detail Category
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Detail Category
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
            Create Detail Category
            <Button>
              <CloseIcon onClick={handleClose} />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <CreateCategoryDetailForm
            categories={props?.categories}
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
