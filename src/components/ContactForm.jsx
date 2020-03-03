import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
  };

  handleChange = (propName) => (event) => {
    const newValue = event.target.value;
    this.setState({ [propName]: newValue })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render = () => {
    const { email, message } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('email')} value={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={this.handleChange('message')} value={message} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
