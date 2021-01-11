import React from 'react'
import reactstrapCjs from 'reactstrap'
import {Card,CardImg,CardTitle,CardSubtitle,CardBody,CardText} from 'reactstrap'
import { Loading } from './LoadingComponent';
import {baseURL} from '../shared/baseURL'

function RenderCard({item,isLoading, ErrMess}) {
    if (isLoading ) {
        return(
                <Loading />
        );
    }
    else if (ErrMess) {
        return(
                <h4 className ="text-danger">{ErrMess}</h4>
        );
    }
    else {
    return(
        <Card>
            <CardImg src={baseURL + item.image} alt={item.name} />
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
                    <RenderCard item={props.dish} isLoading = {props.dishesLoading}  ErrMess = {props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promotionsLoading}
                         ErrMess={props.promotionsErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>           
        </div>
    )
}

export default HomeComponent;
