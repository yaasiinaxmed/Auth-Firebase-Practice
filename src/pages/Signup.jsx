import React, { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const firebase = useFirebase()
  const navigate = useNavigate();

  useEffect(() => {
    if(firebase.isLogged) {
      navigate('/account')
    }
  }, [firebase, navigate])

  return (
    <div className="signup">
      <h2>Welcome YourSelf Up </h2>
      <button className="btn" onClick={firebase.signinWithGoogle}>
        <FaGoogle /> Sign in With Google
      </button>
    </div>
  );
}

export default Signup;
