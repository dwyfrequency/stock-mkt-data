/* eslint-disable no-script-url */

import React, { useContext, useEffect, useState } from 'react';
import { AppRelatedContext } from '../context/AppContext';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function FavoriteStocks() {
  const classes = useStyles();
  const {
    favoriteStockList,
    favoriteStockListData,
    setFavoriteStockListData,
  } = useContext(AppRelatedContext);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {}, [favoriteStockList, favoriteStockListData]);

  async function fetchStockData(stockTicker) {
    try {
      const { data } = await Axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockTicker}&apikey=demo`
      );
    } catch (error) {
      setFetchError(error.message);
    }
  }

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
          {favoriteStockList.map(({ name, price, changePercent }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{changePercent}</TableCell>
            </TableRow>
          ))}
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
