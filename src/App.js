 import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <>
      <h1>Expense Items</h1>
       <ExpenseItem name="Food" price="100" place="Annavaram"/>
       <ExpenseItem name="Petrol" price="500" place="Amalapuram"/>
       <ExpenseItem name="Movie" price="700" place="Goa"/>
      </>
    </div>
  );
}

export default App;
