import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { Container, CoinPrices } from '../components/common/crypto'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Crypto = ({ data, location, pageContext }) => {

    return (
        <>
            <MetaData location={location} />
            <Container isHome={true}>
                <div className="container">
                    <section className="post-feed">
                      <CoinPrices />
                    </section>
                </div>
            </Container>
        </>
    )
}

Crypto.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Crypto
