import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent';
import {baseURL} from '../shared/baseURL'


// Two ways of creating fuctional components  
// 1) function Menu(props)
// {
//     return();
// }
// 2) const Menu = () => {
//     return(

//     );
// }




function RenderDishItem({ dish }) {
    return (
        <Link to={`/menu/${dish.id}`} >
            <Card >
                <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>

    )
}


const MenuComponent = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
       
        return (

            // XXXXXXXXXXXXXXXX WRONG WAY THIS WAY DIV WILL LOOSE ITS COL-5 ETC NOT WORKING 
            // <div>
            //     <RenderDishItem dish ={dish}  onClick={props.onClick}/>
            // </div>

            <div key={dish.id} className="col-md-5 m-2 col-sm-12">
                <RenderDishItem dish={dish} />
            </div>

        )
        
    })


    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{

    return (
        <div className="container">
            <div className="row mt-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>

            </div>



            <div className="row mt-1 mb-3">
                {menu}
            </div>
            
        </div>
    )

    }

}


export default MenuComponent
