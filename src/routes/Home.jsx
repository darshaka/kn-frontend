import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import request from "../services/request";

const Home = ({ history }) => {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const { data } = await request.get("/api/bookings");
      setBookingList(data.dataList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-2 mx-1">
          <Button variant="primary" onClick={() => history.push("booking")}>
            New Booking
          </Button>
        </Col>
      </Row>
      <Row className="my-2">
        <p className="h4 mx-1">Bookings</p>
        <Table className="mx-3" striped bordered hover>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Weight</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.sender.country}</td>
                  <td>{item.receiver.country}</td>
                  <td>{item.weight}</td>
                  <td>{item.charges}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Home;
