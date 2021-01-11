import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom'
import CommentForm from './CommentFormComponent'
import { Loading } from './LoadingComponent';
import {baseURL} from '../shared/baseURL'


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
                <CardImg top src={baseURL + dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
   
    )
    

}

 const DishDetailComponent = ({dish, comments, add_comment, isdishLoading, disherrmsg, iscommentLoading, commenterrmsg}) =>{



    var dishcomments = null;
    var dishcard = null;
    var Initial = null;


    if (isdishLoading) {
                
        dishcard  =    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                
            }
            else if (disherrmsg) {
       
                dishcard =         <div className="container">
                        <div className="row">            
                            <h4>{disherrmsg}</h4>
                        </div>
                    </div>
                
            }
            else if (dish != null) {
        dishcard = <MakeDetailCard dish={dish} isLoading={isdishLoading} errmsg={disherrmsg}/>

        Initial = <div className="row mt-2">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                        </div>
    }



    if (iscommentLoading) {
       
        dishcomments = <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        
    }
    else if (commenterrmsg) {
       
        dishcomments =   <div>
            <div className="container">
                <div className="row">            
                    <h4>{commenterrmsg}</h4>
                </div>
            </div>
             <CommentForm add_comment = {add_comment} dishId={dish.id}></CommentForm>
        </div>
        
    }
    else if(comments!=null)
    {
        dishcomments =  comments.map( (com) => <ArrangeComment com={com}/>) 
    }
 


    // if(dish!=null && comments!=null)
    // {
    // dishcomments =  comments.map( (com) => <ArrangeComment com={com}/> )
        
    // returnele = <div className="container m-5 row">
        
                
    //         <div  className="col-md-5  col-sm-12 m-1">
    //             <h1>Comments</h1>
    //             {dishcomments}
    //             <CommentForm add_comment = {add_comment} dishId={dish.id}></CommentForm>
    //         </div>
    //         </div>
    // }
        
            
    
       
        
                    
    //             if (isLoading) {
    //                 return(
    //                     <div className="container">
    //                         <div className="row">            
    //                             <Loading />
    //                         </div>
    //                     </div>
    //                 );
    //             }
    //             else if (errmsg) {
    //                 return(
    //                     <div className="container">
    //                         <div className="row">            
    //                             <h4>{errmsg}</h4>
    //                         </div>
    //                     </div>
    //                 );
    //             }
    //             else if (dish != null) {

      
        return(
            
            <div className="container">
                {Initial}
                <div className="row">
                <div className="container m-5 row">   
                    {dishcard}        
                <div  className="col-md-5  col-sm-12 m-1">
                    <h1>Comments</h1>
                    {dishcomments}
                   
                </div>
                </div>
                </div>
            </div>
            
        );
                
    
}
        



export default DishDetailComponent
