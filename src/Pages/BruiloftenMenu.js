import React from 'react';
import { Col } from 'reactstrap';
import BruiloftenMenuItem from '../Components/BruiloftenMenu/BruiloftenMenuItem';

class BruiloftenMenu extends React.Component{
    render(){
        return (
            <Col sm="10">
                <BruiloftenMenuItem/>
            </Col>
          );
    }
};

export default BruiloftenMenu;