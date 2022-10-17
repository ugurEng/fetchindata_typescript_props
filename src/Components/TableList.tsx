import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Props {
  items: any[];
}

const TableList: React.FC<Props> = ({ items }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FILM NAME</TableCell>
            <TableCell align="right">DIRECTOR</TableCell>
            <TableCell align="right">NUMBER OF CHARACTERS</TableCell>
            <TableCell align="right">RELASE DATE</TableCell>
            <TableCell align="right">EPISODE ID</TableCell>
            <TableCell align="right">PRODUCER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.director}</TableCell>
              <TableCell align="right">{item.characters.length}</TableCell>
              <TableCell align="right">{item.release_date}</TableCell>
              <TableCell align="right">{item.episode_id}</TableCell>
              <TableCell align="right">{item.producer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
