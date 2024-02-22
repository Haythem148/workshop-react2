import events from "../data/events.json"
import Event from "./Event";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";



function Events() {
    const [isShowAlert, setIsShowAlert] = useState(false)
    const showAlert = () => {
        setIsShowAlert(true);
        setTimeout(() =>
            setIsShowAlert(false), 2000)
    }
    const [isShowWelcome, setShowWelcome] = useState(true);

    const showWelcome = () => {
      setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
    };
    
    showWelcome();
    return (
        <>
            <Container >
                {isShowWelcome && (
                    <Alert variant="success">
                        <Alert.Heading>Bonjour Monsieur !</Alert.Heading>
                    </Alert>
                )}
                <Row>
                    {events.map((event, index) => (
                        <Event key={index} event={event} showAlert={showAlert} />
                    ))}
                </Row>
                {isShowAlert ? (<Alert variant="success">
                    <Alert.Heading>Succes, Have a nice day !</Alert.Heading>
                </Alert>) : (<></>)}

            </Container>
        </>
    );
}

export default Events;