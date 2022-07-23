import Router from './routes/Router';
import { GlobalState } from './global/GlobalState';
import React from 'react';


function App() {


  return (
    <di>
      <GlobalState>
        <Router />
      </GlobalState>
    </di>
  );
}

export default App;
