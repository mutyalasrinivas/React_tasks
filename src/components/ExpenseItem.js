 import Card from "./Card";
const ExpenseItem=({name,price,place})=>{
     const expenseTitle="grocery";

    return(
        <Card className="list">
         <h5>{name}--{price}</h5>
         <h5>{expenseTitle}</h5>
         
         <h5>Location of Expenditure{place}</h5>
        </Card>
    )
}
export default ExpenseItem;