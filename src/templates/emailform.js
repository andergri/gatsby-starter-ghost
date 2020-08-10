import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { MailChimpFormEmbeded } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const EmailForm = () => {

    return (
        <>
            <MailChimpFormEmbeded  />
        </>
    )
}

EmailForm.propTypes = {
}

export default EmailForm
