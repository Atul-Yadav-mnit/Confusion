import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom'
import CommentForm from './CommentFormComponent'
import { Loading } from './LoadingComponent';


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
        <div key={dish.id} className="col-md-5  col-sm-12 ">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
   
    )
    

}

 const DishDetailComponent = ({dish, comments, add_comment, isLoading, errmsg}) =>{

    var dishcomments = null;
    var returnele = null;

    if(dish!=null)
    {
    dishcomments =  comments.map( (com) => <ArrangeComment com={com}/> )
        
    returnele = <div className="container m-5 row">
                <MakeDetailCard dish={dish} isLoading={isLoading} errmsg={errmsg}/>
            <div  className="col-md-5  col-sm-12 m-1">
                <h1>Comments</h1>
                {dishcomments}
                <CommentForm add_comment = {add_comment} dishId={dish.id}></CommentForm>
            </div>
            </div>
    }
        
            
    
       
        
                    
                if (isLoading) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (errmsg) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <h4>{errmsg}</h4>
                            </div>
                        </div>
                    );
                }
                else if (dish != null) {

      
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
    
}
        



export default DishDetailComponent
