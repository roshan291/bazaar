import React, { useEffect, useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Row from 'react-bootstrap/esm/Row';
import { selectMeal } from '../../constants';
import Col from 'react-bootstrap/esm/Col';

const Meal = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
      setShow(props?.show)
    }, [props])

    console.log("Meal", props)
    const [meal, setMeal] = useState({
        mealTitle: "",
        mealDescription: "",
        selecdtMeal: [
            {id: 1, isChecked: false, selectMealType: "Breakfast"},
            {id: 2, isChecked: false, selectMealType: "Lunch"},
            {id: 3, isChecked: false, selectMealType: "Dinner"},
            {id: 4, isChecked: false, selectMealType: "Evening Snacks"},
        ],
    })

    const {
        mealTitle,
        mealDescription,
        selecdtMeal
    } = meal

    const handleChangeMeal = () => {

    }

    const handleChangeSelectMeal = (id: any) => {

    }

  return (
    <>
    <Modal
      {...props} 
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title><h5>Meal / Food</h5></Modal.Title>
      </Modal.Header>
        <Form>
            <Modal.Body>
            <Form.Group as={Col} controlId="validationCustom">
                <Form.Label>Meal Title</Form.Label>
                <CustomTextInput required = {true} value = {mealTitle} onChange = {handleChangeMeal} name = "mealTitle" />
            </Form.Group>  
            
            <br />
            <Row className="mb-12">
                {
                  selecdtMeal?.map((meal: any) => <Form.Group as={Col} key={meal?.selectMealType} className='checkbox_customeStyle'>
                    <label key={meal}>
                      <input
                        type="checkbox"
                        checked={meal.isChecked}
                        onChange={() => handleChangeSelectMeal(meal.id)}
                      />
                      {meal.selectMealType}
                    </label>
                  </Form.Group>)
                }
            </Row>
            <br />
            <Form.Group as={Col} controlId="validationCustom">
                <Form.Label>Meal Description</Form.Label>
                <CustomeTextarea required = {false} value = {mealDescription} onChange = {handleChangeMeal} name = "mealDescription" />
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

export default Meal