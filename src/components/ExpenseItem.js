
const ExpenseItem=({name,price,place})=>{

    return(
        <div className="list">
         <h5>{name}--{price}</h5>
         <h5>Location of Expenditure{place}</h5>
        </div>
    )
}
export default ExpenseItem;