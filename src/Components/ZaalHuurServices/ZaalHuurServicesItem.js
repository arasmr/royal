import React from 'react';

class BuffetMenuItem extends React.Component{
    render(){
        const { image, name, desc} = this.props.details;
        return (
            <div className="card buffet-item" style={{width: '15rem'}}>
                <img className="card-img-top card_image" src={image} alt="food"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <div style={{margin:'1%'}}>
                        <a href="https://" className="btn btn-sm btn-outline-primary" style={{float:'right'}}>Add To Card</a>
                        <a href="https://" className="btn btn-sm btn-outline-primary" style={{float:'left'}}>See Details</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default BuffetMenuItem;