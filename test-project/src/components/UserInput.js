import React, { useState } from 'react';
import Wrapper from './Helpers.js/Wrapper';
import ErrorModal from './UI/ErrorModal';


const UserInput=(props)=>{
    const[userName,setUserName]=useState("")
    const [userAge,setUserAge]=useState("")
    const [error,setError]=useState();
    const nameHandler=(e)=>{
      setUserName(e.target.value);
    }
    const ageHandler=(e)=>{
       setUserAge(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(userName.trim().length===0||userAge.trim().length===0){
          setError({
            title:"InValid Details ",
            message:"Enter valid username and Age"
          })
          return;
        }
        if(+userAge<1){
          setError({
            title:"inValid Age",
            message:"Enter valid Age always age shuold be >0"
          })
        }
        const user={
            name:userName,
            age:userAge
        }
        props.userDetails(user)
    }
    const errorHandler=()=>{
       setError(null);
    }
  return (
    <Wrapper>
      {
        error&&
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}

        />
      }
    
    <div className='user-input'>
        <form className='form-container' onSubmit={submitHandler}>
        <label>Username</label>
        <input type='text' name='name' id="name" onChange={nameHandler}/>
        <label>Age</label>
        <input type='number' name='age' id="age" onChange={ageHandler}/>
        <button type='submit'>Add User</button>
        </form>
         
     </div>
       
    </Wrapper>
  )
}

export default UserInput;