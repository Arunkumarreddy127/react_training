import Home from './Home'
import Contact from './Contact'
import React from 'react';
import { HashRouter as Router,Route,NavLink} from "react-router-dom"
 
class App extends React.Component{
  render()
  {
    return(
      <HashRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/home"> Home </NavLink>
            </li>
 
            <li>
              <NavLink to="/contact"> Contact </NavLink>
            </li>
          </ul>
 
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact}/>
     
        </div>
      </HashRouter>
    )
  }
}
 
export default App;