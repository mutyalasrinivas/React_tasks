import React, { useReducer, useState,useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import {AuthContext} from '../../store/auth-context';
import Input from '../UI/Input/Input';
const emailReducer =(state,action)=>{
  if(action.type==='USER_INPUT'){
     return {value:action.val,isValid:action.val.includes('@')} ;
  }
  if(action.type==='INPUT_BLUR'){
    return {value:state.value,isValid:state.value.includes('@')};
  }
  return {value:'',isValid:false}
}
const passwordReducer=(state,action)=>{
   if(action.type==='PASS_INPUT'){
    return {value:action.val,isValid:action.val.trim().length>6}
   }
   if(action.type==='INPUT_BLUR'){
    return {value:state.value,isValid:state.value.trim().length>6}
   }
   return {value:'',isValid:false}
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{
    value:'',
    isValid:null
  })
  const [passWordState,dispatchPass]=useReducer(passwordReducer,{
    value:'',
    isValid:null
  })
  const authctx=useContext(AuthContext)
  const {isValid:emailIsValid}=emailState;
  const {isValid:passwordIsValid}=passWordState;

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT',val:event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passWordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
     dispatchPass({type:'PASS_INPUT',val:event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passWordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
         
          {/* <label htmlFor="email">collegename</label>
          <input
            type="text"
            id="collegename"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          /> */}
        <Input id="email"
         label="E-Mail"
          type="email" 
          value={emailState.value} 
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input id="password"
         label="Password"
          type="password" 
          value={passWordState.value} 
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
         
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
