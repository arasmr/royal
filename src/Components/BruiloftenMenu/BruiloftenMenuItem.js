import React from 'react';
import DetailsModal from '../MenuDetails/DetailsModal';

class BruiloftenMenuItem extends React.Component{

    state={
        logged_in:false
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(token !== null){
            this.setState({logged_in:true})
        }
    }

    render(){
        const { image, name, desc} = this.props.details;
        return (
            <div className="card buffet-item" style={{width: '15rem'}}>
                <img className="card-img-top card_image" src={image} alt="food"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="card-button-group" style={{margin:'1%', width:'100%'}}>
                        <button hidden={!this.state.logged_in} onClick={() => this.props.addToOrder(this.props.index)} className="btn btn-sm btn-outline-primary" style={{float:'left'}}>Add To Card</button>
                        <DetailsModal
                            key={this.props.index}
                            index={this.props.index}
                            addToOrder={this.props.addToOrder}
                            image={image}
                            name={name}
                            desc={desc}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default BruiloftenMenuItem;