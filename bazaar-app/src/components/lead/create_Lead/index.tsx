import React, {useState, useEffect, useId} from 'react'

import CustomDropdown from '../../../Utilities/CustomDropdown'
import CustomDatePicker from '../../../Utilities/CustomDatePicker';
import CustomTextInput from '../../../Utilities/CustomTextInput';
import CustomeTextarea from '../../../Utilities/CustomeTextarea';

import { createNewCustomer, selectHotelPreferences, modeOfPayment, selectCouple, selectCurrency, selectRequirement, selectRequirementDefault, selectServiceIncluded, selectTypeOfHoliday, selectVehicleType } from '../../../constants';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styles from "./create.module.css"
import CustomNumberInput from '../../../Utilities/CustomNumberInput';
import CreateServiceIncluded from '../../../Utilities/CreateServiceIncluded';
import CreateNewCustomer from '../../../Utilities/CreateNewCustomer';
import { onKeyPress } from '../../../Utilities/Utils'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../../store/actions/createNewCustomer';
import CustomToast from '../../../Utilities/CustomToast';
import CustomCustomerDropdown from '../../../Utilities/CustomCustomerDropdown.';
// import CopyLineIcon from "../../../assets/icons/copy-line-icon.svg";

import axios from 'axios';
import { selectCountries } from '../../../constants/countries';
// import { useNavigate } from 'react-router-dom';

const CreateLead = () => {

const dispatch = useDispatch();
const uniqueId = useId(); 
// const navigate = useNavigate();

const createNewCustomerData = useSelector(
  (state: any) => state?.data
);


console.log("createNewCustomerReducer FE lead", createNewCustomerData)


const [createLead, setCreateLead] = useState({
    id: uniqueId,
    leadTitle: "",
    paymentmode: "",
    customerName: "",
    getRequirement: "",
    noOfInfants :"",
    typeOfHoliday:"", 
    dateANDtime: "", 
    pickUpPoint: "",
    dropPoint: "",
    noOfAdults: "",
    noOfKids: "",
    groupTourPackageList :"", 
    serviceList: [
      {id: 1, isChecked: false, serviceName: "Airfare"},
      {id: 2, isChecked: false, serviceName: "Internal Transportation"},
      {id: 3, isChecked: false, serviceName: "Hotel Stay"},
      {id: 4, isChecked: false, serviceName: "Sightseeing"},
      {id: 5, isChecked: false, serviceName: "Visa Fees"},
      {id: 6, isChecked: false, serviceName: "Government Tax"},
      {id: 7, isChecked: false, serviceName: "Surcharge"},
      {id: 8, isChecked: false, serviceName: "Cruise Stay"},
      {id: 9, isChecked: false, serviceName: "Free Goodies"},
      {id: 10, isChecked: false, serviceName: "APAI - Stay & All Meals"},
      {id: 11, isChecked: false, serviceName: "Passport Fees"},
      {id: 12, isChecked: false, serviceName: "CP - Stay & Breakfast"},
      {id: 13, isChecked: false, serviceName: "Tour Manager"},
      {id: 14, isChecked: false, serviceName: "MAP - Stay, Breakfast & Dinner"},
    ],
    vehicleType :"",
    noOfRooms :"",
    startDate :"",
    endDate :"",
    checkIN :"",
    checkOUT :"",
    destination :"",
    country: "",
    noOfDays :"",
    typeOfVisa :"",
    coupleList: "",
    currencyType: "",
    budgetForTrip: "",
    requiredDocuments: "",
    shortNote: "",
    hotelPreferences: "",
    selectLeadstatus: "",
    leadGeneratedNo: "",
    leadCreatedDate: "",
})

const { 
  leadTitle,
  customerName,
  getRequirement,
  typeOfHoliday, 
  dateANDtime, 
  pickUpPoint,
  dropPoint,
  noOfAdults,
  noOfKids,
  noOfInfants,
  groupTourPackageList,
  vehicleType,
  noOfRooms,
  startDate,
  country,
  endDate,
  checkIN,
  checkOUT,
  destination,
  noOfDays,
  typeOfVisa,
  coupleList,
  currencyType,
  budgetForTrip,
  requiredDocuments,
  shortNote,
  selectLeadstatus,
  paymentmode,
  hotelPreferences,
  serviceList,
} = createLead;

const {
  fItTourPackage,
  groupTourPackage,
  hotelStay,
  cabServicePickUpandDrop,
  flights,
  train,
  forex,
  visa,
} = selectRequirementDefault

const [validated, setValidated] = useState(false);
const [serviceIncludedModalShow, setServiceIncludedModalShow] = useState(false as any);
const [createNewCustomerModalShow, setCreateNewCustomerModalShow] = useState(false as any);

const handleSubmit = (event: any) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    axios.post(`http://localhost:8001/createLead`, createLead).then((response: any) => {
      console.log("onAddCustomerSubmit", response?.status)
  })
    console.log("handleSubmit", createLead);
    // handleClose();
    // history("/lead-board/supervise")
  }
  setValidated(true);
};


