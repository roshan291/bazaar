import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faSquarePlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CreateNewCustomer from '../../../Utilities/CreateNewCustomer';

const MyCustomer = () => {
  const [data, setData] = useState([])
  const [createNewCustomerModalShow, setCreateNewCustomerModalShow] = useState(false as any);

  useEffect(() => {
      axios.get('http://localhost:8000/createcustomer').then((res: any) => {
      const customer = res.data;
      setData(customer);
    });
  },[])
  
  console.log("data ____________________________________", data);
  const handleCreateNewCustomer = () => {
    console.log("Create New Customer")
    setCreateNewCustomerModalShow(true)
  }

  const handleUpdateCustomer = (id: any) => {
    console.log("Update Customer clicked", id)
  }
  const handleDeleteCustomer = (id: any) => {
    console.log("Delete Customer clicked", id)
}

  return (
    <div className='manage_top_view'>
      <CreateNewCustomer show = {createNewCustomerModalShow} onHide={() => setCreateNewCustomerModalShow(false)} />
      <div className="display_table_main_wrapper container customer_page">
        <div className='addnewcustomer'>
          Add New <FontAwesomeIcon icon={faSquarePlus} onClick={() => handleCreateNewCustomer()} />
        </div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Created Date</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
              data?.map((item: any, index: any) => <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.customerFirstName} {item.customerLastName} </td>
                <td>{item.customerEmail}</td>
                <td>{item.customerMobile}</td> 
                <td>
                    <FontAwesomeIcon icon={faPenToSquare} onClick = {() => handleUpdateCustomer(item.id)}/>
                    <FontAwesomeIcon icon={faXmark} onClick = {() => handleDeleteCustomer(item.id)}/>
                </td>
              </tr>)
            }
        </tbody>
        </Table>
      </div>
    </div>
  )
}

export default MyCustomer