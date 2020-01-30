import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'

class DataTable extends Component {

//****** make sure all the tables are being referneced correctly****
  deleteItem = Id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/crud', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Id
      })
    })
      .then(response => response.json())
      .then(item => { //******edit item(device, rooms, etc.)******
        this.props.deleteItemFromState(Id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {
    //******fix rendering for all data tables*******
    const rooms = this.props.rooms.map(rooms => {
      return (
        <tr key={rooms.Id}>
          <th scope="row">{rooms.Id}</th>
          <td>{rooms.Name}</td>
          <td>{rooms.room_attribute}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(rooms.Id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Room Attribute</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms}
        </tbody>
      </Table>

      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Room_id</th>
            <th>Sensor Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices}
        </tbody>
      </Table>

      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Device Id</th>
            <th>Use date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {t_data}
        </tbody>
      </Table>

      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Device Id</th>
            <th>Use date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Water usage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {w_data}
        </tbody>
      </Table>

      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Device Id</th>
            <th>Use date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Watt usage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {e_data}
        </tbody>
      </Table>

      <Table responsive hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
            <th>Sum Electric data _day_</th>
            <th>Sum Water data _day_</th>
            <th>Sum Electric data _month_</th>
            <th>Sum Water data _month_</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {histoty}
        </tbody>
      </Table>
    )
  }
}

export default DataTable
