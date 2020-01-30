import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modals/Modal'
import DataTable from './Components/Tables/DataTable'
import { CSVLink } from "react-csv"

//*******change item table to smart home data tables*******
class App extends Component {
  state = {
    rooms: [],
    devices: [],
    e_data: [],
    t_data: [],
    w_data: [],
    history: []
  }

//******fix so all the table data is in*******
  getItems(){
    fetch('http://localhost:3000/crud')
      .then(response => response.json())
      .then(rooms => this.setState({rooms}))
      .catch(err => console.log(err))
  }

  addItemToState = (rooms) => {
    this.setState(prevState => ({
      items: [...prevState.rooms, rooms]
    }))
  }

  updateState = (rooms) => {
    const roomIndex = this.state.rooms.findIndex(data => data.id === rooms.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.rooms.slice(0, roomIndex),
    // add the updated item to the array
      rooms,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.rooms.slice(roomIndex + 1)
    ]
    this.setState({ rooms: newArray })
  }

  deleteItemFromState = (Id) => {
    const updatedRooms = this.state.rooms.filter(rooms => rooms.id !== Id)
    this.setState({ rooms: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Smart_Home Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.rooms} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={this.state.rooms}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
