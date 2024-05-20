import Home from './Home'
import Contact from './Contact'
import React from 'react';
import { HashRouter, Route} from "react-router-dom"
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Store from './Store';
import Product from './Product';
 
class App extends React.Component{
  render()
  {
    return(
      <div>
      <HashRouter>
        <Header />
        <Navigation />
        <div className="container">
          <Route path="/home" component={Home}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/store" component={Store}/>
          <Route path="/contact-us" component={Contact}/>
          <Route path="/product/:id" component={Product}/>
        </div>
        <Footer />
      </HashRouter>
    </div>
    )
  }
}
 
export default App;