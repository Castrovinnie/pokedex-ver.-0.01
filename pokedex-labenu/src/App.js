import Router from './routes/Router';
import { GlobalState } from './global/GlobalState';
import React from 'react';
// import GlobalStyle from './globalStyles';


function App() {


  return (
    <di>
      {/* < GlobalStyle /> */}
      <GlobalState>
        <Router />
      </GlobalState>
    </di>
  );
}

export default App;
