import React, {Component} from'react'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default class Reservations extends Component {
    render(){
        return (
            <Card className="reservations">
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>
                        <h2>Reservations</h2>
                    </Card.Title>
     
                    <Card.Text>
                    All packages are priced for up to 6 people.  25% payment is due upon booking and remaining balance is due on date of charter.  At least 3 days in advance is required for booking.   A 48 hour cancellation policy is set in order to receive full deposit back.  Cancellation within 48 hours of charter is non refundable.  In cases of bad weather and we are unable to fish, you will receive the full deposit back.
                    </Card.Text>
                    <br></br>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-item-button" size="lg">
                            Book Now
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="div" style={{textAlign:"center", paddingTop:"10px"}}>Call: 803-924-5817</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    {/* <Button variant="primary" className="bookNowBtn">Book Now</Button> */}
                </Card.Body>
            </Card>
        );
    }
}