import React from 'react';
import { Modal, ModalHeader,NavLink, ModalBody} from 'reactstrap';
import Settings from './Settings';


class SettingsModal extends React.Component {
  state = {
      modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="inventory">
        <NavLink onClick={this.toggle}>Settings</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>Inventory</ModalHeader>
          <ModalBody>
            <Settings  
                toggle={this.toggle}
                addMenuItem={this.props.addMenuItem}
                deleteMenuItem = {this.props.deleteMenuItem} 
                updateMenuItem = {this.props.updateMenuItem}
                loadSampleMenuItem={this.props.loadSampleMenuItem}
                menuItems ={this.props.menuItems}
                history={this.props.history}
                handlePicture = {this.props.handlePicture}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;