import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

    state = {
        selectedImageUrl:''
    }

    nameRef = React.createRef();
    priceRef = React.createRef();
    typeRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    testRef = React.createRef();

    static propTypes = {
        addMenuItem : PropTypes.func,
    };

    createMenuItem = event => {
        event.preventDefault();
        const menuItem = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value),
            type : this.typeRef.current.value,
            desc : this.descRef.current.value,
            image : this.state.selectedImageUrl,
        };
        this.props.addMenuItem(menuItem);
        this.setState({selectedImageUrl:''});
        event.currentTarget.reset();
    }

    uploadFile = (e) => {
        let file = e.target.files[0];
        var url = `https://api.cloudinary.com/v1_1/djgv39mwv/upload`;
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = (function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = Object.values(JSON.parse(xhr.responseText))[13];
            this.setState({selectedImageUrl:data});
        }
        }.bind(this));
    
        fd.append('upload_preset', 'ombjh6fb');
        fd.append('tags', 'browser_upload');
        fd.append('file', file);
        xhr.send(fd);
    }

    fieldChange = event => {
        this.setState({selectedImage : event.target.files[0]},
        () => this.handleImage);
    }

    handleOnChange = (e) => {
        this.setState({});
    }

    render() {
        return(
            <form className = "menu-edit" onSubmit={this.createMenuItem}>
                <input
                    style={{'float' :'left', 'width':'33%'}}
                    name="name" 
                    ref ={this.nameRef} 
                    type="text" 
                    placeholder="Name"
                />
                <input
                    style={{'float' :'left', 'width':'33%'}}
                    name="price" 
                    ref ={this.priceRef} 
                    type="text" 
                    placeholder="Price"
                />
                <select
                    style={{'float' :'left', 'width':'33%'}}
                    name="type"
                    ref ={this.typeRef}>
                    <option value="Soup">Soup</option>
                    <option value="Koud Voorgerechten">Koud Voorgerechten</option>
                    <option value="Warm Voorgerechten">Warm Voorgerechten</option> 
                    <option value="Hoofdgerechten">Hoofdgerechten</option>
                    <option value="Salades">Salades</option>
                    <option value="Nagerechten">Nagerechten</option>
                    <option value="Cake">Cake-Bruidstaart</option>
                    <option value="Drinks">Drinks-Dranks</option>
                    <option value="Koekies">Koekies</option>
                </select>
                <textarea 
                    name="desc" 
                    ref ={this.descRef} 
                    type="text" 
                    placeholder="Desc"
                />
                <input 
                    style={{'float' :'left', 'width':'70%'}}
                    type="text" 
                    name = "image"
                    onChange = {() => this.handleOnChange}
                    value= {this.state.selectedImageUrl}
                />
                <input 
                    style={{'float' :'rigth', 'width':'30%'}}
                    type="file" 
                    onChange={(e) => this.uploadFile(e)} 
                />
                <button type="submit">Add Menu Item</button>
            </form>
        )}
}

export default AddFishForm;