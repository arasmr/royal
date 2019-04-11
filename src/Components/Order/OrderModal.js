import React from 'react';
import {NavLink, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Order from './Order';

class OrderModal extends React.Component {
  state = {
      modal: false,
      success:false,
      feedback:'',
      fired:false,
      loading:false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle}>Arrangements</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>
            Arrangements
          </ModalHeader>
          <ModalBody>
            <Order 
              toggle={this.toggle} 
              order={this.props.order}
              deleteOrder={this.props.deleteOrder}
              menuItems={this.props.menuItems}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default OrderModal;
