import React, {useState, useRef} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'

import { helpChild, invoiceChild, itineraryChild, leadsChild, navigationConstant, navigationURL, toolsChild } from "../../constants"
import styles from "./navigation.module.css"
import OutsideClick from "../../Utilities/outsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    // const boxRef = useRef(null);
    // const boxOutsideClick = OutsideClick(boxRef)
    const [selectNav, setSelectNav] = useState('Dashboard' as any)

    const {
        createLead,
        manageLead,
        dashboard,
        customisedItinerary,
        groupItinerary,
        readyItinerary,
        propormainvoice,
        invoice,
        customerView,
    } = navigationURL;
    return (
       <>
        
      {/* <div className="desc">
        {boxOutsideClick ? setSelectNav("") : "inside click"}
      </div> */}
       <Navbar className={`${styles.navbarWrapper} bg-body-tertiary`} bg="primary" >
      <Container fluid>
        <Navbar.Brand><Link to={dashboard}>Logo</Link></Navbar.Brand>
        <Nav className={styles.navigationWrapper}>
                <Nav.Link><Link to={dashboard}>Dashboard</Link></Nav.Link>
                <NavDropdown title="Lead" id="">
                    <NavDropdown.Item><Link to={createLead}>Create new lead</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to={manageLead}>Manage leads</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="My Itinerary" id="">
                    <NavDropdown.Item><Link to={customisedItinerary}>Customized Itinerary</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={groupItinerary}>Group Itinerary</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to={readyItinerary}>Ready Itinerary</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Customer & Billing" id="">
                    <NavDropdown.Item><Link to={invoice}>Invoice</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={propormainvoice}>Proforma Invoice</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to={customerView}>My Customers</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Hotels</Nav.Link>
                <NavDropdown title="Tools" id="">
                    <NavDropdown.Item>Website Builder</NavDropdown.Item>
                    <NavDropdown.Item>Travel Flyer</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Setup Common Feedback Form</NavDropdown.Item>
                    <NavDropdown.Item>View All Feedback</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Help" id="">
                    <NavDropdown.Item>+91 9727338866</NavDropdown.Item>
                    <NavDropdown.Item>help@holidaybazaar.com</NavDropdown.Item>
                </NavDropdown>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       
       </>
    )
}

export default NavigationBar