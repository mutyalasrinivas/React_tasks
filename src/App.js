 import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses=[{name:"food",price:100,place:"Annavaram"},{name:"petrol",price:900,place:"vadapalli"},{name:"movie",price:500,place:"goa"}]
  return (
    <div className="App">
      <>
      <h1>Expense Items</h1>
       {expenses.map((expense)=><ExpenseItem name={expense.name} price={expense.price} place={expense.place}/>
       )}
      </>
    </div>
  );
}

export default App;
