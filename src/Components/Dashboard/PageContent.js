import React from 'react';
import Slide from './Slide';
import ZaalHuurServices from './ZaalHuurServices';
import Bruiloften from './Bruiloften';

export default class PageContent extends React.Component{
    render(){
        return(
            <div className="content_component">
                <div>
                    <Slide/>
                </div>
                <div className="content_comp_option">
                    <div>
                        <ZaalHuurServices history={this.props.history}/>
                    </div>
                    <div>
                        <Bruiloften history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}