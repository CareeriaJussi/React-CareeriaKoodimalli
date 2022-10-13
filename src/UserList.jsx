import './App.css'
import React, {useState, useEffect} from 'react'
import UserService from './services/User'
import UserAdd from './UserAdd'

const UserList = ({setMessage, setIsPositive, setShowMessage}) => {

const [users, setUsers] = useState([])
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState("")

useEffect(() => {
  UserService.getAll()
  .then(data => {
    setUsers(data)
        })
    },[lisäystila, reload, muokkaustila] 
  )

const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
}

const editUsers = (user) => {
  setMuokattavaUser(user)
  setMuokkaustila(true)
}

  return (
        <>
            <h1><nobr>Users</nobr>

            {lisäystila && <UserAdd setLisäystila={setLisäystila} 
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}

            {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

            {!lisäystila && !muokkaustila &&
            <input placeholder="Search by Last Name" value={search} onChange={handleSearchInputChange} />
            }

            {!lisäystila && !muokkaustila &&
            <table id="userTable">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Accesslevel</th>
                    </tr>
                </thead>
                <tbody>

        
                {users && users.map(u =>
                {
                    const lowerCaseName = u.lastName.toLowerCase()
                    if (lowerCaseName.indexOf(search) > -1) {
                        return(
                            <tr key={u.userId}>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.email}</td>
                                <td>{u.accesslevelId}</td>
                            </tr>
                            
                                )
                            }
                        }
                    )
                }

                </tbody>

            </table>
            }
         </>
        )
    }

export default UserList