import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent.js'


class MenuComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedDish : null
        }
    }


    onDishSelect(dish) {
        this.setState({
            selectedDish : dish
        })
    }


    renderDish(dish){
        if(dish !=null)
        {
            return <DishDetail dish = {dish}></DishDetail>
        }
    }
    
    
    render() {
        const menu =  this.props.dishes.map( (dish) => {
            return(
                
                    <div  className="col-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
              
                </div>
                
            )
        })


        return (
            <div>
                <div className="container m-5 row">
                    {menu}
                </div>
                <div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}

export default MenuComponent
