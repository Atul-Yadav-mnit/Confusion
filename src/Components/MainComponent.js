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
import { Post_Comments , fetchComments, fetchDishes, fetchPromos, Post_Feedback,FetchLeaders} from '../redux/ActionCreator.js'
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
  add_comment: (dishId, rating, author, comment) => dispatch(Post_Comments(dishId, rating, author, comment)),
  fetchDishes : () => dispatch(fetchDishes()),
  resetFeedback :() => dispatch(actions.reset('feedback')),
  fetchPromos : () => dispatch(fetchPromos()),
  fetchComments : () => dispatch(fetchComments()),
  fetchleaders : () => dispatch(FetchLeaders()),
  Post_Feedback : (firstname, lastname,telnum, email,agree,contactType,message) => dispatch(Post_Feedback(firstname, lastname,telnum, email,agree,contactType,message))
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
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchleaders();
  }





  
  render() {

   
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errmsg}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promotionsLoading={this.props.promotions.isLoading}
              promotionsErrMess={this.props.promotions.errmsg}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errmsg}
          />
      );
    }


    const Aboutus = () => {
      return(
        <About leaders={this.props.leaders.leaders}
        isLoading={this.props.leaders.isLoading}
              ErrMess={this.props.leaders.errmsg}/>
      )
    }
    


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          isdishLoading={this.props.dishes.isLoading}
          disherrMess={this.props.dishes.errmsg}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            add_comment= {this.props.add_comment} 
            iscommentLoading={this.props.comments.isLoading}
          commenterrMess={this.props.comments.errmsg}/>
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
          <Route  exact path="/contactus" component={() => <Contact resetFeedback ={this.props.resetFeedback } Post_Feedback={this.props.Post_Feedback}/>} />
          <Route exact path="/aboutus" component ={Aboutus} />
          <Redirect to="/Home" />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

