import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Col,Button } from 'reactstrap';

const Buffet = (props) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 title-dashboard d-flex justify-content-center align-items-center">
          <div className="button-group">
            <h2><a href="/zaalhuur">Zaalhuur Services</a></h2>
            {/* <button  type="button" onClick={() => props.history.replace('/zaalhuur')} className="btn btn-sm btn-outline-primary">See More</button>             */}
          </div>
      </div>
    </div>
  );
};

export default Buffet;