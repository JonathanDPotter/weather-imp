import React, { FC } from "react";
import Current from "../../interfaces/current";
import { Card, Col, Container, Row } from "react-bootstrap";

interface Props {
  weather: Current;
}

const CurrentDisplay: FC<Props> = ({ weather }) => {
  const {
    condition,
    temp_f,
    temp_c,
    feelslike_f,
    feelslike_c,
    wind_mph,
    wind_dir,
    precip_in,
    humidity,
    cloud,
    vis_miles,
    uv,
    gust_mph,
  } = weather.current;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <Card.Header>
        <Card.Title>{today}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Container className="main">
          <Card.Text className="condition">{condition.text}</Card.Text>
          <Card.Img src={condition.icon} alt="condition icon" />
          <Card.Text className="temp">{temp_f}°</Card.Text>
          <Card.Text>Feels Like {feelslike_f}°</Card.Text>
        </Container>
        <Container className="card-lower">
          <Row>
            <Col>Temp Celcius</Col>
            <Col>Feels Like</Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{temp_c}°</Card.Text>
            </Col>
            <Col>
              <Card.Text>{feelslike_c}°</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>Wind</Col>
            <Col>Humidity</Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                {wind_mph}mph {wind_dir}
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>{humidity}%</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>Visibility</Col>
            <Col>Precipitation</Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{vis_miles} miles</Card.Text>
            </Col>
            <Col>
              <Card.Text>{precip_in} inches</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>UV Index</Col>
            <Col>Gusts up to</Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{uv}</Card.Text>
            </Col>
            <Col>
              <Card.Text>{gust_mph}mph</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>Cloud Cover</Col>
            <Col></Col> {/*intentionally empty*/}
          </Row>
          <Row>
            <Col>
              <Card.Text>{cloud}%</Card.Text>
            </Col>
            <Col></Col> {/*intentionally empty*/}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CurrentDisplay;
