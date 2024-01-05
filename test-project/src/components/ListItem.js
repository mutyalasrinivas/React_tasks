import React from 'react';


const ListItem=(props)=>{
  return (
    <div className='list-items'>
        <h3>{props.user.name},{(props.user.age)},---{props.user.college}</h3>
        
    </div>
  )
}

export default ListItem;