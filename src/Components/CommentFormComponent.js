import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from 'reactstrap'
import { Control, Errors, LocalForm } from 'react-redux-form'

const required = (val) => val && val.length
const minLength = (len) => (val) => val && val.length>=len
const maxLength = (len) => (val) => val && val.length<=len

class CommentFormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit = (values) => {
        this.toggleModal();
        this.props.add_comment(this.props.dishId, values.rating, values.comment, values.name);
        //alert("The comment is "+JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}>Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toogle={this.toogleModal}>Add Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={ (values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength : minLength(3) , maxLength : maxLength(10)
                                        }}
                                    />
                                    <Errors
                                        className ="text-danger"
                                        model = ".name"
                                        show = "touched"
                                        messages ={{
                                            required : "Required ",
                                            minLength : "Name must be >=3 characters ",
                                            maxLength : "Name must be <=10 characters"
                                        }}
                                        
                                    /> 

                                   
                                </Col>
                            </Row>

                            <Row className="form-group">
                                
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={3}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                  <Errors
                                  className ="text-danger"
                                  model =".rating"
                                  show = "touched"
                                  messages ={{
                                      required : "Required"
                                  }}
                                  />

                                    

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Type Something"
                                        className="form-control"
                                        rows = "5"
                                        validators={{
                                            required, minLength : minLength(10) , maxLength : maxLength(100)
                                        }}
                                    />
                                    <Errors
                                        className ="text-danger"
                                        model = ".comment"
                                        show = "touched"
                                        messages ={{
                                            required : "Required ",
                                            minLength : "Comment must be >=10 characters ",
                                            maxLength : "Comment must be <=100 characters"
                                        }}
                                        
                                    /> 
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Add Comment</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </LocalForm>
                        
                        
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default CommentFormComponent
