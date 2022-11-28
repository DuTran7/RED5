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
  Typography,
} from '@mui/material';
import CreateTeamForm from 'components/form/CreateTeamForm';
import { uploadFile } from 'components/service/AwardService';
import { updateTeam } from 'components/service/TeamService';
import Albums from 'components/shared/Albums';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export const TeamListResults = ({
  data,
  handleChangeList,
  onClose,
  ...rest
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [teamSelected, setTeamSelected] = useState(null);
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

  const handleAddImage = async (fileUrl, file, description = '') => {
    const bodyUploadFile = new FormData();
    bodyUploadFile.append('image', file);
    bodyUploadFile.append(
      'jsonAlbum',
      JSON.stringify({
        idTeam: teamSelected?.id,
        description,
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
    handleChangeList();
  };
  const onClickDelImg = async (id) => {
    const res = await updateTeam({
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
    handleChangeList();
  };
  const [selectedTeamIds, setSelectedTeamIds] = useState([]);
  const [limit, setLimit] = useState(999);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPressIds;

    if (event.target.checked) {
      newSelectedPressIds = data.map((p) => p.id);
    } else {
      newSelectedPressIds = [];
    }

    setSelectedTeamIds(newSelectedPressIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTeamIds.indexOf(id);
    let newSelectedPressIds = [];

    if (selectedIndex === -1) {
      newSelectedPressIds = newSelectedPressIds.concat(selectedTeamIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedTeamIds.slice(1)
      );
    } else if (selectedIndex === selectedTeamIds.length - 1) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedTeamIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedTeamIds.slice(0, selectedIndex),
        selectedTeamIds.slice(selectedIndex + 1)
      );
    }

    setSelectedTeamIds(newSelectedPressIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (teamSelected) {
      const newAlbum = data?.find(
        (el) => el.team?.id === teamSelected?.id
      )?.albums;

      if (newAlbum?.length > 0) {
        setAlbumsSelected(newAlbum);
      }
    }
  }, [data]);
  return (
    <Card className="admin-cms" {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Actor Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Albums</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, limit).map(({ team, albums }) => (
                <TableRow
                  hover
                  key={team.id}
                  selected={selectedTeamIds.indexOf(team.id) !== -1}
                >
                  <TableCell>{team.id}</TableCell>
                  <TableCell>{team.actorName}</TableCell>
                  <TableCell>{team.title}</TableCell>
                  <TableCell>
                    <img
                      src={IMAGE_SOURCE + team.name}
                      height={50}
                      width={50}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setTeamSelected(team);
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
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setTeamSelected(team);
                        setAlbumsSelected(albums);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDelImg(team.id);
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
      <StyledDialog title={'Update Team'} open={open} handleClose={handleClose}>
        <CreateTeamForm
          data={teamSelected}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
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

TeamListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
