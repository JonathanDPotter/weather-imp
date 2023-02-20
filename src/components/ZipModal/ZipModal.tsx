import React, { ChangeEvent, FC, useState } from "react";
import { CoordType, useLocationContext } from "../../context/Location.context";
import { Button, Col, Form, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  onClose: () => void;
}

const ZipModal: FC<Props> = ({ show, onClose }) => {
  const { setZipCoords, setActiveCoordType } = useLocationContext();

  const [zipcode, setZipcode] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setZipcode(value);
  };

  const setZip = async (zipcode: string) => {
    if (process.env.NODE_ENV === "test") {
      setZipCoords({ latitude: "1", longitude: "1" });
    } else {
      const api = await import("../../api");

      setZipCoords(await api.default.geoapify.getCoordsFromZip(zipcode));
    }
    setActiveCoordType(CoordType.zip);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Find City by Zip Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Enter 5 digit zip code</Form.Label>
          <Form.Control onChange={handleChange} autoFocus></Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => setZip(zipcode)}
          disabled={!zipcode.match(/^\d{5}$/)}
        >
          Go!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ZipModal;
