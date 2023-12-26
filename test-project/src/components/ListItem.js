import React from 'react';


const ListItem=(props)=>{
  return (
    <div className='list-items'>
        <h3>{props.user.name},{(props.user.age)}</h3>
        
    </div>
  )
}

export default ListItem;