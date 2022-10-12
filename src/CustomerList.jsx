import React, { useState, useEffect } from 'react';
import './App.css';
import Customer from './Customer';
import CustomerService from './services/Customer';
import CustomerAdd from './CustomerAdd';
import CustomerEdit from './CustomerEdit';

const CustomerList = ({setIsPositive, setShowMessage, setMessage}) => {

    const [customers, setCustomers] = useState([])
    const [showCustomers, setShowCustomers] = useState(false)
    const [lisäystila, setLisäystila] = useState(false)
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [reload, reloadNow] = useState(false)
     
    useEffect(() => {
      CustomerService.getAll()
      .then(data => {
        setCustomers(data)
    })
    },[lisäystila, reload]
    )

  return (
    <>
      <h1><nobr style={{ cursor: 'pointer' }}
                onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

                {lisäystila && <CustomerAdd setLisäystila={setLisäystila} 
                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                />}

      {
        showCustomers && customers && customers.map(c => (
            <Customer key = {c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            />
          )
        )
      }

        
    </>    
  );
}

export default CustomerList;