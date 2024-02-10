import React, {useState} from 'react'
import styles from "./create_itinerary.module.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { itineraryDefaultConstant } from '../constants';
import CustomTextInput from '../../../Utilities/CustomTextInput';
import CustomDropdown from '../../../Utilities/CustomDropdown';
import { itineraryStatus, selectCountries, selectCouple, selectCurrency, selectThankyouNote, selectTypeOfHoliday, selectWelcomeNote } from '../../../constants';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CustomDatePicker from '../../../Utilities/CustomDatePicker';
import CustomNumberInput from '../../../Utilities/CustomNumberInput';
import { onKeyPress } from '../../../Utilities/Utils';
import CustomEmailInput from '../../../Utilities/CustomEmailInput';
import CustomeTextarea from '../../../Utilities/CustomeTextarea';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faCircleArrowUp, faTrashCan, faTag, faPlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useId } from 'react';
import Meal from '../../../pages/itinerary/meal';
import Description from '../../../pages/itinerary/description';
import Transportation from '../../../pages/itinerary/transportation';
import HotelCheckout from '../../../pages/itinerary/hotelCheckout';
import Sightseeing from '../../../pages/itinerary/sightseeing';
import Hotel from '../../../pages/itinerary/hotel';
import NextDay from '../../../pages/itinerary/addNextDay';

