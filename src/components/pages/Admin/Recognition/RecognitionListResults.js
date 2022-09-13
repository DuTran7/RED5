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

export const RecognitionListResults = ({ data, ...rest }) => {
  const [selectedRecognitionIds, setSelectedRecognitionIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedRecognitionIds;

    if (event.target.checked) {
      newSelectedRecognitionIds = data.map((p) => p.id);
    } else {
      newSelectedRecognitionIds = [];
    }

    setSelectedRecognitionIds(newSelectedRecognitionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRecognitionIds.indexOf(id);
    let newSelectedRecognitionIds = [];

    if (selectedIndex === -1) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(1)
      );
    } else if (selectedIndex === selectedRecognitionIds.length - 1) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(0, selectedIndex),
        selectedRecognitionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedRecognitionIds(newSelectedRecognitionIds);
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
                    checked={selectedRecognitionIds.length === data.length}
                    color="primary"
                    indeterminate={
                      selectedRecognitionIds.length > 0 &&
                      selectedRecognitionIds.length < data.length
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
              {data.slice(0, limit).map((rc) => (
                <TableRow
                  hover
                  key={rc.id}
                  selected={selectedRecognitionIds.indexOf(rc.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRecognitionIds.indexOf(rc.id) !== -1}
                      onChange={(event) => handleSelectOne(event, rc.id)}
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
                      <Avatar src={rc.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(rc.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {rc.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{rc.email}</TableCell>
                  <TableCell>
                    {`${rc.address.city}, ${rc.address.state}, ${rc.address.country}`}
                  </TableCell>
                  <TableCell>{rc.phone}</TableCell>
                  <TableCell>{format(rc.createdAt, 'dd/MM/yyyy')}</TableCell>
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

RecognitionListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
