import React, { useState, useEffect } from 'react';
import './App.css';
import Customer from './Customer';
import CustomerService from './services/Customer';

const CustomerList = () => {

const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState([])

useEffect(() => {
CustomerService.getAll()
.then(data => {
    setCustomers(data)
})
},[]
)

  return (
    <>
      <h2 onClick={() => setShowCustomers(!showCustomers)}>Customers</h2>

      {
        showCustomers && customers && customers.map(c => (
            <Customer key = {c.customerId} customer={c}/>
          )
        )
      }

        
    </>    
  );
}

export default CustomerList;