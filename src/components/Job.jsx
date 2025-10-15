import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="align-items-center mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1}>
        <button className="btn border border-dark" onClick={() => dispatch({ type: "ADD_TO_FAVORITES", payload: data })}>
          <StarFill />
        </button>
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
