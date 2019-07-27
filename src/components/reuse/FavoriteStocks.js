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
import { parseAPIResponse } from '../utils/etl';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const API_KEY = process.env.Alphavantage_API_KEY;

export default function FavoriteStocks() {
  const classes = useStyles();
  const {
    favoriteStockList,
    favoriteStockListData,
    setFavoriteStockListData,
  } = useContext(AppRelatedContext);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getApiData = async favoriteStockList => {
      const data = await Promise.all(
        favoriteStockList.map(stock => fetchStockData(stock))
      );
      const transformedData = parseAPIResponse(data);
      setFavoriteStockListData(transformedData);
    };
    getApiData(favoriteStockList);
  }, [favoriteStockList, setFavoriteStockListData]);

  async function fetchStockData(stockTicker) {
    try {
      const { data } = await Axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockTicker}&apikey=${API_KEY}`
      );
      return data;
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
          {favoriteStockListData
            ? favoriteStockListData.map(({ name, price, changePercent }) => {
                return (
                  <TableRow key={name}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell>{changePercent}</TableCell>
                  </TableRow>
                );
              })
            : favoriteStockList.map(name => {
                return (
                  <TableRow key={name}>
                    <TableCell>{name}</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                );
              })}
          {/* favoriteStockList.map(({ name, price, changePercent }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{changePercent}</TableCell>
                </TableRow>
              )) */}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more stocks
        </Link>
      </div>
    </React.Fragment>
  );
}
