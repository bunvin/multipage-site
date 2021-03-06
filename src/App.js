import './App.css'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
//import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* NavLink changes class to active when clicked on
          External links use the <a> */}
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/articles/:id'>
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
