import { Col, Row } from "reactstrap";
import { selectAllPartners } from "./partnersSlice";
import Partner from "./Partner";
import { useSelector } from "react-redux";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";

const PartnersList = (partner) => {
  const partners = useSelector(selectAllPartners);
  console.log("partners: ", partners);

  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  // return isLoading ? (
  //     <Loading/>
  // ): errMsg ? (
  //     <Error errMsg={errMsg}/>
  // ):(

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }
  if (errMsg) {
    return <Error errMsg={errMsg} />;
  }

  return (
    <Col className="mt-4">
      {partners.map((partner) => {
        return (
          <div className="d-flex mb-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
