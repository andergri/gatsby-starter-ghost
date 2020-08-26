import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
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
const CoinPrices = ({ data, children, bodyClass, isHome }) => {

    return (
        <>
            <div className="viewport">
                <h3>This is simple test</h3>
            </div>
        </>
    )
}

CoinPrices.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const CoinPricesQuery = props => (
     <CoinPrices {...props} />

)

export default CoinPricesQuery
