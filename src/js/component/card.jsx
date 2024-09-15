import React from "react";

function Card(props){
    return (
        <div className="card bg-dark text-white">
            <div className="card-body">
                <h5 className="fs-1">{props.number || '0'}</h5>
            </div>
        </div>
    );
}

export default Card;