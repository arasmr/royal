import React from 'react';
import DetailsModal from '../MenuDetails/DetailsModal';

class ZaalHuurServicesItem extends React.Component{

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
            <div className="card" style={{width:"16rem"}}>
                <img src={image} className="card-img-top card_image" alt="food"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <div>
                        <button onClick={() => this.props.addToOrder(this.props.index)} hidden={!this.state.logged_in} className="btn btn-sm btn-outline-primary" style={{float:'left'}}>Add To Card</button>
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

export default ZaalHuurServicesItem;