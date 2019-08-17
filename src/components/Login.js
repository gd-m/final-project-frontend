import React from 'react';
import {connect }from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/users/currentUser'

const Login = ({loginForm, updateLoginForm, login}) => {

  const handleInputChange = (event) => {
        const {name , value} = event.target
        const updateFormInfo =  {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updateFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(loginForm)
    }
    
        return ( 
            <form onSubmit={handleSubmit}>
               <p>Username:</p> <input value={loginForm.username} name="username" type="text" onChange={handleInputChange}/><br/>
                <p>Password:</p><input value={loginForm.password} type="password" name= "password" onChange={handleInputChange} /> <br />
                <input type="submit" value="Login"/>

            </form>
         );
    
}

const mapStateToProps = state => {
     return {
        loginForm: state.loginForm
     }
}


 
export default connect (mapStateToProps, {updateLoginForm, login})(Login);