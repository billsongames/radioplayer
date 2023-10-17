import { React } from "react";

import GoogleButton from 'react-google-button'

import { IconContext } from "react-icons";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";




import "./login.css"


//####################

const Login = ({ userID, onLogin, onLogout}) => {



  
  return(
    <div className="login">
      {userID ?
      <>
      <div className="login__text">
        Log out
      </div>

      <IconContext.Provider value={{ color: "whitesmoke", size: "36px"}}>
        <BiSolidLogOut
          className="login__button"
          onClick={onLogout}
        />
      </IconContext.Provider>
      </>  
      :
      <>
      <div className="login__text">
        Log in with Google
      </div>
      
      <IconContext.Provider value={{ color: "whitesmoke", size: "36px"}}>
        <FcGoogle
          className="login__button"
          onClick={onLogin}
        />
      </IconContext.Provider>
      </>
    }
  </div>
  )
}

export default Login