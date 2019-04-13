import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalItem from './ModalItem';

class DetailsModal extends React.Component {
    state={
        logged_in:false,
        modal: false
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(token !== null){
            this.setState({logged_in:true})
        }
    }

    toggle = () => {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }

    handleAddToOrder = (key) => {
        this.props.addToOrder(key)
        this.toggle();
    }

  render() {
    const { name, image, desc } = this.props;

    return (
      <div>
        <Button className="btn btn-sm btn-outline-primary" style={{float:'right',backgroundColor:'transparent'}} onClick={this.toggle}>See Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
          <ModalBody>
              <ModalItem
                key={this.props.key} 
                index = {this.props.key}
                image={image}
                name={name}
                desc={desc}
              />
          </ModalBody>
          <ModalFooter>
            <Button className="primary" hidden={!this.state.logged_in} onClick={() => this.handleAddToOrder(this.props.index)}>Add To Card</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DetailsModal;