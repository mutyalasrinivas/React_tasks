 import React from "react";
 import ExpenseItem from "./ExpenseItem";

const Expenses=(props)=>{
    return(
    <div>
      <ExpenseItem name={props.items[0].name} price={props.items[0].price} place={props.items[0].place}/>
      <ExpenseItem name={props.items[1].name} price={props.items[1].price} place={props.items[1].place}/>
      <ExpenseItem name={props.items[2].name} price={props.items[2].price} place={props.items[2].place}/>

    </div>)
}

export default Expenses;