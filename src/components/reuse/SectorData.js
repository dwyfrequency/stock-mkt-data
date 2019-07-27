/* eslint-disable no-script-url */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function SectorData() {
  const classes = useStyles();
  const [sectorData, setSectorData] = useState({
    'Communication Services': '3.25%',
    'Consumer Staples': '1.19%',
    Financials: '0.99%',
    'Information Technology': '0.56%',
    'Health Care': '0.42%',
    Utilities: '0.41%',
    'Real Estate': '0.33%',
    'Consumer Discretionary': '0.22%',
    Materials: '0.04%',
    Industrials: '-0.17%',
    Energy: '-0.50%',
  });

  useEffect(() => {
    // setSectorData();
  }, []);

  return (
    <React.Fragment>
      <Title>Sector Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Sector</TableCell>
            <TableCell>Performance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(sectorData).map(([fieldName, sectorData]) => {
            return (
              <TableRow key={fieldName}>
                <TableCell>{fieldName}</TableCell>
                <TableCell>{sectorData}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