const CreateItinerary = () => {
    const [validated, setValidated] = useState(false);
    const [addDayCount, setAddDayCount] = useState(1);
    const [dayWisePlan, setDayWisePlan]= React.useState([] as any)
    const [opeNextDay, setOpeNextDay] = React.useState(false);
    const [openMeal, setOpenMeal] = React.useState(false);
    const [openDescription, setOpenDescription] = React.useState(false); 
    const [openTransportation, setOpenTransportation] = React.useState(false);
    const [openHotel, setOpenHotel] = React.useState(false);
    const [openHotelCheckout, setOpenHotelCheckout] = React.useState(false);
    const [openSightseeing, setOpenSightseeing] = React.useState(false);

    const [nextDayData, setNextDayData] = React.useState([] as any);

    // sightseeing

    console.log("nextDayData", nextDayData)

    const [createItinerary, setCreateItinerary] = useState({
        itineraryTitle: "",
        destination: "",
        typeOfHoliday: "",
        noOfAdults: "",
        noOfKids: "",
        startDate :"",
        endDate :"",
        coupleList: "",
        currencyType: "",
        budgetForTrip: "",
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
        noOfNights: "",
        travellers: "",
        welcomenote: "",
        customerName: "",
        emailId: "",
        mobileNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postalCode: "", 
        birthDate: "",
        anniversaryDate: "",
        note: "",
        inclusion: "",
        exclusion: "",
        cost: "",
        termsConditions: "",
        tips: "",
        otherVisaInformation: "",
        thankyounote: "",
        changestatus: ""
    })

    const {
        itineraryTitle,
        destination,
        typeOfHoliday,
        noOfAdults,
        noOfKids,
        startDate,
        endDate,
        coupleList,
        currencyType,
        budgetForTrip,
        noOfNights,
        travellers,
        serviceList,
        welcomenote,
        customerName,
        emailId,
        mobileNumber,
        address,
        country,
        state,
        city,
        postalCode, 
        birthDate,
        anniversaryDate,
        note,
        inclusion,
        exclusion,
        cost,
        termsConditions,
        tips,
        otherVisaInformation,
        thankyounote,
        changestatus,
    } = createItinerary;
    

    console.log("createItinerary", createItinerary)
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
        //   axios.post(`http://localhost:8001/createLead`, createLead).then((response: any) => {
         console.log("onAddCustomerSubmit")
        // })
          console.log("handleSubmit");
          // handleClose();
          // history("/lead-board/supervise")
        }
        setValidated(true);
      };


      
  const handleChangeItinerary = (e: any) => {
    const target = e.target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCreateItinerary({
      ...createItinerary,
      [name]: value
    });
  }

  const handleChangeLeadCheckBox = (id:any) => {
    setCreateItinerary((prevCreateLead: any) => {
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

  const addPlan = {
    id: addDayCount,
    day: `Day ${addDayCount} | 3 Aug, 2023 (Thu)`, 
    description: [],
    transportation: [],
    hotel: [],
    checkoutHotel: [],
    sightseeing: [],
    meal: [],
  }

   const addWisePlan = () => {
    // console.log("Roshan clicked on next day");
    setAddDayCount(addDayCount + 1)
    setDayWisePlan([...dayWisePlan, addPlan])
    setOpeNextDay(true)
   }

   console.log("Roshan clicked on next day", dayWisePlan);

    const handleAddDayDescription = (selectedItem: any) => {
        setOpenDescription(true)
    }
    const handleAddTransportation = (selectedItem: any) => {
        setOpenTransportation(true)
    }
    const handleAddHotel = (selectedItem: any) => {
        setOpenHotel(true)
    }
    const handleAddCheckoutHotel = (selectedItem: any) => {
        setOpenHotelCheckout(true)
    }
    const handleAddSightseeing = (selectedItem: any) => {
        setOpenSightseeing(true)
    } 
    const handleAddMealFood = (selectedItem: any) => {
        setOpenMeal(true);
    }

  return (
<>
    <NextDay show = {opeNextDay} onHide = {() => setOpeNextDay(false)} getnextDayData = {setNextDayData}/>
    <Meal show = {openMeal} onHide = {() => setOpenMeal(false)} />
    <Description show = {openDescription} onHide = {() => setOpenDescription(false)} />
    <Transportation show = {openTransportation} onHide = {() => setOpenTransportation(false)} />
    <HotelCheckout show = {openHotelCheckout} onHide = {() => setOpenHotelCheckout(false)} />
    <Sightseeing show = {openSightseeing} onHide = {() => setOpenSightseeing(false)} />
    <Hotel show = {openHotel} onHide = {() => setOpenHotel(false)} />

    <Container className={styles.create_itinerary_page}>
         <Container className="mb-3">
            <Row className='d-flex align-items-center justify-content-center'>
                <Col><h5 className='mb-0'>YOUR TOUR ITINERARY </h5></Col>
                {/* ROSHAN BANGALORE PACKAGE (#HBHITR78) */}
                <Col className='d-flex align-items-center justify-content-end'>
                    <Button variant="outline-secondary" size="sm" >Preview Web view <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    <Button variant="outline-secondary" size="sm" className='ms-2'>Preview PDF <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    <Button variant="outline-secondary" size="sm" className='ms-2' disabled>Send To Customer <FontAwesomeIcon icon={faEnvelope} /></Button>
                </Col>
            </Row>
        </Container>
       <Container>
        <Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="p-2 mb-3 tab_default_style">Summary</div>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Itinerary Title<span className='reqiored'>*</span></Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {itineraryTitle} onChange = {handleChangeItinerary} name = "itineraryTitle" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Destination</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {destination} onChange = {handleChangeItinerary} name = "destination" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Type of Holidays<span className='reqiored'>*</span></Form.Label>
                            <Col>
                            <CustomDropdown required = {true} value = {typeOfHoliday} onChange = {handleChangeItinerary} name = "typeOfHoliday" dropdownData = {selectTypeOfHoliday} />
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Adults</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfAdults} onChange = {handleChangeItinerary} name = "noOfAdults" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Child</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfKids} onChange = {handleChangeItinerary} name = "noOfKids" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Start Date</Form.Label>
                            <Col >
                                <CustomDatePicker required = {false} value = {startDate} onChange = {handleChangeItinerary} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>End Date</Form.Label>
                            <Col >
                                <CustomDatePicker required = {false} value = {endDate} onChange = {handleChangeItinerary} name = "endDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Nights</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfNights} onChange = {handleChangeItinerary} name = "noOfNights" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Travellers</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {travellers} onChange = {handleChangeItinerary} name = "travellers" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Budget/Cost</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {budgetForTrip} onChange = {handleChangeItinerary} name = "budgetForTrip" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Cost For</Form.Label>
                            <Col >
                                <CustomDropdown required = {true} value = {coupleList} onChange = {handleChangeItinerary} name = "coupleList" dropdownData = {selectCouple} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Currency</Form.Label>
                            <Col >
                                <CustomDropdown required = {true} value = {currencyType} onChange = {handleChangeItinerary} name = "currencyType" dropdownData = {selectCurrency} />
                            </Col>
                        </Form.Group>
                    </Col>
                    
                    <Row>
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <h6 className="mb-2 mt-3">Tour Cost Cover</h6>
                            <Col sm="12">
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
                            </Col>
                        </Form.Group>
                        <Col sm="4">
                        <Form.Group className="mb-4" controlId="Itinerary Title">
                            <br />
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Welcome Note</Form.Label>
                            <Col> 
                                <CustomDropdown required = {true} value = {welcomenote} onChange = {handleChangeItinerary} name = "welcomenote" dropdownData = {selectWelcomeNote} />
                            </Col>
                        </Form.Group>
                    </Col>
                    </Row>
                </Row>
                <div className="p-2 mb-3 tab_default_style">Customer Information</div>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Customer name </Form.Label>
                            <Col>
                                <CustomTextInput required = {true} value = {customerName} onChange = {handleChangeItinerary} name = "customerName" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Email Id </Form.Label>
                            <Col>
                                <CustomEmailInput required = {false} value = {emailId} onChange = {handleChangeItinerary} name = "emailId" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Mobile Number</Form.Label>
                            <Col>
                                <CustomNumberInput required = {false} value = {mobileNumber} onChange = {handleChangeItinerary} name = "mobileNumber" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Country</Form.Label>
                            <Col>
                            <CustomDropdown placeholder = "Select Country" required = {true} value = {country} onChange = {handleChangeItinerary} name = "country" dropdownData = {selectCountries} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>State</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {state} onChange = {handleChangeItinerary} name = "state" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>City</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {city} onChange = {handleChangeItinerary} name = "city" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Pincode</Form.Label>
                            <Col>
                                <CustomNumberInput required = {false} value = {postalCode} onChange = {handleChangeItinerary} name = "postalCode" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Birth Date</Form.Label>
                            <Col>
                                <CustomDatePicker required = {false} value = {birthDate} onChange = {handleChangeItinerary} name = "birthDate" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Anniversary Date</Form.Label>
                            <Col>
                                <CustomDatePicker required = {false} value = {anniversaryDate} onChange = {handleChangeItinerary} name = "anniversaryDate" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Address</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {address} onChange = {handleChangeItinerary} name = "address" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Note</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {note} onChange = {handleChangeItinerary} name = "note" />
                            </Col>
                        </Form.Group>
                    </Col> 
                    
                </Row>
                <br />
                <div className="p-2 mb-4 tab_default_style">Day Wise Plan</div>
                 
                <div className={styles.daywise_block_main_wrapper}>     
                    {
                        dayWisePlan?.map((item:any, index: any) => <div key = {item.index} className={styles.daywise_block_wrapper}>
                        
                        <Row>
                            <Col sm="10"><div className={styles.dayPlanCount}>{item.day}</div></Col>
                            <Col sm="2" className='d-flex align-items-center justify-content-sm-end'>
                            <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="+ Add Plan">
                                <Dropdown.Item onClick={() => handleAddDayDescription(item.id)}><FontAwesomeIcon icon={faTag} /> Day Description</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddTransportation(item.id)}><FontAwesomeIcon icon={faTag} /> Add Transportation</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddHotel(item.id)}><FontAwesomeIcon icon={faTag} /> Add Hotel</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddCheckoutHotel(item.id)}><FontAwesomeIcon icon={faTag} /> Add Checkout Hotel</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddSightseeing(item.id)}><FontAwesomeIcon icon={faTag} /> Add Sightseeing</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddMealFood(item.id)}><FontAwesomeIcon icon={faTag} /> Add Meal/Food</Dropdown.Item>
                            </DropdownButton>
                            <div className={styles.dayPlanCountDelete}><FontAwesomeIcon icon={faTrashCan} /></div>
                            </Col>
                        </Row>
                        </div>)
                    }
                </div>   
                <div className={styles.nextDayPlan}>
                    <Button size="sm" onClick={addWisePlan} variant="outline-secondary">+ Next Day</Button>
                </div>                  
                <br />
                <div className="p-2 mb-3 tab_default_style">Inclusion / Exclusion</div>
                <Row>

                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Inclusion</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {inclusion} onChange = {handleChangeItinerary} name = "inclusion" />
                            </Col>
                        </Form.Group>
                    </Col> 
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Exclusion</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {exclusion} onChange = {handleChangeItinerary} name = "exclusion" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <div className="p-2 mb-3 tab_default_style">Cost</div>
                    <Row>
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Cost</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {cost} onChange = {handleChangeItinerary} name = "cost" />
                                </Col>
                            </Form.Group>
                        </Col> 
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Term & Condition</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {termsConditions} onChange = {handleChangeItinerary} name = "termsConditions" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                <div className="p-2 mb-3 tab_default_style">Tips</div>
                    <Row>
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Tips</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {tips} onChange = {handleChangeItinerary} name = "tips" />
                                </Col>
                            </Form.Group>
                        </Col> 
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Other / Visa Infromaton</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {otherVisaInformation} onChange = {handleChangeItinerary} name = "otherVisaInformation" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                <div className="p-2 mb-3 tab_default_style">Thank you</div>
                    <Form.Group className="mb-3" controlId="Itinerary Title">
                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-start'>Thank you Note</Form.Label>
                        <Col sm="6"> 
                            <CustomDropdown required = {true} value = {thankyounote} onChange = {handleChangeItinerary} name = "thankyounote" dropdownData = {selectThankyouNote} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Itinerary Title">
                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-start'>Change Status</Form.Label>
                        <Col sm="6"> 
                            <CustomDropdown required = {true} value = {changestatus} onChange = {handleChangeItinerary} name = "changestatus" dropdownData = {itineraryStatus} />
                        </Col>
                    </Form.Group>
                    <br />
                    <div className={styles.circleArrowUp}><Button variant="outline-primary"><FontAwesomeIcon icon={faCircleArrowUp} /></Button></div>
                <Button variant="primary" type='submit'>Save & Submit</Button>
            </Form>
        </Row>
       </Container>
    </Container>
    </>
  )
}

export default CreateItinerary