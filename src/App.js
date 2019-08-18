import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'

import {connect} from 'react-redux'
import {getCurrentUser} from './actions/users/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
    <div className="App">
      <div className="section">
          <h1>Welcome to Reader's Notebook</h1>

           {this.props.currentUser ? <Logout /> : <Login />}

      </div>

    </div>
  );
}


}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
