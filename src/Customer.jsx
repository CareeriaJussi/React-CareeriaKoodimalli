import './App.css'
import React, {useState} from 'react'
import CustomerService from './services/Customer'

const Customer = ({customer, editCustomer, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {

const [showDetails, setShowDetails] = useState(false)

const deleteCustomer = (customer) => {
    let vastaus = window.confirm(`Remove customer ${customer.companyName}`)

    if (vastaus === true) {  
    CustomerService.remove(customer.customerId)
    .then(res => {
       if (res.status === 200) {
        setMessage(`Successfully removed customer ${customer.companyName}`)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000)

        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
        reloadNow(!reload)
       } 
          }
    )
    .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)
        window.scrollBy(0, -10000)

        setTimeout(() => {
          setShowMessage(false)
         }, 6000)
  })

}  else   {
     setMessage("Poisto peruttu onnistuneesti")
     setIsPositive(true)
     setShowMessage(true)
     window.scrollBy(0, -10000)

     setTimeout(() => {
     setShowMessage(false)},
     5000
     )
   }
}



  return (
    <div className='customerDiv'>
        
       <h4 onClick={() => setShowDetails(!showDetails)}>
           {customer.companyName} 
        </h4>

       {showDetails && <div className="customerDetails">
                <h3 className='otsikko'>{customer.companyName}</h3>

                <button onClick={() => deleteCustomer(customer)}>Delete</button>
                <button onClick={() => editCustomer(customer)}>Edit</button>
                <table>
                    <thead>
                        <tr>
                            <th className='asiakas'>Contact person</th>
                            <th className='asiakas'>Phone</th>
                            <th className='asiakas'>Address</th>
                            <th className='asiakas'>City</th>
                            <th className='asiakas'>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='asiakas'>{customer.contactName}</td>
                            <td className='asiakas'>{customer.phone}</td>
                            <td className='asiakas'>{customer.address}</td>
                            <td className='asiakas'>{customer.city}</td>
                            <td className='asiakas'>{customer.country}</td>
                        </tr>
                    </tbody>
                </table></div>}
    </div>
  )
}

export default Customer