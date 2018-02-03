import React from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'


import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar'
import Send from 'material-ui-icons/Send'

const RegistrationForm = ({email,nameOnCard, cardNumber, ccv, handleChange}) => (
	<Paper component='form' method="POST" style={{ padding: 35 }} >
      <h2>Complete your registration</h2>
      <Grid container justify="center" spacing={8}> 
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            value={email}
            fullWidth
            margin='normal'
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name on Card"
            value={nameOnCard}
            onChange={handleChange('nameOnCard')}
            fullWidth
            margin='normal'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="card"
            label="Card Number"
            value={cardNumber}
            onChange={handleChange('cardNumber')}
            margin='normal'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ccv"
            label="CCV"
            value={ccv}
            onChange={handleChange('ccv')}
            margin='normal'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{textAlign:'right'}}>
        	<Button raised color="primary" aria-label="submit" type="submit">
            <span>submit</span>
              <Send/>
          	</Button>
        </Grid>
      </Grid>
  </Paper>
)

export default RegistrationForm
