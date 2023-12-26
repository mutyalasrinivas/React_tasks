import React, { useState } from 'react';


const UserInput=(props)=>{
    const[userName,setUserName]=useState("")
    const [userAge,setUserAge]=useState("")
    const nameHandler=(e)=>{
      setUserName(e.target.value);
    }
    const ageHandler=(e)=>{
       setUserAge(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const user={
            name:userName,
            age:userAge
        }
        props.userDetails(user)
    }
  return (
    <div className='user-input'>
        <form className='form-container' onSubmit={submitHandler}>
        <label>Username</label>
        <input type='text' name='name' id="name" onChange={nameHandler}/>
        <label>Age</label>
        <input type='number' name='age' id="age" onChange={ageHandler}/>
        <button type='submit'>Add User</button>
        </form>
         
     </div>
  )
}

export default UserInput;