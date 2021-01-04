import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



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

const DishDetailComponent = ({dish}) =>{
    let comments;
        if(dish != undefined)
        {
            comments = dish.comments.map( (com) => {
                return(
                    <ArrangeComment com={com}/>
                )
            })

        }
       
        
    


        let returnele = dish === undefined ? <div></div> : (<div   className="container m-5 row">
                                                            <div key={dish.id} className="col-5 m-1">
                                                                        <MakeDetailCard dish={dish}/>
                                                                        </div>
                                                                    <div  className="col-5 m-1">
                                                                    
                                                                        <h1>Comments</h1>
                                                                        {comments}
                                                                     </div>
                                                                    </div>
                                                                    )
       

        //console.log(this.props.dish)
        return(
            
            <div>
            {returnele}
            </div>
        );
    
}


export default DishDetailComponent
