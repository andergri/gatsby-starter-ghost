import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const CoinTable = ({ header, data }) => (
    <>
        <TableContainer component={Paper}>
           <Table aria-label="simple table" className="table_frame">
             <TableHead>
               <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell style={{padding: "0em"}}></TableCell>
                  <TableCell style={{padding: "16px 0px"}}>Coin</TableCell>
                  <TableCell align="right">Market Cap</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Volume (24H)</TableCell>
                  <TableCell align="right">Circulating Supply</TableCell>
                  <TableCell align="right" style={{minWidth: "13rem"}}>Change (24H)</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {data.map((row, i) => (
                 <TableRow key={row.name}>
                  <TableCell component="th" align="left">{i + 1}</TableCell>
                   <TableCell component="th" align="left" style={{padding: "16px 0px"}}>
                      <Avatar alt={row.name} src={row.image} style={{width: "1.6rem", height: "1.6rem"}} />
                   </TableCell>
                   <TableCell component="th" align="left" style={{fontWeight: 600, padding: "16px 8px", minWidth: "20rem"}}>{row.name}</TableCell>
                   <TableCell component="th" align="right">${row.marketCap.toLocaleString()}</TableCell>
                   <TableCell component="th" align="right">${row.currentPrice.toLocaleString()}</TableCell>
                   <TableCell component="th" align="right">${row.totalVolume.toLocaleString()}</TableCell>
                   <TableCell component="th" align="right" style={{minWidth: "22rem"}}>{row.circulatingSupply.toLocaleString()} {row.symbol.toUpperCase()}</TableCell>
                   <TableCell component="th" align="right">{(row.priceChange24 )}%</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </TableContainer>
    </>
)

CoinTable.defaultProps = {
    navClass: `site-nav-item`,
}

CoinTable.propTypes = {
    header: PropTypes.array,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            symbol: PropTypes.string.isRequired,
            currentPrice: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired
  }

export default CoinTable
