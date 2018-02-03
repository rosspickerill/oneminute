import React, {Component} from 'react'
import {FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Route, Switch, Link } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'


const Home = () =>{
    return (
    
        <div>
            <br/>
     <img src="https://www.freshbooks.com/blog/wp-content/uploads/2013/07/OneMinuteFull.png"/> 

     <Link to={`/register/`}><h1>PROCEED</h1></Link> 
</div>
    )
}


export default Home