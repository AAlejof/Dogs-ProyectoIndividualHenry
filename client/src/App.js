import './App.css';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import DogDetail from './Components/DogDetail/DogDetail';
import CreateDog from './Components/CreateDog/CreateDog';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';



function App() {
  const location = useLocation()
  return (
      <div className="App">
        {location.pathname === "/" ? <Landing /> : <NavBar/>}
        <Switch>


          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/create'>
            <CreateDog />
          </Route>

          <Route exact path='/dog/:id' component={DogDetail} />

          <Route path="*" component={NotFound} />

        </Switch>
      </div>

  );
}

export default App;
