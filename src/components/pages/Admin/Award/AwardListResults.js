import {
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import CreateAwardForm from 'components/form/CreateAwardForm';
import { updateAward, uploadFile } from 'components/service/AwardService';
import Albums from 'components/shared/Albums';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export const AwardListResults = ({
  awards,
  handleChangeList,
  onClose,
  ...rest
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [awardSelected, setAwardSelected] = useState(null);
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
        idAward: awardSelected?.id,
        description: 'award id ' + awardSelected?.id,
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
    const res = await updateAward({
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
  const [selectedAwardIds, setSelectedAwardIds] = useState([]);
  const [limit, setLimit] = useState(999);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedAwardIds;

    if (event.target.checked) {
      newSelectedAwardIds = awards.map(({ award }) => award.id);
    } else {
      newSelectedAwardIds = [];
    }
    setSelectedAwardIds(newSelectedAwardIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAwardIds.indexOf(id);
    let newSelectedAwardIds = [];

    if (selectedIndex === -1) {
      newSelectedAwardIds = newSelectedAwardIds.concat(selectedAwardIds, id);
    } else if (selectedIndex === 0) {
      newSelectedAwardIds = newSelectedAwardIds.concat(
        selectedAwardIds.slice(1)
      );
    } else if (selectedIndex === selectedAwardIds.length - 1) {
      newSelectedAwardIds = newSelectedAwardIds.concat(
        selectedAwardIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedAwardIds = newSelectedAwardIds.concat(
        selectedAwardIds.slice(0, selectedIndex),
        selectedAwardIds.slice(selectedIndex + 1)
      );
    }

    setSelectedAwardIds(newSelectedAwardIds);
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
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAwardIds.length === awards.length}
                    color="primary"
                    indeterminate={
                      selectedAwardIds.length > 0 &&
                      selectedAwardIds.length < awards.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actor Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Albums</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {awards.slice(0, limit).map(({ award, albums }) => (
                <TableRow
                  hover
                  key={award.id}
                  selected={selectedAwardIds.indexOf(award.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAwardIds.indexOf(award.id) !== -1}
                      onChange={(event) => handleSelectOne(event, award.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {award.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{award.title}</TableCell>
                  <TableCell>{award.description}</TableCell>
                  <TableCell>{award.actorName}</TableCell>
                  <TableCell>{award.status}</TableCell>
                  <TableCell>
                    <img
                      src={IMAGE_SOURCE + award.name}
                      height={50}
                      width={50}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setAwardSelected(award);
                        setAlbumsSelected(albums);
                        handleClickAlbum();
                      }}
                      sx={{
                        '&:hover': {
                          '& .MuiTypography-body1': {
                            color: 'blue',
                          },
                        },
                      }}
                    >
                      <Typography variant="body1">
                        {`View Albums (${albums?.length})`}
                      </Typography>
                    </Button>
                    <StyledDialog
                      title={'Albums'}
                      open={openAlbum}
                      handleClose={handleCloseAlbum}
                    >
                      <Albums
                        data={albumsSelected}
                        onClickAddImg={handleAddImage}
                        onClickDelImg={onClickDelImg}
                      />
                    </StyledDialog>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setAwardSelected(award);
                        setAlbumsSelected(albums);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDelImg(award.id);
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
        title={'Update Award'}
        open={open}
        handleClose={handleClose}
      >
        <CreateAwardForm
          data={awardSelected}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
      <TablePagination
        component="div"
        count={awards.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AwardListResults.propTypes = {
  awards: PropTypes.array.isRequired,
};
