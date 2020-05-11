import React from 'react';
import '../Navbar/style.css';


function Card(props) {


//in p tags put {props.book.title}

console.log("this is props in CARD".props)

    return (
        "HI"

        // <div className="media">
        //     <img src="https://images.unsplash.com/photo-1553770542-88bce0a2885c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="align-self-center mr-3" alt="..."/>
        //     <div className="media-body">
        //         <h5 className="mt-0">{props.book.title}</h5>
        //         <p>{props.book.descrebtion}</p>
        //         <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        //     </div>
        // </div>
    )
}


export default Card;
