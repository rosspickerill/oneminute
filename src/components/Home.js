import React, {Component} from 'react'
import {FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Route, Switch, Link } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'


const Home = () =>{
    return (
    
        <div>
            <br/>
     <img src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif" alt='Cat in one minute'/> 

     <Link to={`/register/`}><h1>Proceed</h1></Link> 
</div>
    )
}


export default Home