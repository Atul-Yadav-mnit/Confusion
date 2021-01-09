import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom'
import CommentForm from './CommentFormComponent'



const ArrangeComment = ({com}) => {
    return(
        <div>
            <p>{com.comment}</p> 
            <p> - {com.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
        </div>
    )

}

const MakeDetailCard = ({dish}) => {
    return(
        
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
   
    )
    

}

 const DishDetailComponent = ({dish, comments, add_comment}) =>{

    const dishcomments =  comments.map( (com) => <ArrangeComment com={com}/> )
        
    const returnele =  <div className="container m-5 row">
            <div key={dish.id} className="col-md-5  col-sm-12 ">
                <MakeDetailCard dish={dish}/>
            </div>
            <div  className="col-md-5  col-sm-12 m-1">
                <h1>Comments</h1>
                {dishcomments}
                <CommentForm add_comment = {add_comment} dishId={dish.id}></CommentForm>
            </div>
            </div>
        
            
    
       


      
        return(
            <div className="container">
                <div className="row mt-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
                </div>
                <div className="row">
                {returnele}
                </div>
            </div>
            
        );
    
}
        



export default DishDetailComponent
