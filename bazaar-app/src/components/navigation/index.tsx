import React, {useState, useRef} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { helpChild, invoiceChild, itineraryChild, leadsChild, navigationConstant, toolsChild } from "../../constants"
import styles from "./navigation.module.css"
import OutsideClick from "../../Utilities/outsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    // const boxRef = useRef(null);
    // const boxOutsideClick = OutsideClick(boxRef)
    const [selectNav, setSelectNav] = useState('Dashboard' as any)
    return (
       <>
        
      {/* <div className="desc">
        {boxOutsideClick ? setSelectNav("") : "inside click"}
      </div> */}
       <Navbar className={`${styles.navbarWrapper} bg-body-tertiary`} bg="primary" >
      <Container fluid>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className={styles.navigationWrapper}>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* onMouseLeave={() => setSelectNav("")} onMouseEnter={() => setSelectNav(nav)} */}
            {/* <ul className={styles.navigationWrapper}>
                {
                    navigationConstant?.map((nav: any, index: any) => <>
                    <li className={selectNav === nav ? styles.activemenu : ""} key={index}
                    onClick={() => setSelectNav(nav)}>{nav} <FontAwesomeIcon icon={faAngleUp} /> </li>
                    </>)
                }
            </ul> */}
                {/* {
                    selectNav === "Leads" ? <ul className={styles.leadChildMenu}> 
                    {
                        leadsChild.map((list: any) => <li>{list}</li>)
                    }
                    </ul> : null
                }
                { 
                    selectNav === "My Itinerary" ? <ul className={styles.itineraryChildMenu}> 
                    {
                        itineraryChild.map((list: any) => <li>{list}</li>)
                    }
                    </ul> : null 
                }
                { 
                    selectNav === "Customer & Billing" ? <ul className={styles.invoiceChildMenu}> 
                    {
                        invoiceChild.map((list: any) => <li>{list}</li>)
                    }
                    </ul> : null}
                { 
                    selectNav === "Tools" ? <ul className={styles.toolsChildMenu}> 
                    {
                        toolsChild.map((list: any) => <li>{list}</li>)
                    }
                    </ul> : null
                }
                { selectNav === "Help" ? <ul className={styles.helpChildMenu}> 
                    {
                        helpChild.map((list: any) => <li>{list}</li>)
                    }
                    </ul> : null 
                } */}
                <Nav.Link href="#action2">Dashboard</Nav.Link>
                <NavDropdown title="Lead" id="">
                    <NavDropdown.Item href="#action3">Create new lead</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Manage leads
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="My Itinerary" id="">
                    <NavDropdown.Item>Customized Itinerary</NavDropdown.Item>
                    <NavDropdown.Item>Group Itinerary</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Ready Itinerary</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Customer & Billing" id="">
                    <NavDropdown.Item>Invoice</NavDropdown.Item>
                    <NavDropdown.Item>Proforma Invoice</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>My Customers</NavDropdown.Item>
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