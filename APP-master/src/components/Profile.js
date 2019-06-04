import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Home from './Home';
import { Grid } from 'react-flexbox-grid';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render () {
        return (<Grid fluid>
                <Home/>
            </Grid>
        )
    }
}

export default Profile