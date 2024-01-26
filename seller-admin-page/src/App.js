 import React from 'react'
import InputForm from './components/InputForm/InputForm';
import { TotalContextProvider } from './Context';
function App() {
  return (
    <div className="App">
      <TotalContextProvider>
        <InputForm />
      </TotalContextProvider>
      
    </div>
  );
}

export default App;
