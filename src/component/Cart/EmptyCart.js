import React from 'react';
import Title from '../Title';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-tile">
                    <Title name="your cart" title="currently empty"/>
                    {/* <h1>your cart is currently empty</h1> */}
                </div>
            </div>
            
        </div>
    )
}
