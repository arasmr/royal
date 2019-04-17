import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'reactstrap';

class AddMenuForm extends React.Component {

    state = {
        selectedImageUrl:''
    }

    nameRef = React.createRef();
    categoryRef = React.createRef();
    typeRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addMenuItem : PropTypes.func,
    };

    createMenuItem = event => {
        event.preventDefault();
        const menuItem = {
            name : this.nameRef.current.value,
            category : this.categoryRef.current.value,
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
        return (
            <form className = "menu-edit" onSubmit={this.createMenuItem}>
                <Row style={{width:"100%",textAlign:'center'}}>
                    <Col style={{border:'1px solid black',textAlign:'center'}}>
                        <img
                            style={{width:'100%', height:'250px', marginLeft:'2%'}}
                            src={this.state.selectedImageUrl} alt="selected"
                        />
                        <input 
                            style={{width:'100%',border:'none'}}
                            type="file" 
                            onChange={(e) => this.uploadFile(e)} 
                        />
                    </Col>
                    <Col style={{margin:'1%'}}>
                        <input 
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "name" 
                            placeholder="name"
                            ref ={this.nameRef} 
                        />
                        <select
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "category" 
                            placeholder="category"
                            ref ={this.categoryRef} 
                        >
                            <option style={{width:'100%'}} value="Bruiloften">Bruiloften</option>
                            <option style={{width:'100%'}} value="Zaalhuur Services">Zaalhuur Services</option>
                        </select>
                        <select 
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "type" 
                            placeholder="type"
                            ref ={this.typeRef} 
                        >
                            <option style={{width:'100%'}} value="Soup">Soup</option>
                            <option style={{width:'100%'}} value="Koud Voorgerechten">Koud Voorgerechten</option>
                            <option style={{width:'100%'}} value="Warm Voorgerechten">Warm Voorgerechten</option> 
                            <option style={{width:'100%'}} value="Hoofdgerechten">Hoofdgerechten</option>
                            <option style={{width:'100%'}} value="Salades">Salades</option>
                            <option style={{width:'100%'}} value="Nagerechten">Nagerechten</option>
                            <option style={{width:'100%'}} value="Cake">Cake-Bruidstaart</option>
                            <option style={{width:'100%'}} value="Drinks">Drinks-Dranks</option>
                            <option style={{width:'100%'}} value="Koekies">Koekies</option>
                            <option style={{width:'100%'}} value="Services">Services</option>
                            <option style={{width:'100%'}} value="Other">Other</option>
                        </select>
                    </Col>
                </Row>
                <Row style={{margin:'1%',width:'100%'}}>
                    <textarea 
                        style={{width:'100%',border:'1px solid black'}}
                        type="text" 
                        name = "desc"
                        placeholder="description" 
                        ref ={this.descRef} 
                    />
                </Row>
                <button type="submit">Add Menu Item</button>
            </form>
        )
    }
}

export default AddMenuForm;