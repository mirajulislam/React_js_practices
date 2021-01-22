import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import UserListComponents from './components/UserListComponents';
import AddUser from './components/AddUser';
function App() {
  return (
    <div>
      <Router>    
           <HeaderComponent />
              <div className="container">
                <Switch>
                  <Route path="/" exact component={UserListComponents}></Route>
                  <Route path="/users" component={UserListComponents}></Route>
                  <Route path="/add-user" component={AddUser}></Route>
                </Switch>
              </div>
           <FooterComponent />
      </Router>     
    </div>
    
  );
}

export default App;
