import React from "react";

const CharCard = (props) => {

    const localClick = () => {
       if (props.clickHandler){
            return props.clickHandler(props.char)}
        else {
            return null
        }
        
    }


    return (
        <div onClick={localClick}>
            <h3>{props.char.name}</h3>
            <img src={props.char.img}/>
            <h4>{props.char.show}</h4>
        </div>
    )
    
}

export default CharCard

