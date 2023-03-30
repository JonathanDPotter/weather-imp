import { useEffect, useState } from "react";
import {
  CoordType,
  Coords,
  useLocationContext,
} from "../../context/Location.context";
import ZipModal from "../ZipModal/ZipModal";
import { Button, Col, Container, Row } from "react-bootstrap";

const LocationBar = () => {
  const {
    navCoords,
    zipCoords,
    setNavCoords,
    activeCoords,
    setActiveCoords,
    activeCoordType,
    setActiveCoordType,
  } = useLocationContext();

  const [locationString, setLocationString] = useState<string | null>(null);
  const [showZipModal, setShowZipModal] = useState(false);

  const getCity = async (coords: Coords) => {
    if (process.env.NODE_ENV === "test") return "Test City, USA";

    const api = await import("../../api");

    const response = await api.default.geoapify.getCity(coords);

    return response;
  };

  const getCoordsFromNavigator = () => {
    const response: Coords = { latitude: "1", longitude: "1" };
    if (process.env.NODE_ENV === "test") return response;

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      response.latitude = latitude.toString();
      response.longitude = longitude.toString();
    });

    return response;
  };

  const toggleShowZipModal = () => {
    setShowZipModal(!showZipModal);
  };
  
  useEffect(() => {
    !navCoords && setNavCoords(getCoordsFromNavigator());
    activeCoordType === CoordType.nav
      ? navCoords && setActiveCoords(navCoords)
      : zipCoords && setActiveCoords(zipCoords);
  }, [navCoords, zipCoords, activeCoordType]);

  useEffect(() => {
    (async () => {
      activeCoords && setLocationString(await getCity(activeCoords));
    })();
  }, [activeCoords]);

  return (
    <Container fluid className="location-bar bg-secondary">
      <Row className="align-items-center h-100">
        <Col>
          <span data-testid="location">
            {locationString ? locationString : "Getting Location..."}
          </span>
        </Col>
        <Col>
          <Button
            data-testid="go"
            variant="warning"
            onClick={
              activeCoordType === CoordType.nav
                ? toggleShowZipModal
                : () => setActiveCoordType(CoordType.nav)
            }
          >
            {activeCoordType === CoordType.nav
              ? "Get City by Zip Code"
              : "Get Device Location"}
          </Button>
        </Col>
        <ZipModal onClose={toggleShowZipModal} show={showZipModal} />
      </Row>
    </Container>
  );
};

export default LocationBar;
