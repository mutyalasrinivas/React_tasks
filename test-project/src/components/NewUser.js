import React from "react";
import ListItem from "./ListItem";
const NewUser=(props)=>{
    
  return(
    <div className="user-container">
        {props.users.map((userItem)=><ListItem user={userItem}/>)
         }
    </div>
  )
}
export default NewUser;