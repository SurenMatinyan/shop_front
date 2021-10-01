import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Route path='/'  component={Navigation} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
      <Route path='/products' component={Products} />
    </div>
  );
}

export default App;
