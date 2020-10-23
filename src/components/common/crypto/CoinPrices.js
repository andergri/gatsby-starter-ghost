import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { CoinTable, } from '.'
import config from '../../../utils/siteConfig'
// import DiscordIcon from '../../static/images/icons/discord';


/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
* <Navigation data={site.navigation} navClass="site-nav-item" />
*/
const CoinPrices = () => {
    const coinPricesData = useStaticQuery(graphql`
        query {
          allCoinPrices {
            nodes {
              name
              symbol
              currentPrice
              image
              marketCap
              totalVolume
              priceChange24
              circulatingSupply
            }
          }
        }
      `)

    return (
        <>
            <div className="viewport">
            <h3 class="table_header">DeFi Tokens</h3>
            <CoinTable data={coinPricesData.allCoinPrices.nodes} />
            </div>
        </>
    )
}

CoinPrices.propTypes = {
}

export default CoinPrices
