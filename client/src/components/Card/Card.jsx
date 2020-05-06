import React from 'react';
import '../Navbar/style.css';


function Navbar() {



    return (
        <div className="media">
            <img src="https://images.unsplash.com/photo-1553770542-88bce0a2885c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="align-self-center mr-3" alt="..."/>
            <div className="media-body">
                <h5 className="mt-0">Center-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
    )
}


export default Navbar;
