import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Dialog from 'react-dialog'

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      isDialogOpen: false
    }
  }

handleChange = (name, event) => {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

handleSubmit = (e) => {
  e.preventDefault()
    this.setState({isDialogOpen: true})
}

 render () {

    if (this.state.isDialogOpen){

        return(
            <Dialog
                title="Color"   
                onClose={this.handleClose}
                width={600}
                height={600}
            >
                <h1>CHECK YOUR EMAIL DUDE</h1>
            </Dialog>

        )

    }

    return (

      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

       <FormGroup>
          <FormControl
            className="form-control"
            id="email"
            type="email"
            value={this.state.username}
            onChange={this.handleChange.bind(this, 'username')}
            placeholder="Enter email" />
           {/* <FormControl
            className="form-control"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
            placeholder="Password" /> */}
        </FormGroup>

       <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
      </form>
    )
  }
}

export default withRouter(SignUp)