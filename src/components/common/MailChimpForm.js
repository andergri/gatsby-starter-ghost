import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'

const MailChimpForm = ({email, result}) => {

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

    return (
      <>
      <form onSubmit={_handleSubmit} className="site-mailform-box">
        <TextField
          id="outlined-email-input"
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          variant="outlined"
          onChange={handleChange}
          className="site-mailform-input"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          <Typography variant="button" className="site-mailform-button">Try It</Typography>
        </Button>
      </form>
      </>
    )
}

MailChimpForm.propTypes = {
  state: PropTypes.arrayOf(
      PropTypes.shape({
          email: PropTypes.string,
          result: PropTypes.string,
      })
  )
}

export default MailChimpForm
