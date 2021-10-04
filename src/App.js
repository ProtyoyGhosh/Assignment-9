import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import JoinUs from './Components/JoinUs/JoinUs';
import Error from './Components/Error/Error';
import Academy from './Components/Academy/Academy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/services'>
            <Academy></Academy>
          </Route>
          <Route path='/joinus'>
            <JoinUs></JoinUs>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
