import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../src/styles/global.css'
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { CreateAccount } from './pages/CreateAccount';
import { Home } from './pages/Home';
import { Login } from './pages/Login'

export function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createaccount' element={<CreateAccount />} />
        </Routes>
      </Router>
    </>
  )
}