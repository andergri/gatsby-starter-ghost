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
import {
	TwitterShareButton,
} from 'react-share';

// <Link to="https://twitter.com/readforked" target="_blank" className="socialMedia" >
// <IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
// 	<TelegramIcon fontSize="large" style={{ color: '#FFF' }}/>
// </IconButton>
// </Link>
// <Link to="https://twitter.com/readforked" target="_blank" className="socialMedia" >
// <IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
// 	<img src="/images/icons/discord.svg" style={{ height: '28px' }} alt="Discord" />
// </IconButton>
// </Link>

const SocialInline = ({email, result}) => {

    const handleChange = event => {
      email = event.target.value;
    }

    return (
      <>
      <h1 className="site-mailform-title" style={{ textAlign: 'left' }}>Follow</h1>
      <p className="site-mailform-p" style={{color: '#FFF', textAlign: 'left' }}></p>
      <Link to="https://twitter.com/readforked" target="_blank" className="socialMedia" >
      <IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
        <TwitterIcon fontSize="large" style={{ color: '#FFF' }}/>
      </IconButton>
      </Link>
			<Link to="https://defipulse.com/defi-list" target="_blank" className="socialMedia" >
			<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
				<img src="/images/icons/defipulse.png" style={{ height: '26px', marginTop: '2px' }} alt="Discord" />
			</IconButton>
			</Link>
      </>
    )
}

SocialInline.propTypes = {
  state: PropTypes.arrayOf(
      PropTypes.shape({
          email: PropTypes.string,
          result: PropTypes.string,
      })
  )
}

export default SocialInline
