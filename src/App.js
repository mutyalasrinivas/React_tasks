 import React from 'react';
 import './App.css';
 import Expenses from './components/Expenses'
function App() {
  const expenses=[{name:"food",price:100,place:"Annavaram"},{name:"petrol",price:900,place:"vadapalli"},{name:"movie",price:500,place:"goa"}]
  return (
    <div className="App">
      <>
      <h1>Expense Items</h1>
       <Expenses items={expenses}/>
      </>
    </div>
  );
}

export default App;
