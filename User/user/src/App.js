import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import UserListComponents from './components/UserListComponents';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>    
           <HeaderComponent />
              <div className="container">
                <switch>
                  <Route path="/" component={UserListComponents}></Route>
                  <Route path="/users" component={UserListComponents}></Route>
                </switch>
              </div>
           <FooterComponent />
      </Router>     
    </div>
    
  );
}

export default App;
