/* eslint-disable no-script-url */

import React, { useContext } from 'react';
import { AppRelatedContext } from '../context/AppContext';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// // Generate Order Data
// function createData(id, name, shipTo, paymentMethod, amount) {
//   return { id, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(0, 'APPL', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
//   createData(1, 'BLK', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
//   createData(2, 'BMG', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
// ];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function FavoriteStocks() {
  const classes = useStyles();
  const { favoriteStocks } = useContext(AppRelatedContext);
  return (
    <React.Fragment>
      <Title>Favorite Stocks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>% Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favoriteStocks.map(({ name, price, changePercent }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{changePercent}</TableCell>
            </TableRow>
          ))}
          {JSON.stringify(favoriteStocks)}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
