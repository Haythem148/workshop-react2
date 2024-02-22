/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Event(props) {
    const [event, setEvent] = useState(props.event);
    const buy = () => {
        props.showAlert(),

            setEvent((previousEvent) => ({
                ...previousEvent,
                nbParticipants: previousEvent.nbParticipants + 1,
                nbTickets: previousEvent.nbTickets - 1
            }))
    }
    const [isLiked, setIsLiked] = useState(false);

    const showLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`images/${event.nbTickets ? event.img : "sold_out.png"}`} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.price}</Card.Text>
                <Card.Text>
                    Number of tickets : {event.nbTickets}
                </Card.Text>
                <Card.Text>
                    Number of participants : {event.nbParticipants}
                </Card.Text>

                <Button variant="danger" disabled={event.nbTickets ? false : true} onClick={buy}>Book an Event</Button>
                <button type="button" class="btn btn-primary" onClick={showLike}>
                    {isLiked ? 'Dislike' : 'Like'}
                </button>

            </Card.Body>
        </Card>
    );
}

export default Event;