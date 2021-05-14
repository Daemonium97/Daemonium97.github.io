import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoPeople = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const e = store.people[params.theid];
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col>
					<Image
						className="w-100 h-100"
						variant="top"
						style={{
							width: "100px",
							height: "100px",
							boxShadow: "8px 6px 15px #9e9e9e"
						}}
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
					/>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>{e.name}</Card.Title>
							<Card.Text>Height: {e.height}</Card.Text>
							<Card.Text>Hair Color: {e.hair_color}</Card.Text>
							<Card.Text>
								Eye Color:
								{e.eye_color}
							</Card.Text>
							<Card.Text>Gender: {e.gender}</Card.Text>
							<Card.Text>Birth Year: {e.birth_year}</Card.Text>
						</Card.Body>
					</Card>
					<Link to="/people/ka">
						<Button id="infoPeopleButton" variant="primary">
							Go back to characters
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
