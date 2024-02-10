import React, { useEffect, useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Row from 'react-bootstrap/esm/Row';
import { selectMeal } from '../../constants';
import Col from 'react-bootstrap/esm/Col'; 

const Description = (props: any) => {

  const [show, setShow] = useState(false); 

    const [dayDescription, setDayDescription] = useState({
        dayTitleText: "",
        dayDescriptionText: "",
    })

    useEffect(() => {
      setShow(props?.show)
    }, [props])

    const {
      dayTitleText,
      dayDescriptionText
    } = dayDescription

    const handleChangeDayDescription = () => {

    }


  return (
    <>
    <Modal
      show={show}
      onHide={props?.onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title><h5>Day Description</h5></Modal.Title>
      </Modal.Header>
      <Form>
          <Modal.Body>
          <Form.Group as={Col} controlId="validationCustom">
            <Form.Label>Day Title</Form.Label>
            <CustomTextInput required = {true} value = {dayTitleText} onChange = {handleChangeDayDescription} name = "dayTitleText" />           
          </Form.Group>          
          <br />
          <Form.Group as={Col} controlId="validationCustom">
            <Form.Label>Day Description</Form.Label>
            <CustomeTextarea required = {false} value = {dayDescriptionText} onChange = {handleChangeDayDescription} name = "dayDescriptionText" />
          </Form.Group>    
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


export default Description