import React from 'react';


function Box(props){

    const [name]=React.useState(props.name);
    const [category]=React.useState(props.category);
    const [value]=React.useState(props.value);
    const [img]=React.useState(props.img);

    return(
        <div class={"box"}>
            <h1>Name: {name}</h1>
            <h2>Category: {category}</h2>
            <h3>Special Moves: {value}</h3>
            <img src={img} alt="image"/>
        </div>
    )
}

export default Box;