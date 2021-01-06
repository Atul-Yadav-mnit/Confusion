import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, FormGroup, Input, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      istouched: {
        username: false,
        password: false
      }
    };
  }



  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(event) {

    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
    event.preventDefault();
  }

  handleTouch(event) {
    const name = event.target.name;
    this.setState({
      istouched: { ...this.state.istouched, [name]: true }
    })
  }

  validateLogin(username, password) {
    const error = {
      username: "",
      password: ""
    }

    if (username.length < 3 || username.length > 10)
      error.username = "Username must be between 3 to 10 characters";
    if (password.length < 3 || password.length > 10)
      error.password = "Password must be between 3 to 10 characters";

    return error;
  }

  render() {

    let un = '';
    let ps = '';
    if (this.username !== undefined) {
      un = this.username.value;
    }
    if (this.password !== undefined) {
      ps = this.password.value;
    }
    const error = this.validateLogin(un, ps);

    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to='/home'>
                    <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'>
                    <span className="fa fa-info fa-lg"></span> About Us
              </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/menu'>
                    <span className="fa fa-list fa-lg"></span> Menu
              </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contactus'>
                    <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink>
                </NavItem>


              </Nav>


              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </NavItem>
              </Nav>




            </Collapse>

          </div>



          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
            <ModalHeader toogle={this.toogleModal}>Modal title</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="Username">UserName</Label>
                  <Input type="text" name="username" id="Username" placeholder="username"
                    onBlur={this.handleTouch}
                    valid={this.state.istouched.username && error.username === ''}
                    invalid={this.state.istouched.username && error.username !== ''}
                    innerRef={(input) => this.username = input} />
                  <FormFeedback>{error.username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="password"
                    onBlur={this.handleTouch}
                    valid={this.state.istouched.password && error.password === ''}
                    invalid={this.state.istouched.password && error.password !== ''}
                    innerRef={(input) => this.password = input} />
                  <FormFeedback>{error.password}</FormFeedback>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />{' '}
                            Remember Me
                          </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
              </Form>


            </ModalBody>

          </Modal>



        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;