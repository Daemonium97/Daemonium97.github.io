import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardBody } from "reactstrap";

export const InfoPlanets = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const e = store.planets[params.theid];
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col>
					<Card>
						<Card.Img
							variant="top"
							src="https://sm.ign.com/t/ign_za/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_uxzr.1080.jpg"
						/>
					</Card>
				</Col>

				<Col>

					<CardBody>
						<Card.Title>{e.name}</Card.Title>
						<Card.Text>Rotation Period: {e.rotation_period}</Card.Text>
						<Card.Text>Orbital Period: {e.orbital_period}</Card.Text>
						<Card.Text>
							Diameter:
								{e.diameter}
						</Card.Text>
						<Card.Text>Climate: {e.climate}</Card.Text>
					</CardBody>
					</Card>
				<Link to="/planets/go">
					<Button id="infoPlanetButton" variant="primary">
						Go back to Planets
						</Button>
				</Link>
				</Col>
			</Row>
		</Container >
	);
};
