import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./page/LandingPage";
import CheckoutPage from "./page/CheckoutPage";
import PageHeader from "./component/PageHeader";
import GlobalStore from "./context/Store";

import './css/App.css';


function App() {
  return (
    <div>
      <GlobalStore>
        <BrowserRouter>  
        <PageHeader/>      
            <div>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/checkout" component={CheckoutPage}/>
            </div>
        </BrowserRouter>
      </GlobalStore>
    </div>
    
  );
}

export default App;
