import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
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
import { getInitials } from 'utils/helper';

export const TeamListResults = ({ data, ...rest }) => {
  const [selectedTeamIds, setSelectedTeamIds] = useState([]);
  const [limit, setLimit] = useState(10);
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

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedTeamIds.length === data.length}
                    color="primary"
                    indeterminate={
                      selectedTeamIds.length > 0 &&
                      selectedTeamIds.length < data.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, limit).map((team) => (
                <TableRow
                  hover
                  key={team.id}
                  selected={selectedTeamIds.indexOf(team.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTeamIds.indexOf(team.id) !== -1}
                      onChange={(event) => handleSelectOne(event, team.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={team.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(team.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {team.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{team.email}</TableCell>
                  <TableCell>
                    {`${team.address.city}, ${team.address.state}, ${team.address.country}`}
                  </TableCell>
                  <TableCell>{team.phone}</TableCell>
                  <TableCell>{format(team.createdAt, 'dd/MM/yyyy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
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
