
const ExpenseItem=({name,price,place})=>{
    const expenseDate=new Date();
    const expenseTitle="grocery";

    return(
        <div className="list">
         <h5>{name}--{price}</h5>
         <h5>{expenseTitle}</h5>
         <h3>{date}</h3>
         <h5>Location of Expenditure{place}</h5>
        </div>
    )
}
export default ExpenseItem;