import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation, MailChimpForm, MailChimpFormInline, SocialInline, SocialMain } from '../'
import config from '../../../utils/siteConfig'
// import DiscordIcon from '../../static/images/icons/discord';

// Styles
import '../../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
* <Navigation data={site.navigation} navClass="site-nav-item" />
*/
const Container = ({ data, children, bodyClass, isHome }) => {

    return (
        <>
            <Helmet>
                <html lang="en" />
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}

                    <header className="site-head" style={{background: "none"}} >
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        <img className="site-logo" src={"../images/icons/forkedlogo.png"} alt={"Forked"} />
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                  <nav className="site-nav">
                                      <div className="site-nav-left">
                                          {/* The navigation items as setup in Ghost */}
                                      </div>
                                      <div className="site-nav-right">
                                          {  }
                                      </div>

                                  </nav>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}

                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <h1 className="site-mailform-title">Resources</h1>

                                <Link to="/">Forked © 2020</Link>
                            </div>
                            <div className="site-foot-nav-right">
                                <SocialInline />
                            </div>
                            <div className="site-foot-nav-right">
                                <MailChimpFormInline />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }),
}

const ContainerQuery = props => (
    <Container {...props} />
)

export default ContainerQuery
