import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
} from 'react-share';
import config from '../../utils/siteConfig'
import url from 'url'

const SocialSharing = ({ socialConfig, tags }) => {

    const canonical = url.resolve(config.siteUrl, socialConfig.config.path);
    const trigger = useScrollTrigger();

    return (

        <div className="post-social social-share-box">
          <TwitterShareButton url={canonical} className="button is-outlined is-rounded twitter" title={socialConfig.config.title + ' (via ' + socialConfig.twitterHandle + ')'} >
							<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
			          <TwitterIcon fontSize="large" style={{ color: '#15171b' }} />
			        </IconButton>
          </TwitterShareButton>
          <LinkedinShareButton url={canonical} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
							<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
								<LinkedInIcon fontSize="large" style={{ color: '#15171b' }}/>
							</IconButton>
          </LinkedinShareButton>
          <RedditShareButton url={canonical} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
							<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
								<RedditIcon fontSize="large" style={{ color: '#15171b'}}/>
							</IconButton>
          </RedditShareButton>
          <FacebookShareButton openShareDialogOnClick={true} url={canonical} className="button is-outlined is-rounded facebook" >
							<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
								<FacebookIcon fontSize="large" style={{ color: '#15171b' }}/>
							</IconButton>
          </FacebookShareButton>
          <WhatsappShareButton url={canonical} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
							<IconButton color="primary" aria-label="upload picture" component="span" className="icon socialIcon">
								<WhatsAppIcon fontSize="large" style={{ color: '#15171b' }}/>
							</IconButton>
          </WhatsappShareButton>
        </div>

    )
}

SocialSharing.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
SocialSharing.defaultProps = {
	tags: [],
};

export default SocialSharing
