import React from 'react';

class ModalItem extends React.Component{
    render(){
        const { image, name, desc} = this.props;
        return (
            <div className="zaalhuur-modal-item">
                <img className="card_details" src={image} alt="food"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        );
    }
};

export default ModalItem;