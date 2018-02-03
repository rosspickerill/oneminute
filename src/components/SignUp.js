import React, {Component} from 'react'
import {FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Dialog from 'react-dialog'
// import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {Modal} from 'react-bootstrap';
import {sendEmail} from './Auth'

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      isDialogOpen: false
    }
  }

handleChange = (name, event) => {
    this.setState({username: event.target.value})
  }

handleClose = () => this.setState({isDialogOpen: false})

handleSubmit = (e) => {
  e.preventDefault()
const au=
  sendEmail(this.state.username)
    console.log(au)
    if(au.authOK) this.setState({isDialogOpen: true})
    
}



 render () {

    if (this.state.isDialogOpen){

        return(
          <Modal show={this.state.isDialogOpen} onHide={this.close}>
           <Modal.Header closeButton>
             <Modal.Title>Info</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h4>Email sent! Check your email :)</h4>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={this.handleClose}>Close</Button>
           </Modal.Footer>
      </Modal>
        )

    }

    return (

     




      <form className="form-signin">

         <Row className="show-grid">
          <Col xs={12} md={12}>
            <h2 className="form-signin-heading">Please sign in</h2>
          </Col>
        </Row>

       <FormGroup>
         <Row className="show-grid">
          <Col xs={6} md={6} mdPush={2}>
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
           </Col>
          <Col xs={2} md={2} mdPush={2}>
             <Button  bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
           </Col>
        </Row>
     

  </FormGroup>

      </form>
    )
  }
}

export default withRouter(SignUp)