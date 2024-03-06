import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./manage.module.css"
import { leadStatus, manageLeadSideNavMoreList, notApplicable } from '../../../constants';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { leadMockData } from '../../../constants/mocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faAngleUp, faXmark, faExpand, faAngleDown, faCheck, faMinimize, faMaximize} from '@fortawesome/free-solid-svg-icons';
import ManageLeadSideNavMore from '../../../Utilities/ManageLeadSideNavMore';
import UpdateLeadStatus from '../../../Utilities/UpdateLeadStatus';
import Collapse from 'react-bootstrap/Collapse';

const ManageLead = () => {
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [selectedNavItem, setselectedNavItem] = useState<string>("");
  const [activeSideViewOfLead, setActiveSideViewOfLead] = useState(false);
  const [activeFullViewOfLead, setActiveFullViewOfLead] = useState(false);
  const [showSingleView, setshowSingleView] = useState({} as any);
  const [activeForMenu, setActiveForMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [manageLeadSideNavMoreModalShow, setmanageLeadSideNavMoreModalShow] = useState(false);
  const [managedleadDefaultViewMore, setmanagedleadDefaultViewMore] = useState(false);

  const [chnageLeadStatusModalshow, setChnageLeadStatusModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLeadStatusChangeClose = () => setChnageLeadStatusModalShow(false);
  const handleLeadStatusChangeShow = (title: any) => {
    setChnageLeadStatusModalShow(true)
    setselectedNavItem(title)
  };


  const handleLeadClick = (itemIndex: any, item: any) => {
    setSelectedIndex(itemIndex); 
    setshowSingleView(item);
    setActiveSideViewOfLead(true)

  };

  const handleStatusClick = (status: string) => {
    setActiveStatus(status); 
  };

  const handleCloseButton = () => {
    setActiveSideViewOfLead(false)
  }

  console.log("showSingleView",showSingleView)

  const handleViewMore = () => {
    console.log("view More")
    setmanagedleadDefaultViewMore(true)
  }

  const handleHideViewMore = () => {
    setmanagedleadDefaultViewMore(false)
  }

  const handleOpenModalForMenu = () => {
    setActiveForMenu(!activeForMenu)
    setmanageLeadSideNavMoreModalShow(true)
  }

  const handleExpandFullScreenView = () => {
    setActiveFullViewOfLead(!activeFullViewOfLead)
  }

  return (
    <>
    {/* <ManageLeadSideNavMore show={manageLeadSideNavMoreModalShow} onHide={() => {
      setmanageLeadSideNavMoreModalShow(false)
      setActiveForMenu(false)
      }} /> */}
      <UpdateLeadStatus show = {chnageLeadStatusModalshow} onHide = {handleLeadStatusChangeClose} selectedItem = {selectedNavItem} />
    <Container fluid className={`${styles.managelead_wrapper} manage_top_view`}>
      <Container>
        <Row className='align-items-center justify-content-between'>
          {/* <Col xs lg="2"><h6>Manage Leads</h6></Col> */}
          <Col xs lg="9">
            <ul>
              {
                leadStatus?.map((status: any) => <li
                  key={status}
                  className={activeStatus === status ? styles.active : ''} 
                  onClick={() => handleStatusClick(status)}
                >{status} </li>)
              }
            </ul>
          </Col>
          <Col xs lg="1"></Col>
          <Col xs lg="2" className={styles.managelead_createLead}><Button variant="link">Create new lead <FontAwesomeIcon icon={faSquarePlus} /></Button></Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className={styles.managelead_selectFilter}>
      <Container>
        <Row className="align-items-center">
          <Col><label>{activeStatus} Leads</label></Col>
          <Col xs lg="3">
          <Form className={styles.searchForm}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Search..." />
            </Form.Group>
           </Form>
        </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid>
      <Container className={styles.managelead_items_wrapper}>
        { activeFullViewOfLead ? <></> : <div className={`${styles.managelead_main_left} ${activeSideViewOfLead ? styles.managelead_main_left_dynamic : ""}`}>
        {
          leadMockData?.map((item: any, index: any) => <div className={`${styles.managelead_content_wrapper} align-items-end ${selectedIndex === index ? styles.manageLeadActive : ""}`} key ={index} onClick={() => handleLeadClick(index, item)}>
            <div className={`${styles.managelead_item_left} ${activeSideViewOfLead ? styles.sideViewEnabled : styles.fullwidthViewEnabled}`}>
              <h6>{item?.leadTitle} {item?.customerName}</h6>
              <ul>
                {
                  activeSideViewOfLead ? <>
                  <li><label>Destination</label>
                    {item?.distination !== "" ? item?.distination : notApplicable}
                  </li>
                  <li><label>Budget/Cost</label>
                    INR {item?.budgetForTrip !== "" ? item?.budgetForTrip : notApplicable}
                  </li>
                  <li><label>Itinerary</label>
                    0
                  </li>
                  </> : <>
                  <li>
                  <label>Requirements</label>
                    {item?.getRequirementValue}
                  </li>
                  <li><label>Destination</label>
                  {item?.distination !== "" ? item?.distination : notApplicable}
                  </li>
                  <li><label>Adults</label>
                    {item?.noOfAdults !== "" ? item?.noOfAdults : notApplicable}
                  </li>
                  <li><label>Kids</label>
                    {item?.noOfKids !== "" ? item?.noOfKids : notApplicable}
                  </li>
                  <li><label>Infants</label>
                    {item?.noOfInfants !== "" ? item?.noOfInfants : notApplicable}
                  </li>
                  <li><label>Budget/Cost</label>
                    INR {item?.budgetForTrip !== "" ? item?.budgetForTrip : notApplicable}
                  </li>
                  <li><label>Itinerary</label>
                    0
                  </li>
                  </>
                }
                
              </ul>
            </div>
            {
              activeSideViewOfLead? <></> : <div className={styles.managelead_item_right}>
                <label><span>Travelling on</span> 23 Aug 2023 | <span>New Since</span> (180 Days)</label>
                <label><span>Managed By</span> Venkat | 24 Feb 2023 20: 59 PM</label>
              </div>
            }         
          </div>)
        }    
        </div>}  
        {activeSideViewOfLead ? <div className={styles.managelead_main_right}>
          <Row className='align-items-center'>
            <Col xs lg="6"><h4>{showSingleView["leadTitle"]}</h4></Col>
            <Col xs lg="6" style = {{textAlign: "right"}} className={styles.managelead_sideview_nav}><span onClick={() => handleOpenModalForMenu()}>MENU { activeForMenu ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />} </span> <span onClick={() => handleExpandFullScreenView()}> { activeFullViewOfLead ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}  </span><span onClick={() => handleCloseButton()}> <FontAwesomeIcon icon={faXmark} /></span></Col>
          </Row>
          <Row className={`align-items-center ${styles.managelead_sideview_info}`}>
            <Col xs lg="6"><label><span>For</span> Venkatesh | <span>Travelling</span> 02 Aug 2023 | <span>New Since</span> (186 Days)</label></Col>
            <Col xs lg="6" style = {{textAlign: "right"}}><label><span>Manage by</span> Venkatesh</label></Col>
          </Row>
           
          <Collapse in={activeForMenu}>
              <Container>
                <Row className={styles.manageSideNavModal}>
                {
                    manageLeadSideNavMoreList?.map((navList: any, index: any) => 
                    <Col xs={6} md={4} key = {index}>
                        { navList?.navTitle === "Change Lead Status" ? <h6 
                          onClick = {() => handleLeadStatusChangeShow(navList?.navTitle)}>
                          <span>{navList.icon} &nbsp;</span>{navList?.navTitle}
                        </h6> : navList?.navTitle === "Remove Lead" ? <h6 
                          onClick = {() => handleLeadStatusChangeShow(navList?.navTitle)}>
                          <span>{navList.icon} &nbsp;</span>{navList?.navTitle}
                        </h6> : <h6><span>{navList.icon} &nbsp;</span>{navList?.navTitle}</h6> }
                    </Col> )
                }
                </Row> 
              </Container>
          </Collapse>

          <Row className={styles.selectedListContent}>
              { managedleadDefaultViewMore ? <></> : <Col xs={12} md={12}>
                <ul>
                  <li><span>Destination</span> Bangalore</li>
                  <li><span>Adults</span>2</li>
                  <li><span>Kids</span>3</li>
                  <li><span>Infants</span>1</li>
                  <li><span>Budge / Cost</span>9,000 /-</li>
                  <li><span>Itinerary</span>1</li>
                  <li onClick={() => handleViewMore()} style={{cursor: "pointer"}}>More <FontAwesomeIcon icon={faAngleDown} /></li>
                </ul>
              </Col>}
              {
                managedleadDefaultViewMore ? <> 
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Customer first name</span> Roshan
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Customer first name</span> Syed
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Email</span> test@test.com
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Mobile</span> +91 9876543210
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Country</span> India
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Requirement</span> FIT (Customised) Tour Package
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Adults</span> 2
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Kinds(2 to 12 years)</span> 3
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Infants</span> 1
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Destination</span> Bangalore
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Start Date</span> 1
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>End Date</span> 1
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Hotel Preference</span> 1
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Budget / Cost</span> 1
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Amount</span> 1
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Currency</span> 1
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <br />
                  <span>Service included in the price</span>
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <Row className={styles.serviceIncludeWrapper}>
                    <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                    <FontAwesomeIcon icon={faCheck} /> Internal Transportation
                    </Col>
                    <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                    <FontAwesomeIcon icon={faCheck} /> Hotel Stay
                    </Col>
                    <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                    <FontAwesomeIcon icon={faCheck} /> Sightseeing
                    </Col>
                    <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                    <FontAwesomeIcon icon={faCheck} /> Government Tax
                    </Col>
                    <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                    <FontAwesomeIcon icon={faCheck} /> Surcharge
                    </Col>
                  </Row>
                </Col>
                </> : null
              }
              
              
              {/* <ul>
                <li>Customer first name<span></span></li>
                <li>Customer last name<span></span></li>
                <li>Email<span></span></li>
                <li>Mobile<span></span></li>
                <li>Country<span></span></li>
              </ul>
              <ul>
                <li>Requirement<span></span></li>
              </ul>
              <ul>
                <li>Adults<span></span></li>
                <li>Kinds(2 to 12 years)<span></span></li>
              </ul>
              <ul>
                <li>Destination<span></span></li>
              </ul>
              <ul>
                <li>Start Date<span></span></li>
                <li>End Date<span></span></li>
                <li>Hotel Preference<span></span></li>
                <li>Budget / Cost<span></span></li>
                <li>Amount<span></span></li>
                <li>Currency<span></span></li>
              </ul>
              <h5>Service included in the price</h5>
              <ul>
                <li>Internal Transportation</li>
              </ul> */}
          </Row>
          {
            managedleadDefaultViewMore ? <div className='justify-content-end align-items-end d-flex'> <Button variant="link" onClick={() => handleHideViewMore()}>Hide <FontAwesomeIcon icon={faAngleUp} /> </Button> </div>: <></>
          }
          
        </div> : <></>}
        
      </Container>
    </Container>
    </>
  )
}

export default ManageLead