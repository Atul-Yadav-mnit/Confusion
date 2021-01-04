import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent.js'
import { DISHES } from '../shared/DISHES';
import DishDetail from './DishDetailComponent.js'
import Header from './Header.js'
import Footer from './Footer.js'

class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       dishes : DISHES,
       selectedDishId : null
    }
  }


  onDishSelect(dishId) {
    this.setState({
        selectedDishId : dishId
    })
}



  
  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes}
           onClick={(dishId) => this.onDishSelect(dishId)} />
           {/* confused on onclick on menu , remmeber codeevolution how to access parent state/ functions from choldren */}
           {/* We can take direct dish also from menu and then do things simple */}
        <DishDetail  dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDishId )[0]} />
        {/* this.state.dishes.filter( (dish) => dish.id === this.state.selectedDishId ) returns array of all dished with id same as selecteddidh so we call [0] of it ie first elemet as id is unique so there will aways be a single element only */}

        <Footer/>
      </div>
    )
  }
}

export default MainComponent;

