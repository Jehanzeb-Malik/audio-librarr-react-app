import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ScanRetailer from './ScanRetailer';
import Customer from './Customer';
import ConfirmTransaction from './ConfirmTransaction';
import TransactionComplete from './TransactionComplete';

const App = () => {
  return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            {/*<Header />*/}
            <Route path="/" exact component={ScanRetailer}/>
            <Route path="/customer/:id" component={Customer}/>
            <Route path="/confirm/:id" component={ConfirmTransaction}/>
            <Route path="/transaction/complete/:id" component={TransactionComplete}/>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;