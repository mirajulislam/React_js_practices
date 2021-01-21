import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import UserListComponents from './components/UserListComponents';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
         <UserListComponents />
      </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;
