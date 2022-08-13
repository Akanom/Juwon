import { Col } from "reactstrap";

export const Error = ({ errMsg }) => {
  return (
    <Col>
      <h4>{errMsg}</h4>
    </Col>
  );
};
