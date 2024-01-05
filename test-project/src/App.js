 import { useState } from 'react';
import './App.css';
 import UserInput from './components/UserInput';
import NewUser from './components/NewUser';

function App() {
  const [users,setUsers]=useState([{
    name:"srinivas",
    age:25,
    college:"srinivasa"
  }
     
  ]
    
   );

  const addUsersHandler=(user)=>{
    setUsers(prevUsers=>{
      return [user,...prevUsers]
    })
    // setUsers(user)


  }
  console.log(users,"userssssss")
  return (
    <div className="App">
      <UserInput userDetails={addUsersHandler}/>
      <NewUser  users={users}/>
    </div>
  );
}

export default App;
