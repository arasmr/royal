import React from 'react';
import NavigationBar from '../Components/Dashboard/NavigationBar';
import PageContent from '../Components/Dashboard/PageContent';
import base from '../base';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component{
    state = {
        menuItems:{},
        order:{},
        url:''
    }

    static propTypes = {
        match : PropTypes.object,
    };

    componentDidMount() {
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(params);
        if(localStorageRef){
            this.setState({order:JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/menuItems`,{
            context:this,
            state:'menuItems'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    updateMenuItem = (key, updatedMenuItem) => {
        // take the copy of the current state
        const menuItems = {...this.state.menuItems};
        // update that state
        menuItems[key] = updatedMenuItem;
        // set the new menuItems object to the state
        this.setState({menuItems});

    }

    deleteMenuItem = (key) => {
        // take the copy of state
        const menuItems = {...this.state.menuItems};
        // update the state
        menuItems[key] = null;
        // set the state
        this.setState({menuItems});
    }

    deleteOrder = (key) => {
        // take the copy of state
        const order = {...this.state.order};
        // update the state
        delete order[key];
        // set the state
        this.setState({order});
    }

    addMenuItem = menuItem => {
        // take the copy of current state
        const menuItems = {...this.state.menuItems};
        // get the new state
        menuItems[`menuItem${Date.now()}`] = menuItem;
        // set the new state
        this.setState({
            menuItems:menuItems,
        })
    }

    addToOrder = key => {
        // take the copy of state
        const order = {...this.state.order};
        // change or update the state
        order[key] = order[key] + 1 || 1;
        // set the state
        this.setState({order:order});
    }

    // *********** Upload file to Cloudinary ******************** //
uploadFile = (e,key) => {
    let file = e.target.files[0];
    var url = `https://api.cloudinary.com/v1_1/djgv39mwv/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = (function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = Object.values(JSON.parse(xhr.responseText))[13];
        this.setState({url:data},(() => {
            const updatedMenuItem = {
                ...this.state.menuItem,
                'image' : data
            };
            this.updateMenuItem(key,updatedMenuItem);
        }));
      }
    }.bind(this));
  
    fd.append('upload_preset', 'ombjh6fb');
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);
  }

  handlePicture = (e,key) => {
      this.uploadFile(e,key);
  }
    render(){
        return(
            <div className="dashboard">
                <div className="navigation-bar">
                    <NavigationBar 
                        history={this.props.history}
                        addMenuItem={this.addMenuItem}
                        deleteMenuItem = {this.deleteMenuItem} 
                        updateMenuItem = {this.updateMenuItem}
                        loadSampleMenuItem={this.loadSampleMenuItem}
                        menuItems ={this.state.menuItems}
                        handlePicture = {this.handlePicture}
                    />
                </div>
                <div className="page-content">
                    <PageContent history={this.props.history}/>
                </div>
                {/* <button onClick={() => this.uploadPicture('key')}>add picture</button> */}
            </div>
        )
    }
}