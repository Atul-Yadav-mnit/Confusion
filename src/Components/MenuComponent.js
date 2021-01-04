import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// Two ways of creating fuctional components  
// 1) function Menu(props)
// {
//     return();
// }
// 2) const Menu = () => {
//     return(

//     );
// }




function RenderDishItem({dish, onClick}) {
    return (
           // <div  key={dish.id} className="col-5 m-1">
            <Card  onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Card>
           // </div>
    )
}


const MenuComponent = (props) =>{

        const menu =  props.dishes.map( (dish) => {
            return(

                // XXXXXXXXXXXXXXXX WRONG WAY THIS WAY DIV WILL LOOSE ITS COL-5 ETC NOT WORKING 
                // <div>
                //     <RenderDishItem dish ={dish}  onClick={props.onClick}/>
                // </div>

                <div  key={dish.id} className="col-5 m-1">
                <RenderDishItem dish ={dish}  onClick={props.onClick}/>
                </div>
                    
            )
        })


        return (
            <div>
                <div className="container m-5 row">
                    {menu}
                </div>
            </div>
        )
        
    }
    
    
export default MenuComponent
