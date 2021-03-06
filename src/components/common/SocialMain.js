import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

// <Link to="https://twitter.com/readforked" target="_blank" className="socialMedia" >
// <IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
//   <img src="/images/icons/discord.svg" style={{ height: '28px' }} alt="Discord" />
// </IconButton>
// </Link>


const SocialMain = ({email, result}) => {

    const handleChange = event => {
      email = event.target.value;
    }

    return (
      <>
      <Link to="https://twitter.com/readforked" target="_blank" className="socialMedia" >
      <IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
        <TwitterIcon fontSize="large" style={{ color: '#FFF' }}/>
      </IconButton>
      </Link>
      </>
    )
}

SocialMain.propTypes = {
  state: PropTypes.arrayOf(
      PropTypes.shape({
          email: PropTypes.string,
          result: PropTypes.string,
      })
  )
}

export default SocialMain
