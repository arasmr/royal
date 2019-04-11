import React from 'react';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, FormFeedback, FormGroup , Input, InputGroup, InputGroupAddon,InputGroupText, Row } from 'reactstrap';
import {Icon} from 'react-icons-kit';
import {at} from 'react-icons-kit/fa/at';
import {pencil} from 'react-icons-kit/fa/pencil';
import firebase from 'firebase/app';
import 'firebase/auth';

class LoginForm extends React.Component{
    state = {
        email:'',
        password:'',
        emailValid: false,
        passwordValid: false,
        formValid: false,
        errorText:'',
        failed:false,
        touched: {
          email:false,
          password:false,
        }
    }

        // create ref to be able get current input value 
    emailRef = React.createRef();
    passwordRef = React.createRef();

    // give feedback if the user clicked an inout an still not valid
    handleBlur = (field) => (evt) => {
        switch (field) {
        case 'email':
                    if (!this.state.emailValid) {
                        this.setState({
                            touched: {...this.state.touched, [field]: true}
                        })
                    } else {
                        this.setState({
                            touched: {...this.state.touched, [field]: false}
                        })
                    }
                    break;
        case 'password':
            if (!this.state.passwordValid) {
                this.setState({
                    touched: {...this.state.touched, [field]: true}
                })
            } else {
                this.setState({
                    touched: {...this.state.touched, [field]: false}
                })
            }
            break;
            default:
            break;
        }
    }

    // get user input changes
    handleUserInput = (e) => {
        this.setState({
        failed:false,
        formValid:false
        })
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
        () => { this.validateField(name, value) });
    }

    // validate input fields
    validateField(fieldName, value) {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break;
        case 'password':
            passwordValid = value.length >= 6;
            break;
        default:
            break;
        }
        this.setState({
        emailValid: emailValid,
        passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: 
        this.state.emailValid && 
        this.state.passwordValid
        });
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(token !== null){
            this.props.history.replace('/home')
        }
    }
    

    handleSubmit =(event) => {
        event.preventDefault();
        const email = this.emailRef.current.props.value;
        const password = this.passwordRef.current.props.value;
       firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            localStorage.setItem('token',res.user.ra);
            this.props.history.replace('/home')})
        .catch(err => console.log(err));
        event.currentTarget.reset();
    }

    render(){
        return(
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                        <CardGroup>
                            <Card className="p-4">
                            <CardBody>
                                <Form onSubmit = {this.handleSubmit}>
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account </p>
                                    <FormGroup className = "form-group">
                                        <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <Icon className="icon" size={20} icon={at}/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input 
                                            onBlur={this.handleBlur('email')}
                                            name='email' 
                                            value={this.state.email}
                                            onChange={(events) => {this.handleUserInput(events)}} 
                                            type="text" 
                                            ref={this.emailRef}
                                            placeholder="Email" 
                                            invalid={this.state.touched.email ? true : false}
                                            valid={this.state.emailValid ? true : false}
                                        />
                                        <FormFeedback>This field required.</FormFeedback>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Icon className="icon" size={20} icon={pencil}/>
                                            </InputGroupText>
                                        </InputGroupAddon>      
                                        <Input
                                            onBlur={this.handleBlur('password')}
                                            name='password' 
                                            value={this.state.password}
                                            onChange={(events) => {this.handleUserInput(events)}} 
                                            type="password" 
                                            ref={this.passwordRef}
                                            placeholder="Password" 
                                            invalid={this.state.touched.password ? true : false}
                                            valid={this.state.passwordValid ? true : false}
                                        />
                                        <FormFeedback>Password should be at least 6 character.</FormFeedback>
                                        </InputGroup>
                                    </FormGroup>
                                    <Alert color="danger" isOpen={this.state.formValid && this.state.failed} className="align-items-center">
                                        {this.state.errorText}
                                    </Alert>
                                    <Row>
                                        <Col xs="6">
                                        <Button 
                                            type="submit"
                                            disabled={!this.state.formValid} 
                                            onSubmit={this.handleSubmit} 
                                            color="primary" 
                                            className="btn btn-primary">Login
                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            </Card>
                        </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LoginForm;