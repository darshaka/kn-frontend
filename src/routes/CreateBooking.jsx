import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import request from "../services/request";

const CreateBooking = (props) => {
  const [formData, setFormData] = useState({});
  const [cost, setCost] = useState(0);

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const { data } = await request.post("/api/bookings", formData);
      if (data.status === "200") {
        props.history.goBack();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeFormHandler = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const calculatePrice = async () => {
    try {
      const { data } = await request.post("/api/cost", formData);
      console.log(data);
      setCost(data.data);
      setFormData({ ...formData, ["charges"]: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <Row>
          <h1>Booking Form</h1>
        </Row>
        <hr></hr>
        <Row lg="3">
          <Col>
            <h3>From</h3>
            <Form.Group className="lg-3">
              <Form.Label>Country From</Form.Label>
              <Form.Select
                name="fromCountry"
                onChange={(e) => changeFormHandler(e, "fromCountry")}
              >
                <option>Ireland</option>
                <option>Estonia</option>
                <option>Sri Lanka</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="fromAddress"
                onChange={(e) => changeFormHandler(e, "fromAddress")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postalCode"
                name="fromPostCode"
                onChange={(e) => changeFormHandler(e, "fromPostCode")}
              />
            </Form.Group>
          </Col>
          <Col>
            <h3>To</h3>
            <Form.Group className="lg-3">
              <Form.Label>Country From</Form.Label>
              <Form.Select
                name="toCountry"
                onChange={(e) => changeFormHandler(e, "toCountry")}
              >
                <option>Ireland</option>
                <option>Estonia</option>
                <option>Sri Lanka</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="toAddress"
                onChange={(e) => changeFormHandler(e, "toAddress")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postalCode"
                name="toPostCode"
                onChange={(e) => changeFormHandler(e, "toPostCode")}
              />
            </Form.Group>
          </Col>
        </Row>
        <hr></hr>
        <Row lg="4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter weight"
              name="weight"
              onChange={(e) => changeFormHandler(e, "weight")}
            />
            <Form.Text className="text-muted">
              Please add the wight in Kg.
            </Form.Text>
          </Form.Group>
        </Row>
        <hr></hr>
        <Row lg="4">
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Length (cm)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Length"
                name="length"
                onChange={(e) => changeFormHandler(e, "length")}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Width (cm)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Width"
                name="width"
                onChange={(e) => changeFormHandler(e, "width")}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Height"
                name="height"
                onChange={(e) => changeFormHandler(e, "height")}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="button" onClick={calculatePrice}>
          Calculate
        </Button>
        <hr></hr>
        <h3>{cost}</h3>
        <hr></hr>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBooking;
