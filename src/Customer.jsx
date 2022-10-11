import './App.css'
import React, {useState} from 'react'

const Customer = ({customer}) => {

const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='customerDiv'>
        
       <h4 onMouseEnter={() => setShowDetails(true)}
       onMouseLeave={() => setShowDetails(false)}
       >
           {customer.companyName}
        </h4>

       {showDetails && <div className="customerDetails">
                <h3 className='otsikko'>{customer.companyName}</h3>
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