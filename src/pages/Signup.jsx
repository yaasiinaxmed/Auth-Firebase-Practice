import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (firebase.isLogged) {
      navigate("/account");
    }
  }, [firebase, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.signupWithEmailAndPass(email, password)
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          required
        />
        <button type="submit" className="btn">
          Sign up
        </button>
        <button className="btn" onClick={firebase.signinWithGoogle}>
          <FaGoogle /> Sign up With Google
        </button>
      </form>
    </div>
  );
}

export default Signup;
