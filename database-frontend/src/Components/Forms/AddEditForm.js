import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//***** make sure this works with all tables in the database********
//***** currently only works with rooms*******
class AddEditForm extends React.Component {
  state = {
    Id: 0,
    Name: '',
    Room_attribute: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: this.state.name,
        Room_attribute: this.state.room_attribute
      })
    })
      .then(response => response.json())
      .then(room => {
        if(Array.isArray(room)) {
          this.props.addItemToState(room[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Id: this.state.Id,
        Name: this.state.name,
        Room_attribute: this.state.room_attribute
      })
    })
      .then(response => response.json())
      .then(room => {
        if(Array.isArray(room)) {
          this.props.updateState(room[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){

    if(this.props.item){
      const { Id, Name, Room_attribute } = this.props.room
      this.setState({ Id, Name, Room_attribute })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.room ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="text" name="first" id="first" onChange={this.onChange} value={this.state.Name === null ? '' : this.state.Name} />
        </FormGroup>
        <FormGroup>
          <Label for="Room_attribute">Room Attribute</Label>
          <Input type="text" name="Room Attribute" id="Room Attribute" onChange={this.onChange} value={this.state.Room_attribute === null ? '' : this.state.Room_attribute}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm
