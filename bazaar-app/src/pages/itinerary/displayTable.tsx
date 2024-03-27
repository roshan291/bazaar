import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEye, faDownload, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Daywiseplan from './dayWisePlan';

const DisplayTable = (props: any) => {

    console.log("props", props?.rowData);

    const handleView = (item: any) => {

    }
    // const pdfdownload = (item: any) => {
    //     console.log("pdfdownload", item);
    // }

    const MyDoc = (pdfdata: any) => (
        <Document>
            <Daywiseplan createItinerary = {pdfdata}/>
        </Document>
    );
    
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
                 props?.rowData?.map((item: any, index : any) => <tr key={index}>
                    <td>{index}</td>
                    <td>{item.dateOfIssue}</td>
                    <td>{item.itineraryTitle}</td>
                    <td>{item.customerName}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.budgetForTrip}</td>
                    <td>{item.itineraryStatus === "inProgress" ? "In Progress" : item.itineraryStatus === "new" ? "New" : item.itineraryStatus === "pending" ? "Pending" : item.itineraryStatus === "confirmed" ? "Confirmed" : item.itineraryStatus === "completed" ? "Completed" : "Canceled"}</td>
                    <td className='itinerary_actin_wrapper'>
                        <FontAwesomeIcon icon={faCopy} />
                        <FontAwesomeIcon icon={faEye} onClick={() => handleView(item)}/>
                        {/* <FontAwesomeIcon icon={faDownload} onClick = {() => pdfdownload(item)} /> */}
                        {/* <FontAwesomeIcon icon={faFloppyDisk} /> */}
                        <PDFDownloadLink document={<MyDoc pdfdata = {item} />} fileName={item.itineraryTitle}>
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading...' : <FontAwesomeIcon icon={faDownload} />
                            }
                        </PDFDownloadLink>
                        <FontAwesomeIcon icon={faXmark} />
                    </td>
                 </tr>)
            }
        </tbody>
        </Table>
    </div>
  )
}

export default DisplayTable