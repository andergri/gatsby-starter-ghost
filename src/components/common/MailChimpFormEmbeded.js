import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const MailChimpFormEmbeded = ({email, result}) => {

    const _handleSubmit = async e => {
      e.preventDefault();
      console.log("email: " + email);
      result = await addToMailchimp(email);
      console.log("result: " + result.result);
      console.log("msg: " + result.msg);
      navigate(`/thanks-for-subscribing`);
    }

    const handleChange = event => {
      email = event.target.value;
    }

    const SubmitButton = (props) => ( <button {...props} type='submit' />);

    return (
      <>
      <div className="site-mailform-embeded">
      <h1 className="site-mailform-title" style={{fontSize: '3rem', color: '#000', textAlign: 'left', paddingBottom: '6px', borderBottom: "2px solid #000" }}>Newsletter</h1>
      <p className="site-mailform-p" style={{color: '#000', textAlign: 'left' }}>Subscribe to our newsletter for the latest crypto news, enterprise solutions, developer resources, and more.</p>
      <form onSubmit={_handleSubmit} className="site-mailform-container cblack" style={{backgroundColor: '#FFF', color: '#000 !important'}}>
        <TextField
          id="outlined-email-input"
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          variant="outlined"
          onChange={handleChange}
          className="site-mailform-container-text"
        />
        <br />
        <IconButton variant="contained" color="primary" label="Submit" component={SubmitButton}>
          <ArrowForwardIcon color="primary" fontSize="large"/>
        </IconButton>
      </form>
      </div>
      </>
    )
}

MailChimpFormEmbeded.propTypes = {
  state: PropTypes.arrayOf(
      PropTypes.shape({
          email: PropTypes.string,
          result: PropTypes.string,
      })
  )
}

export default MailChimpFormEmbeded
