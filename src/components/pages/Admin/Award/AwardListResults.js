import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
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
import { getInitials } from 'utils/helper';
import Image from 'next/image';
import { IMAGE_SOURCE } from 'utils/constants';

export const AwardListResults = ({ awards, ...rest }) => {
  const [selectedAwardIds, setSelectedAwardIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedAwardIds;

    if (event.target.checked) {
      newSelectedAwardIds = awards.map(({ award }) => award.id);
    } else {
      newSelectedAwardIds = [];
    }
    console.log(newSelectedAwardIds);
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
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAwardIds.length === awards.length}
                    color="primary"
                    indeterminate={
                      selectedAwardIds.length > 0 &&
                      selectedAwardIds.length < awards.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actor Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {awards.slice(0, limit).map(({ award }) => (
                <TableRow
                  hover
                  key={award.id}
                  selected={selectedAwardIds.indexOf(award.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAwardIds.indexOf(award.id) !== -1}
                      onChange={(event) => handleSelectOne(event, award.id)}
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
                    <Button>Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
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
