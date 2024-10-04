import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/page/Home';
import Services from './components/page/Services';
import Products from './components/page/Products';
import SignUp from './components/page/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>

      </Switch>
    </Router>
  
  </>
  )
}

export default App;


