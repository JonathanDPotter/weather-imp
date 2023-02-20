import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ForecastHour } from "../../interfaces/forecast";

interface Props {
  weather: ForecastHour;
}

const HourlyDisplay: FC<Props> = ({ weather }) => {
  const {
    time,
    temp_c,
    temp_f,
    condition,
    wind_mph,
    wind_dir,
    precip_in,
    humidity,
    cloud,
    feelslike_c,
    feelslike_f,
    vis_miles,
    gust_mph,
    uv,
  } = weather;

  return (
    <Card className="my-4">
      <Card.Header>
        <Card.Title>
          {new Date(time).toLocaleDateString("en-US", {
            hour: "numeric",
            month: "short",
            weekday: "short",
            day: "numeric",
          })}
        </Card.Title>
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
              <Card.Text>{temp_c}°C</Card.Text>
            </Col>
            <Col>
              <Card.Text>{feelslike_c}°C</Card.Text>
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
              <Card.Text>{precip_in}in</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>UV index</Col>
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

export default HourlyDisplay;
