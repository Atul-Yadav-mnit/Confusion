import React, { Component } from 'react'
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './HomeComponent.js'
import {Route , Switch , Redirect, withRouter} from 'react-router-dom'
import Contact from './ContactUs.js'
import About from './Aboutus.js'
import {connect} from 'react-redux'
import { Add_Comment , fetchDishes} from '../redux/ActionCreator.js'
import {actions} from 'react-redux-form'

const mapStateToProps = state =>{
  return{
      dishes :state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders :state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  add_comment: (dishId, rating, author, comment) => dispatch(Add_Comment(dishId, rating, author, comment)),
  fetchDishes : () => dispatch(fetchDishes()),
  resetFeedback :() => dispatch(actions.reset('feedback'))
})


//'feedback' is name of the form

// there are two ways to pass a component in route 
// one by arrow function (or even normalfunction see commented const Homepage) if want to pass a key // arrowfunction also two ways one like in homepage and one like in menu
//  other by just writing component name eg Home here <Route  path="/Home" component={Home}/>

class MainComponent extends Component {

  constructor(props) {
    super(props)
    
    
  }


  componentDidMount = () =>{
    this.props.fetchDishes();
  }





  
  render() {

   
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errmsg}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    const Aboutus = () => {
      return(
        <About leaders={this.props.leaders}/>
      )
    }
    


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errmsg}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            add_comment= {this.props.add_comment} />
      );
    };

    // const HomePage = function() {
    //   return <Home/>
    // }

    return (
      <div>
        <Header/>
        <Switch>
          <Route  path="/Home" component={HomePage}/>
          <Route exact path="/Menu" component={() => <Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route  exact path="/contactus" component={() => <Contact resetFeedback ={this.props.resetFeedback }/>} />
          <Route exact path="/aboutus" component ={Aboutus} />
          <Redirect to="/Home" />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

