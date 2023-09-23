import { useState } from 'react'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import PriveteRoute from './PriveteRoute'

function App() {

  return (
   <div className='container'>
    <Routes>
      <Route path='/Account' element={<PriveteRoute/>}>
      <Route path="/Account" element={<Account/>}/>
      </Route>
      <Route path="/" element={<Signup/>}/>
    </Routes>
   </div>
  )
}

export default App
