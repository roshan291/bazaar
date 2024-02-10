import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomTextInput from '../../Utilities/CustomTextInput';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import CustomCustomerDropdown from '../../Utilities/CustomCustomerDropdown.';
import { selectVehicleType } from '../../constants';
import CustomeTextarea from '../../Utilities/CustomeTextarea';

const Transportation = (props: any) => {
    const [show, setShow] = useState(false); 

    useEffect(() => {
        setShow(props?.show)
    }, [props])

    const [transportation, setTransportation] = useState({
        transportationTitle: "",
        transpotationMode: "",
        departingCountry: "",
        departingCity: "",
        startingPoint: "",
        departDate: "",
        actualDepartureTime: "",
        reportingTime: "",
        arrivalCountry: "",
        arrivalCity: "",
        endingPoint: "",
        arrialDate: "",
        actualArrivalTime: "",
        transpotationNote: "",
    })

    const {
        transportationTitle,
        transpotationMode,
        departingCountry,
        departingCity,
        startingPoint,
        departDate,
        actualDepartureTime,
        reportingTime,
        arrivalCountry,
        arrivalCity,
        endingPoint,
        arrialDate,
        actualArrivalTime,
        transpotationNote,
    } = transportation

    const handleChangetransportation = () => {

    }
    return (
        <>           
            <Modal
                show={show}
                onHide={props?.onHide}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <h5>Transportation Information</h5>
                </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Row>
                            <Col>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-3'>
                                <Form.Label>Title</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>  
                            <h6>Departing Information</h6>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart country</Form.Label>
                                <CustomCustomerDropdown required = {true} value = {transpotationMode} onChange = {handleChangetransportation} name = "transpotationMode" dropdownData = {selectVehicleType} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart city</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Starting point</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group> 
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart date</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Actual departure time</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Reporting time</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Actual arrival time</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            </Col>
                            <Col>
                            
                            <Form.Group as={Col} controlId="validationCustom" className='mb-3'>
                                <Form.Label>Transportation Mode</Form.Label>
                                <CustomCustomerDropdown required = {true} value = {transpotationMode} onChange = {handleChangetransportation} name = "transpotationMode" dropdownData = {selectVehicleType} />
                            </Form.Group>
                            <h6>Arrival Information</h6>
                            <Form.Label>Arrival country</Form.Label>
                                <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <CustomCustomerDropdown required = {true} value = {transpotationMode} onChange = {handleChangetransportation} name = "transpotationMode" dropdownData = {selectVehicleType} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Arrival city</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group> 
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Ending point</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Arrival date</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                            <Form.Label>Transpotation Note</Form.Label>
                                <CustomeTextarea value = {transpotationNote} onChange = {handleChangetransportation} name = "transpotationNote" />
                            </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <br />
                        <Button variant="secondary" onClick={props?.onHide}>
                            Close
                        </Button>
                        <Button variant="primary">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Transportation