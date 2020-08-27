import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation, MailChimpForm, MailChimpFormInline, SocialInline, SocialMain } from '.'
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
            }
          }
        }
      `)

    console.log(coinPricesData.allCoinPrices.nodes[0].name)

    return (
        <>
            <div className="viewport">
                <h3>This is simple test!</h3>
                {coinPricesData.allCoinPrices.nodes.map(( coin ) => {
                    return <h3>{coin.name}</h3>
                })}
                <h3>a</h3>

            </div>
        </>
    )
}

CoinPrices.propTypes = {
}

export default CoinPrices
