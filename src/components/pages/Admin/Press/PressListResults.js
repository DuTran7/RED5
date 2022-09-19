import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import CreatePressForm from 'components/form/CreatePressForm';
import { uploadFile } from 'components/service/AwardService';
import { updatePress } from 'components/service/PressService';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { theme } from 'theme';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';
export const PressListResults = ({
  data,
  handleChangeList,
  onClose,
  ...rest
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [albumsSelected, setAlbumsSelected] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAlbum = () => {
    setOpenAlbum(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickAlbum = () => {
    setOpenAlbum(true);
  };

  const handleAddImage = async (fileUrl, file) => {
    const bodyUploadFile = new FormData();
    bodyUploadFile.append('image', file);
    bodyUploadFile.append(
      'jsonAlbum',
      JSON.stringify({
        idCategory: categorySelected?.id,
        description: 'press id ' + categorySelected?.id,
      })
    );
    const res = await uploadFile(bodyUploadFile);
    if (!res?.status === 200) {
      enqueueSnackbar('Upload file failed, please try again!', {
        variant: 'error',
      });
      return;
    }
    enqueueSnackbar('Upload image success', {
      variant: 'success',
    });
    handleCloseAlbum();
    handleChangeList();
  };
  const onClickDelImg = async (id) => {
    const res = await updatePress({
      id,
      status: ITEM_STATUS.DEACTIVATED,
    });
    if (!res?.status === 200) {
      enqueueSnackbar('Delete file failed, please try again!', {
        variant: 'error',
      });
      return;
    }
    enqueueSnackbar('Delete image success', {
      variant: 'success',
    });
    handleCloseAlbum();
    handleChangeList();
  };
  const [selectedPressIds, setSelectedPressIds] = useState([]);
  const [limit, setLimit] = useState(999);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPressIds;

    if (event.target.checked) {
      newSelectedPressIds = data.map((p) => p.id);
    } else {
      newSelectedPressIds = [];
    }

    setSelectedPressIds(newSelectedPressIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPressIds.indexOf(id);
    let newSelectedPressIds = [];

    if (selectedIndex === -1) {
      newSelectedPressIds = newSelectedPressIds.concat(selectedPressIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(1)
      );
    } else if (selectedIndex === selectedPressIds.length - 1) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(0, selectedIndex),
        selectedPressIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPressIds(newSelectedPressIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className="admin-cms" {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, limit).map((press) => (
                <TableRow
                  hover
                  key={press.id}
                  selected={selectedPressIds.indexOf(press.id) !== -1}
                >
                  <TableCell>{press.id}</TableCell>
                  <TableCell>{press.title}</TableCell>
                  <TableCell>{press.description}</TableCell>
                  <TableCell
                    sx={{
                      background: theme.palette.common.black,
                    }}
                  >
                    {press?.name ? (
                      <img src={IMAGE_SOURCE + press?.name} height={50} />
                    ) : (
                      'Not have image'
                    )}
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() => {
                        setItemSelected(press);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDelImg(press.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <StyledDialog
        title={'Update Press'}
        open={open}
        handleClose={handleClose}
      >
        <CreatePressForm
          data={itemSelected}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
      <TablePagination
        component="div"
        count={data.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PressListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
