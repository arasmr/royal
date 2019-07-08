import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Col,Button } from 'reactstrap';

const Bruiloften = (props) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 title-dashboard d-flex justify-content-center align-items-center">
          <div className="button-group">
            <h2><a href="/bruiloften">Bruiloften Services</a></h2>
            {/* <button  type="button" onClick={() => props.history.replace('/bruiloften')} className="btn btn-sm btn-outline-primary">See More</button> */}
          </div>
      </div>
    </div>
  );
};

export default Bruiloften;