import React from 'react';
import '../Container/style.css';

function Container(props) {



    return (

        
            <div className="container">
                HELLO GOOGLE
                {props.child}
            </div>
       
    )
}


export default Container;
