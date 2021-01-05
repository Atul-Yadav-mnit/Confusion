import React, { Component } from 'react'
import { DISHES } from '../shared/DISHES';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent.js'
import Header from './Header.js'
import Footer from './Footer.js'
import {Route , Switch , Redirect } from 'react-router-dom'
import Home from './HomeComponent.js'


// there are two ways to pass a component in route 
// one by arrow function (or even normalfunction see commented const Homepage) if want to pass a key // arrowfunction also two ways one like in homepage and one like in menu
//  other by just writing component name eg Home here <Route  path="/Home" component={Home}/>

class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       dishes : DISHES,
    }
  }





  
  render() {

    const HomePage = () => {
      return(
        <Home/>
      );
    }

    // const HomePage = function() {
    //   return <Home/>
    // }

    return (
      <div>
        <Header/>
        <Switch>
          <Route  path="/Home" component={Home}/>
          <Route  exact path="/Menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/Home" />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default MainComponent;

