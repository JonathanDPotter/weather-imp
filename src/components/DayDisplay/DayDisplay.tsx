import { FC } from "react";
import { ForecastDay } from "../../interfaces/forecast";
import { Card, Container, Row, Col } from "react-bootstrap";

interface Props {
  weather: ForecastDay;
}

const DayDisplay: FC<Props> = ({ weather }) => {
  const {
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    maxwind_mph,
    totalprecip_in,
    avghumidity,
    daily_will_it_rain,
    daily_chance_of_rain,
    daily_will_it_snow,
    daily_chance_of_snow,
    condition,
  } = weather.day;

  return (
    <Card className="my-4">
      <Card.Header className="bg-secondary">
        <Card.Title>
          {new Date(weather.hour[0].time).toLocaleDateString("en-US", {
            month: "short",
            weekday: "long",
            day: "numeric",
          })}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Container className="main">
          <Row>
            <Card.Text className="condition">{condition.text}</Card.Text>
          </Row>
          <Row>
            <Card.Img src={condition.icon} alt="condition icon" />
          </Row>
        </Container>
        <Container className="card-lower">
          <Row>
            <Col>
              <Card.Text>High</Card.Text>
            </Col>
            <Col>
              <Card.Text>Low</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{maxtemp_f}°F</Card.Text>
              <Card.Text>{maxtemp_c}°C</Card.Text>
            </Col>
            <Col>
              <Card.Text>{mintemp_f}°F</Card.Text>
              <Card.Text>{mintemp_c}°C</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Wind speed</Card.Text>
            </Col>
            <Col>
              <Card.Text>Humidity</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{maxwind_mph}mph</Card.Text>
            </Col>
            <Col>
              <Card.Text> {avghumidity}%</Card.Text>
            </Col>
          </Row>
          {daily_will_it_rain ? (
            <>
              <Row>
                <Col>
                  <Card.Text>Rain</Card.Text>
                </Col>
                <Col>
                  <Card.Text>Total</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>{daily_chance_of_rain}%</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{totalprecip_in}in</Card.Text>
                </Col>
              </Row>
            </>
          ) : null}
          {daily_will_it_snow ? (
            <>
              <Row>
                <Col>
                  <Card.Text>Snow</Card.Text>
                </Col>
                <Col>
                  <Card.Text>Total</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>{daily_chance_of_snow}%</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{totalprecip_in}in</Card.Text>
                </Col>
              </Row>
            </>
          ) : null}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default DayDisplay;
