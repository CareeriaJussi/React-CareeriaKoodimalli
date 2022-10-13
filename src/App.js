import './App.css';
import React, {useState} from 'react';
import Laskuri from './Laskuri';
import Posts from './Posts';
import CustomerList from './CustomerList';
import Message from './Message';
import UserList from './UserList'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = () => {

const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)

  return (
    <div className="App">

      <Router>

      <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href='/Customers' className='mr-auto'>Customers</Nav.Link>
                <Nav.Link href='/Users' className='mr-auto'>Users</Nav.Link>
                <Nav.Link href='/Laskuri' className='mr-auto'>Laskuri</Nav.Link>
                <Nav.Link href='/Posts' className='mr-auto'>Typicode posts</Nav.Link>
            </Nav>
          </Navbar>

          <h2>Northwind Traders</h2>

      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <Switch>
          <Route path="/Customers"> <CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
                setShowMessage={setShowMessage} /></Route>

          <Route path="/Users"> <UserList setMessage={setMessage} setIsPositive={setIsPositive} 
                setShowMessage={setShowMessage} /></Route>

          <Route path="/Laskuri"> <Laskuri /></Route>
          <Route path="/Posts"> <Posts /></Route>
      </Switch>

      </Router>
  
    </div>
  )
}

export default App
