import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetailComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        const comments = this.props.dish.comments.map( (com) => {
            return(
                <div>
                    <p>{com.comment}</p> 
                    <p> - {com.author} dated {com.date}</p>
                </div>
               
            )
        })
       
        return(
            <div className="container m-5 row">
            <div  className="col-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div  className="col-5 m-1">
            
                <h1>Comments</h1>
                {comments}
            
            </div>
            </div>
        );
    }
}

export default DishDetailComponent
