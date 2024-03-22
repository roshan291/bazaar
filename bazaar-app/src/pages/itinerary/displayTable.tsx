import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEye, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const DisplayTable = (props: any) => {

    const handleView = (item: any) => {

    }
    const pdfdownload = (item: any) => {

    }

  return (
    <div className="display_table_main_wrapper container">
        <Table striped bordered hover>
        <thead>
            <tr>
                <th># ID</th>
                <th>Created Date</th>
                <th>Itinerary Title</th>
                <th>Customer Name</th>
                <th>Mobile Number</th>
                <th>Budget / Cost</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                 props?.rowData?.map((item: any, index : any) => <tr key={item.id}>
                    <td>{item.itineraryNumber}</td>
                    <td>{item.dateOfIssue}</td>
                    <td>{item.itineraryTitle}</td>
                    <td>{item.customerName}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.budgetCost}</td>
                    <td>{item.itineraryStatus === "inProgress" ? "In Progress" : item.itineraryStatus === "new" ? "New" : item.itineraryStatus === "pending" ? "Pending" : item.itineraryStatus === "confirmed" ? "Confirmed" : item.itineraryStatus === "completed" ? "Completed" : "Canceled"}</td>
                    <td>
                        <FontAwesomeIcon icon={faCopy} />
                        <FontAwesomeIcon icon={faEye} onClick={() => handleView(item)}/>
                        <FontAwesomeIcon icon={faDownload} onClick = {() => pdfdownload(item)} />
                        <FontAwesomeIcon icon={faTrash} />
                    </td>
                 </tr>)
            }
        </tbody>
        </Table>
    </div>
  )
}

export default DisplayTable