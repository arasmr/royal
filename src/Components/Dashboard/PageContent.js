import React from 'react';
import ZaalHuurServices from './ZaalHuurServices';
import Bruiloften from './Bruiloften';

export default class PageContent extends React.Component{
    render(){
        return(
            <div className="container-fluid royal-image">
                <div className="royal-image">
                    
                </div>
                <div className="row d-flex">
                    <div className="col-12" style={{backgroundColor:"#F46488", height:"15vh"}}>
                        <div className="row">
                            <div className="col-sm-6 p-3" style={{color:"white", backgroundColor:"#F46488"}}>
                                <ZaalHuurServices history={this.props.history}/>
                            </div>
                            <div className="col-sm-6 p-3" style={{color:"white", backgroundColor:"#F46488"}}>
                                <Bruiloften history={this.props.history}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}