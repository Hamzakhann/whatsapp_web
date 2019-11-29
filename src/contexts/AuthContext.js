import React, { Component, createContext } from 'react';
import {auth,googleAuthProvider} from '../config/firebaseConfig';
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
    user:{},
    authError:''
  }
  loginUser = ()=>{
      console.log('chala google')
      auth.signInWithPopup(googleAuthProvider).then((res)=>{
          console.log(res)
      }).catch((e)=>{
          console.log(e)
      })
  }
  render() { 
    return (
      <AuthContext.Provider value={{...this.state, loginUser: this.loginUser}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
 
export default AuthContextProvider;