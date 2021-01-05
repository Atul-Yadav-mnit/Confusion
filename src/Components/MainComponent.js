import React, { Component } from 'react'
import { DISHES } from '../shared/DISHES';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent.js'
import Header from './Header.js'
import Footer from './Footer.js'
import {Route , Switch , Redirect } from 'react-router-dom'
import Home from './HomeComponent.js'
import { COMMENTS } from '../shared/COMMENTS';
import { LEADERS } from '../shared/LEADERS';
import { PROMOTIONS } from '../shared/PROMOTIONS';
import Contact from './ContactUs.js'



// there are two ways to pass a component in route 
// one by arrow function (or even normalfunction see commented const Homepage) if want to pass a key // arrowfunction also two ways one like in homepage and one like in menu
//  other by just writing component name eg Home here <Route  path="/Home" component={Home}/>

class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       dishes : DISHES,
       comments : COMMENTS,
       promotions :PROMOTIONS,
       leaders : LEADERS
    }
  }





  
  render() {

   
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    // const HomePage = function() {
    //   return <Home/>
    // }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/Home" component={HomePage}/>
          <Route  exact path="/Menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route  exact path="/contactus" component={Contact} />
          <Redirect to="/Home" />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default MainComponent;

