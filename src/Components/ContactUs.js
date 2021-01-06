import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input,Col ,FormFeedback} from 'reactstrap'

class Contact extends Component {


    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            istouched : {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                message: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.touchControl = this.touchControl.bind(this)
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name] : value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    touchControl(event){
        const name = event.target.name;
        console.log(this.state.istouched[name])
        this.setState({
            istouched: { ...this.state.istouched, [name]: true }
        })
    }

    formvalidation(firstname, lastname, telnum, email, message){
        const errors = {
            firstname: '',
            lastname: '',
            email:'',
            telnum :'',
            message:'',
        }

        if (this.state.istouched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.istouched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.istouched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.istouched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.istouched.telnum && (!reg.test(telnum) || telnum.length != 10))
            errors.telnum = 'Please enter valid telephone number';

        if(this.state.istouched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        
        if (this.state.istouched.message && message.length < 10)
            errors.message = 'Message should be >= 10 characters';
        else if (this.state.istouched.message && message.length > 100)
            errors.message = 'Message should be <= 100 characters';

        return errors;
    }

    render() {

        const errors = this.formvalidation(this.state.firstname,this.state.lastname,this.state.telnum, this.state.email, this.state.message);
        console.log(errors.message)
        return (
            <div className="container">
                <div className="row mt-2">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>ContactUs</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>ContactUs</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            31, Village Baliar Kalan<br />
                          Rewari, Haryana<br />
                          INDIA<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>




                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.touchControl}
                                        valid={errors.firstname === '' && this.state.istouched.firstname === true}
                                        invalid={errors.firstname !== ''}/>
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.touchControl}
                                        valid={errors.lastname === '' && this.state.istouched.lastname === true}
                                        invalid={errors.lastname !== ''}/>
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="number" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.touchControl}
                                        valid={errors.telnum === '' && this.state.istouched.telnum === true}
                                        invalid={errors.telnum !== ''}/>
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.touchControl}
                                        valid={errors.email === '' && this.state.istouched.email === true}
                                        invalid={errors.email !== ''}/>
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                        onBlur={this.touchControl}
                                        valid= {errors.message === '' && this.state.istouched.message === true}
                                        invalid={errors.message != ''}/>
                                        <FormFeedback>{errors.message}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;