console.log("createLead", createLead);

  const handleChangeLead = (e: any) => {
    const target = e.target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    console.log("target.value", target.value)


    
    setCreateLead({
      ...createLead,
      [name]: target.value
    });


  }

  
      
      // console.log("createLead?.getRequirement", createLead)

  const handleCreateNewCustomer = () => {
    console.log("Create New Customer")
    setCreateNewCustomerModalShow(true)
  }

  const handleAddMoreServices = () => {
    console.log("Add More Services")
    setServiceIncludedModalShow(true)
  }
 

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  
  const handleChangeLeadCheckBox = (id:any) => {
    setCreateLead((prevCreateLead: any) => {
      const updatedServiceList = prevCreateLead.serviceList.map((service:any) =>
        service.id === id
          ? { ...service, isChecked: !service.isChecked }
          : service
      );

      return {
        ...prevCreateLead,
        serviceList: updatedServiceList,
      };
    });
  };
  

 
  
  return (
    <> 
     {/* {createLead.serviceList.map((service) => (
          
            <label key={service.id}>
              <input
                type="checkbox"
                checked={service.isChecked}
                onChange={() => handleChangeLeadCheckBox(service.id)}
              />
              {service.serviceName}
            </label>
           C VX                      AZ
        ))}  */}
    <CustomToast showToast = {true} variantType = {false}/>

    <CreateServiceIncluded show={serviceIncludedModalShow} onHide={() => setServiceIncludedModalShow(false)} />
    <CreateNewCustomer show = {createNewCustomerModalShow} onHide={() => setCreateNewCustomerModalShow(false)} />

    <div className='manage_top_view'>
      {/* <CopyLineIcon /> */}
      <Container>
        <Row className={styles.lead_wrapper}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-6">
                <Form.Group as={Col} md="6" controlId="validationCustom">
                  <Form.Label>Lead Title</Form.Label>
                  <CustomTextInput required = {true} value = {leadTitle} onChange = {handleChangeLead} name = "leadTitle" />
                </Form.Group>
              </Row>
              <br />
              <h4 className={styles.customer_details_title}>Customer Details</h4>
              <Row className="mb-3">
                <Form.Label>Select Customer</Form.Label>
                  <Form.Group as={Col} md="4" controlId="validationCustom">
                  <CustomCustomerDropdown required = {true} value = {customerName} onChange = {handleChangeLead} name = "customerName" dropdownData = {createNewCustomer} />
                </Form.Group>
                <Form.Group as={Col} md="2">
                <Button type="button" variant="link" onClick={handleCreateNewCustomer}>Create new customer</Button>
                </Form.Group>
              </Row>
              <Row className="mb-6">
                <Form.Group as={Col} md="4" controlId="validationCustom">
                  <Form.Label>Requirement</Form.Label>
                  <CustomDropdown required = {true} value = {getRequirement} onChange = {handleChangeLead} name = "getRequirement" dropdownData = {selectRequirement} />
                </Form.Group>
                { getRequirement === fItTourPackage || getRequirement === groupTourPackage ?
                  <Form.Group as={Col} md="4" controlId="validationCustom">
                    <Form.Label>Type of Holiday</Form.Label>
                    <CustomDropdown required = {true} value = {typeOfHoliday} onChange = {handleChangeLead} name = "typeOfHoliday" dropdownData = {selectTypeOfHoliday} />
                  </Form.Group> : null
                }
              </Row>
              {
                getRequirement === fItTourPackage || getRequirement === groupTourPackage || getRequirement === hotelStay ? <>
                <br />
                <h6>{getRequirement}</h6>
                <div className="line_devider_inside"></div>
                <Row className="mb-12">
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>No of Adults</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfAdults} onChange = {handleChangeLead} name = "noOfAdults" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>No of Kids</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfKids} onChange = {handleChangeLead} name = "noOfKids" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfInfants} onChange = {handleChangeLead} name = "noOfInfants" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>Hotel Preferences</Form.Label>
                    <CustomDropdown required = {true} value = {hotelPreferences} onChange = {handleChangeLead} name = "hotelPreferences" dropdownData = {selectHotelPreferences} />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <br />
                    <Form.Label>Start Date</Form.Label>
                    <CustomDatePicker required = {true} value = {startDate} onChange = {handleChangeLead} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <br />
                    <Form.Label>End Date</Form.Label>
                    <CustomDatePicker required = {true} value = {endDate} onChange = {handleChangeLead} name = "endDate" minDate = {new Date().toISOString().split("T")[0]} />
                  </Form.Group>
                  { getRequirement === groupTourPackage ? 
                    <Form.Group as={Col} md="3">
                      <br />
                      <Form.Label>Group Tour Package List</Form.Label>
                      <CustomDropdown required = {false} value = {groupTourPackageList} onChange = {handleChangeLead} name = "groupTourPackageList" dropdownData = {selectCurrency} />
                    </Form.Group> : null
                  }
                  { getRequirement === hotelStay ? 
                    <Form.Group as={Col} md="3" controlId="validationCustom">
                      <br />
                      <Form.Label>No Of Rooms</Form.Label>
                      <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfRooms} onChange = {handleChangeLead} name = "noOfRooms" />
                    </Form.Group> : null
                  }
                  <Form.Group as={Col} md="6" controlId="validationCustom">
                    <br />
                    <Form.Label>Destination</Form.Label>
                    <CustomTextInput required = {true} value = {destination} onChange = {handleChangeLead} name = "destination" />
                  </Form.Group>
                </Row>
                </> : null
              }
              {
                getRequirement === cabServicePickUpandDrop ? <>
                <br />
                <h6>{getRequirement} Details</h6>
                <div className="line_devider_inside"></div>
                <Row className="mb-12">
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>Date & Time</Form.Label>
                    <CustomDatePicker required = {true} value = {dateANDtime} onChange = {handleChangeLead} name = "dateANDtime" minDate = {new Date().toISOString().split("T")[0]} />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Pick up Point</Form.Label>
                    <CustomTextInput required = {true} value = {pickUpPoint} onChange = {handleChangeLead} name = "pickUpPoint" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom001">
                    <Form.Label>Drop Point</Form.Label>
                    <CustomTextInput required = {true} value = {dropPoint} onChange = {handleChangeLead} name = "dropPoint" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <Form.Label>No of Adults</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfAdults} onChange = {handleChangeLead} name = "noOfAdults" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <br />
                    <Form.Label>No of Kids</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfKids} onChange = {handleChangeLead} name = "noOfKids" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom">
                    <br />
                    <Form.Label>No Of Infants (Below 2 Years)</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfInfants} onChange = {handleChangeLead} name = "noOfInfants" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <br />
                    <Form.Label>Vehicle Type</Form.Label>
                    <CustomDropdown required = {false} value = {vehicleType} onChange = {handleChangeLead} name = "vehicleType" dropdownData = {selectVehicleType} />
                  </Form.Group>
                </Row>
                </> : null
              }

              {
                getRequirement === flights ? <>
                <br />
                <h6>{getRequirement} Details</h6>
                <div className="line_devider_inside"></div>
                </> : null
              }

              {
                getRequirement === train ? <>
                <br />
                <h6>{getRequirement} Details</h6>
                <div className="line_devider_inside"></div>
                </> : null
              }

              {
                getRequirement === forex ? <>
                <br />
                <h6>{getRequirement} Details</h6>
                <div className="line_devider_inside"></div>
                <Row className="mb-12">
                  <Form.Group as={Col} md="3">
                    <Form.Label>Currency</Form.Label>
                    <CustomDropdown required = {true} value = {currencyType} onChange = {handleChangeLead} name = "currencyType" dropdownData = {selectCurrency} />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                      <Form.Label>Amount</Form.Label>
                      <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {budgetForTrip} onChange = {handleChangeLead} name = "budgetForTrip" />
                  </Form.Group>
                </Row>
                </> : null
              }

              {
                getRequirement === visa ? <>
                <br />
                <h6>{getRequirement} Details</h6>
                <div className="line_devider_inside"></div>
                <Row className="mb-12">
                <Form.Group as={Col} md="3">
                  <Form.Label>Country</Form.Label>
                    <CustomDropdown required = {true} value = {country} onChange = {handleChangeLead} name = "country" dropdownData = {selectCountries} />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                      <Form.Label>Number Of Days</Form.Label>
                      <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfDays} onChange = {handleChangeLead} name = "noOfDays" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>Type of Visa</Form.Label>
                    <CustomTextInput required = {true} value = {typeOfVisa} onChange = {handleChangeLead} name = "typeOfVisa" />
                  </Form.Group>
                  <Form.Group as={Col} md="8" >
                    <br />
                    <Form.Label>Required Documents</Form.Label>
                    <CustomeTextarea value = {requiredDocuments} onChange = {handleChangeLead} name = "requiredDocuments" />
                  </Form.Group>
                </Row>
                </> : null
              }
              { getRequirement === groupTourPackage || getRequirement === hotelStay || getRequirement === fItTourPackage ? <>
                <br />
                <h6>Budget/Cost</h6>
                <div className="line_devider_inside"></div>
                <Row className="mb-12">
                <Form.Group as={Col} md="3">
                  <Form.Label>Per Person / Couple</Form.Label>
                  <CustomDropdown required = {true} value = {coupleList} onChange = {handleChangeLead} name = "coupleList" dropdownData = {selectCouple} />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Currency</Form.Label>
                  <CustomDropdown required = {true} value = {currencyType} onChange = {handleChangeLead} name = "currencyType" dropdownData = {selectCurrency} />
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Amount</Form.Label>
                    <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {budgetForTrip} onChange = {handleChangeLead} name = "budgetForTrip" />
                </Form.Group>
                  <Form.Group as={Col} md="3">
                  <Form.Label>Payment Mode</Form.Label>
                  <CustomDropdown required = {true} value = {paymentmode} onChange = {handleChangeLead} name = "paymentmode" dropdownData = {modeOfPayment} />
                </Form.Group>
                </Row> 
                </> : null
              }
              { getRequirement === groupTourPackage || getRequirement === hotelStay || getRequirement === fItTourPackage ? <>
                  <br />
                  <h6>Service Included in the price</h6>
                  <div className="line_devider_inside"></div>
                  <Row className="mb-12">
                    {
                      serviceList?.map((service: any) => <Form.Group as={Col} md="3" key={service?.serviceName} className='checkbox_customeStyle'>
                        <label key={service.id}>
                          <input
                            type="checkbox"
                            checked={service.isChecked}
                            onChange={() => handleChangeLeadCheckBox(service.id)}
                          />
                          {service.serviceName}
                        </label>
                      </Form.Group>)
                    }
                    <div>
                      {/* <Button variant="link" onClick={handleAddMoreServices}>Add more</Button> */}
                    </div>
                  </Row>
                </>
                : null
              }
              <Row className="mb-8">
                <Form.Group as={Col} md="8" >
                  <br />
                  <Form.Label>Short Note</Form.Label>
                  <CustomeTextarea value = {shortNote} onChange = {handleChangeLead} name = "shortNote" />
                </Form.Group>
              </Row>
              <br /> <br /> 
              <Button type="submit" variant="primary">Submit</Button>
              <br /> <br />
          </Form>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default CreateLead