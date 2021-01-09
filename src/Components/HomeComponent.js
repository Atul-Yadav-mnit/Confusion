import React from 'react'
import reactstrapCjs from 'reactstrap'
import {Card,CardImg,CardTitle,CardSubtitle,CardBody,CardText} from 'reactstrap'
import { Loading } from './LoadingComponent';

function RenderCard({item,dishesLoading, dishesErrMess}) {
    if (dishesLoading) {
        return(
                <Loading />
        );
    }
    else if (dishesErrMess) {
        return(
                <h4>{dishesErrMess}</h4>
        );
    }
    else {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    }
}

function HomeComponent(props) {
    return (
        <div className="container" >
             <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} dishesLoading = {props.dishesLoading}  dishesErrMess = {props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>           
        </div>
    )
}

export default HomeComponent;
