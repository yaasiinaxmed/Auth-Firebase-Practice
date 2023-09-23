import React, { useEffect } from 'react'
import { useFirebase } from '../context/firebase'
import { useNavigate } from 'react-router-dom';

function Account() {
  const firebase = useFirebase();
  const navigate = useNavigate()

  useEffect(() => {
    if(firebase.isLogged) {
        navigate('/account')
    } else {
        navigate('/')
    }
  }, [firebase, navigate])

  return (
    <div className='account'>
        <h1>hi {firebase.user.displayName} welcome</h1>
        <button className='btn' onClick={firebase.logOut}>Log Out</button>
    </div>
  )
}

export default Account